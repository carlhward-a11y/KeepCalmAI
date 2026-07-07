let currentLesson = 0;

const progressLabel = document.querySelector("#progress-label");
const progressBar = document.querySelector("#progress-bar");
const lessonTitle = document.querySelector("#lesson-title");
const lessonTime = document.querySelector("#lesson-time");
const lessonBody = document.querySelector("#lesson-body");
const tryTitle = document.querySelector("#try-title");
const tryText = document.querySelector("#try-text");
const takeaway = document.querySelector("#takeaway");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");

function renderLesson() {
  const lesson = lessons[currentLesson];
  const progress = ((currentLesson + 1) / lessons.length) * 100;

  progressLabel.textContent = `Step ${currentLesson + 1} of ${lessons.length}`;
  progressBar.style.width = `${progress}%`;
  lessonTitle.textContent = lesson.title;
  lessonTime.textContent = lesson.time;
  lessonBody.innerHTML = lesson.body.map(paragraph => `<p>${paragraph}</p>`).join("");
  tryTitle.textContent = lesson.tryTitle;
  tryText.textContent = lesson.tryText;
  takeaway.textContent = lesson.takeaway;

  backButton.disabled = currentLesson === 0;
  nextButton.textContent = currentLesson === lessons.length - 1 ? "Finish" : "Continue";
}

backButton.addEventListener("click", () => {
  if (currentLesson > 0) {
    currentLesson -= 1;
    renderLesson();
    lessonTitle.focus();
  }
});

nextButton.addEventListener("click", () => {
  if (currentLesson < lessons.length - 1) {
    currentLesson += 1;
    renderLesson();
    lessonTitle.focus();
  } else {
    nextButton.textContent = "Completed";
    nextButton.disabled = true;
  }
});

renderLesson();
