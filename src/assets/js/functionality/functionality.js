import style from "../formControl/formControl.module.css";

console.log("style.error: ", style.error);
export function showError(elementId, styleClass, message) {
  const formInput = document.getElementById(elementId);
  const parent = formInput.parentElement;
  parent.className = styleClass;
  const formSmall = formInput.parentElement.querySelector("small");
  formSmall.textContent = message;
}
export function showSuccess(elementId, styleClass) {
  const formInput = document.getElementById(elementId);
  formInput.parentElement.className = styleClass;
}
export function checkEmail(elementId) {
  const formEmail = document.getElementById(elementId);
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(formEmail.value.trim())) {
    showSuccess(elementId, `${style.success} ${style.formControl}`);
  } else {
    showError(
      elementId,
      `${style.error} ${style.formControl}`,
      "Email is not valid."
    );
  }
}

// get field name
function getFieldName(elementId) {
  return elementId.id.charAt(0).toUpperCase() + elementId.id.slice(1);
}

// function check validity
export function checkLenght(elementId, min, max) {
  const formElement = document.getElementById(elementId);
  if (formElement.value.length < min) {
    showError(
      elementId,
      `${style.error} ${style.formControl}`,
      `${getFieldName(formElement)} must be at least ${min} characters long.`
    );
  } else if (formElement.value.lenght > max) {
    showError(
      elementId,
      `${style.error} ${style.formControl}`,
      `${getFieldName(formElement)} must be less then ${max} characters long.`
    );
  } else {
    showSuccess(elementId, `${style.success} ${style.formControl}`);
  }
}

// check passwords match
export function checkPasswordsMatch(elementId1, elementId2) {
  const formPassword1 = document.querySelector(`#${elementId1}`);
  const formPassword2 = document.querySelector(`#${elementId2}`);

  console.log("formPassword: ", formPassword1);
  if (formPassword1.value !== formPassword2.value) {
    showError(
      elementId2,
      `${style.success} ${style.formControl}`,
      "Passwords do not match."
    );
  } else {
    showSuccess(elementId2, `${style.success} ${style.formControl}`);
  }
}
