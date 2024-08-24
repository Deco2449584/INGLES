function constructSentence(
  timeSelector,
  subject,
  verb,
  complement,
  isQuestion,
  isNegation
) {
  const negation = isNegation ? "not " : "";
  switch (timeSelector) {
    case "simple-past":
      return isQuestion
        ? `<span class="highlight">Did</span> ${subject} ${negation}${verb} ${complement}?`
        : `${subject} ${negation}${verb}<span class="highlight">ed</span> ${complement}`;
    case "continuous-past":
      return isQuestion
        ? `<span class="highlight">Was/Were</span> ${subject} ${negation}${verb}<span class="highlight">ing</span> ${complement}?`
        : `${subject} <span class="highlight">was/were</span> ${negation}${verb}<span class="highlight">ing</span> ${complement}`;
    case "perfect-past":
      return isQuestion
        ? `<span class="highlight">Had</span> ${subject} ${negation}${verb}<span class="highlight">ed</span> ${complement}?`
        : `${subject} <span class="highlight">had</span> ${negation}${verb}<span class="highlight">ed</span> ${complement}`;
    case "simple-present":
      if (
        subject.toLowerCase() === "he" ||
        subject.toLowerCase() === "she" ||
        subject.toLowerCase() === "it"
      ) {
        return isQuestion
          ? `<span class="highlight">Does</span> ${subject} ${negation}${verb} ${complement}?`
          : `${subject} ${negation}${verb}<span class="highlight">s</span> ${complement}`;
      } else {
        return isQuestion
          ? `<span class="highlight">Do</span> ${subject} ${negation}${verb} ${complement}?`
          : `${subject} ${negation}${verb}<span class="highlight">s</span> ${complement}`;
      }
    case "continuous-present":
      return isQuestion
        ? `<span class="highlight">Is/Are</span> ${subject} ${negation}${verb}<span class="highlight">ing</span> ${complement}?`
        : `${subject} <span class="highlight">is/are</span> ${negation}${verb}<span class="highlight">ing</span> ${complement}`;
    case "perfect-present":
      return isQuestion
        ? `<span class="highlight">Has/Have</span> ${subject} ${negation}${verb}<span class="highlight">ed</span> ${complement}?`
        : `${subject} <span class="highlight">has/have</span> ${negation}${verb}<span class="highlight">ed</span> ${complement}`;
    case "simple-future":
      return isQuestion
        ? `<span class="highlight">Will</span> ${subject} ${negation}${verb} ${complement}?`
        : `${subject} <span class="highlight">will</span> ${negation}${verb} ${complement}`;
    case "continuous-future":
      return isQuestion
        ? `<span class="highlight">Will</span> ${subject} ${negation}be ${verb}<span class="highlight">ing</span> ${complement}?`
        : `${subject} <span class="highlight">will be</span> ${negation}${verb}<span class="highlight">ing</span> ${complement}`;
    case "perfect-future":
      return isQuestion
        ? `<span class="highlight">Will</span> ${subject} ${negation}have ${verb}<span class="highlight">ed</span> ${complement}?`
        : `${subject} <span class="highlight">will have</span> ${negation}${verb}<span class="highlight">ed</span> ${complement}`;
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
    const enableNegation = document.getElementById("enableNegation").checked;
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
        enableQuestion,
        enableNegation
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
