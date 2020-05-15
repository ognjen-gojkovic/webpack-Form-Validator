import style from "./form.module.css";
import formControl from "../formControl/formControl";

const formContainer = document.createElement("div");
const form = document.createElement("form");
const formHeader = document.createElement("h2");
const formButton = document.createElement("button");

formHeader.textContent = "Form Validator";
form.setAttribute("id", "form");
form.className = style.form;
formButton.textContent = "Submit";
form.appendChild(formHeader);
form.appendChild(
  formControl(
    "username",
    "Username",
    "text",
    "username",
    "Enter your username..."
  )
);
form.appendChild(
  formControl("email", "Email", "text", "email", "Enter your email...")
);
form.appendChild(
  formControl(
    "password",
    "Password",
    "password",
    "password",
    "Enter your password..."
  )
);
form.appendChild(
  formControl(
    "password2",
    "Confirmation",
    "password",
    "password2",
    "Confirm Password."
  )
);

form.appendChild(formButton);

formContainer.className = style.container;
formContainer.appendChild(form);


export default formContainer;
