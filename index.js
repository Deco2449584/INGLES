function constructSentence(
  timeSelector,
  subject,
  verb,
  complement,
  isQuestion
) {
  switch (timeSelector) {
    case "simple-past":
      return isQuestion
        ? `<span class="highlight-question">Did</span> ${subject} ${verb} ${complement}?`
        : `${subject} ${verb}<span class="highlight-simple-past">ed</span> ${complement}`;
    case "continuous-past":
      return isQuestion
        ? `<span class="highlight-question">Was/Were</span> ${subject} ${verb}<span class="highlight-continuous-past">ing</span> ${complement}?`
        : `${subject} <span class="highlight-continuous-past">was/were</span> ${verb}<span class="highlight-continuous-past">ing</span> ${complement}`;
    case "perfect-past":
      return isQuestion
        ? `<span class="highlight-question">Had</span> ${subject} ${verb}<span class="highlight-perfect-past">ed</span> ${complement}?`
        : `${subject} <span class="highlight-perfect-past">had</span> ${verb}<span class="highlight-perfect-past">ed</span> ${complement}`;
    case "simple-present":
      if (
        subject.toLowerCase() === "he" ||
        subject.toLowerCase() === "she" ||
        subject.toLowerCase() === "it"
      ) {
        return isQuestion
          ? `<span class="highlight-question">Does</span> ${subject} ${verb} ${complement}?`
          : `${subject} ${verb}<span class="highlight-simple-present">s</span> ${complement}`;
      } else {
        return isQuestion
          ? `<span class="highlight-question">Do</span> ${subject} ${verb} ${complement}?`
          : `${subject} ${verb}<span class="highlight-simple-present">s</span> ${complement}`;
      }
    case "continuous-present":
      return isQuestion
        ? `<span class="highlight-question">Is/Are</span> ${subject} ${verb}<span class="highlight-continuous-present">ing</span> ${complement}?`
        : `${subject} <span class="highlight-continuous-present">is/are</span> ${verb}<span class="highlight-continuous-present">ing</span> ${complement}`;
    case "perfect-present":
      return isQuestion
        ? `<span class="highlight-question">Has/Have</span> ${subject} ${verb}<span class="highlight-perfect-present">ed</span> ${complement}?`
        : `${subject} <span class="highlight-perfect-present">has/have</span> ${verb}<span class="highlight-perfect-present">ed</span> ${complement}`;
    case "simple-future":
      return isQuestion
        ? `<span class="highlight-question">Will</span> ${subject} ${verb} ${complement}?`
        : `${subject} <span class="highlight-simple-future">will</span> ${verb} ${complement}`;
    case "continuous-future":
      return isQuestion
        ? `<span class="highlight-question">Will</span> ${subject} be ${verb}<span class="highlight-continuous-future">ing</span> ${complement}?`
        : `${subject} <span class="highlight-continuous-future">will be</span> ${verb}<span class="highlight-continuous-future">ing</span> ${complement}`;
    case "perfect-future":
      return isQuestion
        ? `<span class="highlight-question">Will</span> ${subject} have ${verb}<span class="highlight-perfect-future">ed</span> ${complement}?`
        : `${subject} <span class="highlight-perfect-future">will have</span> ${verb}<span class="highlight-perfect-future">ed</span> ${complement}`;
    default:
      return "Tiempo verbal no soportado.";
  }
}

document
  .getElementById("sentenceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const timeSelector = document.getElementById("timeSelector");
    const subject = document.getElementById("subjectInput");
    const verb = document.getElementById("verbInput");
    const complement = document.getElementById("complementInput");
    const enableQuestion = document.getElementById("enableQuestion").checked;
    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    // Limpiar mensajes de error
    clearErrors();

    if (validateInputs(timeSelector, subject, verb, complement)) {
      let sentence = constructSentence(
        timeSelector.value,
        subject.value,
        verb.value,
        complement.value,
        enableQuestion
      );
      result.innerHTML = `Oración: ${sentence}`;
      resultContainer.classList.remove("hidden");
      resultContainer.classList.add("success");
    }
  });

function validateInputs(timeSelector, subject, verb, complement) {
  let isValid = true;

  if (!timeSelector.value) {
    displayError("timeSelectorError", "Selecciona un tiempo verbal.");
    isValid = false;
  }

  if (!subject.value.trim()) {
    displayError("subjectInputError", "El sujeto es obligatorio.");
    isValid = false;
  }

  if (!verb.value.trim()) {
    displayError("verbInputError", "El verbo es obligatorio.");
    isValid = false;
  }

  if (!complement.value.trim()) {
    displayError("complementInputError", "El complemento es obligatorio.");
    isValid = false;
  }

  return isValid;
}

function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  document
    .querySelectorAll(".error")
    .forEach((el) => (el.style.display = "none"));
}

document.getElementById("speakButton").addEventListener("click", function () {
  const sentence = document
    .getElementById("result")
    .innerText.replace("Oración: ", "");
  const utterance = new SpeechSynthesisUtterance(sentence);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
});
