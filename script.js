const form = document.querySelector("form");
const fullName = document.getElementById("full-name");
const number = document.getElementById("phone-number");
const email = document.getElementById("email-address");
const url = document.getElementById("website-url");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const message = document.querySelector(".message");

confirmPassword.addEventListener("input", () => {
  if (password.value === confirmPassword.value) {
    confirmPassword.style.border = "1px solid green";
  } else {
    confirmPassword.style.border = "1px solid red";
  }
});

confirmPassword.addEventListener("change", () => {
  if (password.value === confirmPassword.value) {
    confirmPassword.style.border = "1px solid green";
    message.textContent = "Don't Hesitate";
    message.style.color = "black";
  } else {
    message.textContent = "Passwords don't match";
    message.style.color = "red";
    confirmPassword.style.border = "1px solid red";
  }
});

form.addEventListener("submit", () => {
  message.textContent = "Successfully Registered";
  message.style.color = "green";
  console.log({
    name: fullName.value,
    number: number.value,
    email: email.value,
    url: url.value,
    password: password.value,
  });
  form.reset();
});
