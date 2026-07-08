import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const dataDir = join(process.cwd(), 'src', 'data');
const requiredStepFields = [
  'id',
  'title',
  'time',
  'body',
  'whyItMatters',
  'actionTitle',
  'actionSteps',
  'readyToContinue',
  'takeaway'
];

const errors = [];

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}

function findJourneyArrayStart(source) {
  const exportMatch = source.match(/export const \w+(?:\s*:[^=]+)?\s*=/);
  if (!exportMatch || exportMatch.index === undefined) return -1;

  const afterAssignment = exportMatch.index + exportMatch[0].length;
  return source.indexOf('[', afterAssignment);
}

function extractExportedArrays(source) {
  const matches = [...source.matchAll(/export const (\w+)(?:\s*:[^=]+)?\s*=\s*\[/g)];
  return matches.map((match) => match[1]);
}

function extractStepObjects(source) {
  const arrayStart = findJourneyArrayStart(source);
  const arrayEnd = source.lastIndexOf('];');
  if (arrayStart === -1 || arrayEnd === -1 || arrayEnd <= arrayStart) return [];

  const body = source.slice(arrayStart + 1, arrayEnd);
  const objects = [];
  let depth = 0;
  let current = '';
  let collecting = false;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  for (const char of body) {
    if (inString) {
      current += char;
      if (escaped) {
        escaped = false;
      } else if (char === '\\') {
        escaped = true;
      } else if (char === stringChar) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      if (collecting) current += char;
      inString = true;
      stringChar = char;
      continue;
    }

    if (char === '{') {
      collecting = true;
      depth += 1;
      current += char;
      continue;
    }

    if (!collecting) continue;

    current += char;

    if (char === '}') {
      depth -= 1;
      if (depth === 0) {
        objects.push(current.trim().replace(/,$/, ''));
        current = '';
        collecting = false;
      }
    }
  }

  return objects;
}

function hasField(objectSource, field) {
  return new RegExp(`\\b${field}\\s*:`).test(objectSource);
}

function extractStringField(objectSource, field) {
  const pattern = `${field}\\s*:\\s*['"\`]([^'"\`]+)['"\`]`;
  const match = objectSource.match(new RegExp(pattern));
  return match?.[1];
}

function validateChoices(file, stepId, objectSource) {
  if (!hasField(objectSource, 'choices')) return;

  const choicesStart = objectSource.indexOf('choices');
  const choicesSource = objectSource.slice(choicesStart);

  if (choicesSource.includes('isBest') && !choicesSource.includes('feedback')) {
    fail(file, `step "${stepId}" uses isBest but has no feedback text`);
  }

  if (choicesSource.includes('promptPart') && !['task', 'context', 'format', 'tone'].some((id) => stepId.includes(id))) {
    fail(file, `step "${stepId}" uses promptPart outside an expected prompt-building step`);
  }
}

function looksLikeJourneyStepData(source) {
  return requiredStepFields.every((field) => source.includes(`${field}:`));
}

async function validateFile(file) {
  const source = await readFile(join(dataDir, file), 'utf8');

  if (!looksLikeJourneyStepData(source)) {
    return;
  }

  const exports = extractExportedArrays(source);
  const steps = extractStepObjects(source);

  if (!exports.length) {
    fail(file, 'does not export a journey array');
  }

  if (!steps.length) {
    fail(file, 'does not contain any step objects');
    return;
  }

  const ids = new Set();

  steps.forEach((stepSource, index) => {
    const stepLabel = `step ${index + 1}`;
    const id = extractStringField(stepSource, 'id');

    requiredStepFields.forEach((field) => {
      if (!hasField(stepSource, field)) {
        fail(file, `${stepLabel} is missing required field "${field}"`);
      }
    });

    if (!id) {
      fail(file, `${stepLabel} is missing a string id`);
      return;
    }

    if (ids.has(id)) {
      fail(file, `duplicate step id "${id}"`);
    }
    ids.add(id);

    validateChoices(file, id, stepSource);
  });
}

async function main() {
  const directoryExists = await stat(dataDir).then((result) => result.isDirectory()).catch(() => false);
  if (!directoryExists) {
    throw new Error('src/data directory was not found');
  }

  const files = (await readdir(dataDir)).filter((file) => file.endsWith('.ts'));

  for (const file of files) {
    await validateFile(file);
  }

  if (errors.length) {
    console.error('Journey validation failed:\n');
    errors.forEach((error) => console.error(`- ${error}`));
    process.exit(1);
  }

  console.log(`Journey validation passed for ${files.length} data files.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
