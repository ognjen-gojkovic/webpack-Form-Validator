import style from "./formControl.module.css";

function formControlBuilder(
  forLabel,
  labelTitle,
  inputType,
  inputId,
  placeholder
) {
  const formControl = document.createElement("div");
  const formLabel = document.createElement("label");
  const formInput = document.createElement("input");
  const formSmall = document.createElement("small");

  formLabel.htmlFor = forLabel;
  formLabel.textContent = labelTitle;
  formInput.type = inputType;
  formInput.id = inputId;
  formInput.placeholder = placeholder;

  formControl.className = style.formControl;
  formControl.appendChild(formLabel);
  formControl.appendChild(formInput);
  formControl.appendChild(formSmall);

  return formControl;
}

export default formControlBuilder;
