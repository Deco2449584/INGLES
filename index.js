document
  .getElementById("sentenceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const timeSelector = document.getElementById("timeSelector");
    const subject = document.getElementById("subjectInput");
    const verb = document.getElementById("verbInput");
    const complement = document.getElementById("complementInput");
    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    // Limpiar mensajes de error
    clearErrors();

    if (validateInputs(timeSelector, subject, verb, complement)) {
      let sentence = constructSentence(
        timeSelector.value,
        subject.value,
        verb.value,
        complement.value
      );
      result.innerText = `Oración: ${sentence}`;
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

function constructSentence(timeSelector, subject, verb, complement) {
  switch (timeSelector) {
    case "simple-past":
      return `${subject} ${verb}ed ${complement}`;
    case "continuous-past":
      return `${subject} was/were ${verb}ing ${complement}`;
    case "perfect-past":
      return `${subject} had ${verb}ed ${complement}`;
    case "simple-present":
      return `${subject} ${verb}s ${complement}`;
    case "continuous-present":
      return `${subject} is/are ${verb}ing ${complement}`;
    case "perfect-present":
      return `${subject} has/have ${verb}ed ${complement}`;
    case "simple-future":
      return `${subject} will ${verb} ${complement}`;
    case "continuous-future":
      return `${subject} will be ${verb}ing ${complement}`;
    case "perfect-future":
      return `${subject} will have ${verb}ed ${complement}`;
    default:
      return "Tiempo verbal no soportado.";
  }
}
document.getElementById("speakButton").addEventListener("click", function () {
  const sentence = document
    .getElementById("result")
    .innerText.replace("Oración: ", "");
  const utterance = new SpeechSynthesisUtterance(sentence);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
});
