import "../css/style.module.css";

function saySomething(message) {
  const title = document.createElement("h2");
  title.textContent = message;
  document.body.appendChild(title);
}

saySomething("Hello from Webpack!!");
