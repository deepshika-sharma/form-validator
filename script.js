const form = document.querySelector("form");
const fullName = document.getElementById("full-name");
const number = document.getElementById("phone-number");
const email = document.getElementById("email-address");
const url = document.getElementById("website-url");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const message = document.querySelector(".message");

let isValid = false;
let passwordsMatch = false;

const validateForm = () => {
  // Using Constraint API
  isValid = form.checkValidity();
  // Style Message
  if (!isValid) {
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    message.style.border = "1px solid red";
    return;
  }

  // Check password match
  if (password.value === confirmPassword.value) {
    passwordsMatch = true;
    confirmPassword.style.border = "1px solid green";
  } else {
    passwordsMatch = false;
    message.textContent = "Passwords don't match";
    message.style.color = "red";
    message.style.border = "1px solid red";
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
    return;
  }

  // If form is valid and passwords match
  if (passwordsMatch && isValid) {
    message.textContent = "Successfully Registered";
    message.style.color = "green";
    message.style.border = "1px solid green";
    password.style.border = "1px solid green";
  }
};

const storeFormData = () => {
  const user = {
    name: fullName.value,
    number: number.value,
    email: email.value,
    url: url.value,
    password: password.value,
  };
  console.log(user);
};

const processFormData = (e) => {
  e.preventDefault();
  // Validate Form
  validateForm();
  // Submit Data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
};

// Event Listener
form.addEventListener("submit", processFormData);
