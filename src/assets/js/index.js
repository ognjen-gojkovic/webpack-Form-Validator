import style from "../css/style.module.css";
import container from "./form/form";
import {
  checkEmail,
  checkLenght,
  checkPasswordsMatch,
} from "./functionality/functionality";

const app = document.createElement("div");
app.className = style.app;
// app.textContent = "Hello from Webpack";
app.appendChild(container);

document.body.appendChild(app);

//=========================================================================================
//=========================================================================================

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail("email");
  checkLenght("username", 3, 15);
  checkLenght("password", 6, 25);
  checkPasswordsMatch("password", "password2");
});
