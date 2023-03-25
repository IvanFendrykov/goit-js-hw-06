const inputValidation = document.querySelector("#validation-input");

inputValidation.addEventListener("blur", onInputBlur);

function onInputBlur() {
  const inputLength = Number(inputValidation.dataset.length);
  const inputValueLength = Number(inputValidation.value.length);

  if (inputLength === inputValueLength) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  }
}
