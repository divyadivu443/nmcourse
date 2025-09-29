const form = document.getElementById('myForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const successMessage = document.getElementById('successMessage');

const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

function validateUsername() {
  if (username.value.trim().length < 3) {
    username.classList.add("error-input");
    usernameError.style.display = "block";
    return false;
  }
  username.classList.remove("error-input");
  username.classList.add("success");
  usernameError.style.display = "none";
  return true;
}

function validateEmail() {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email.value.trim())) {
    email.classList.add("error-input");
    emailError.style.display = "block";
    return false;
  }
  email.classList.remove("error-input");
  email.classList.add("success");
  emailError.style.display = "none";
  return true;
}

function validatePassword() {
  const re = /^(?=.*[0-9]).{6,}$/;
  if (!re.test(password.value.trim())) {
    password.classList.add("error-input");
    passwordError.style.display = "block";
    return false;
  }
  password.classList.remove("error-input");
  password.classList.add("success");
  passwordError.style.display = "none";
  return true;
}

function validateConfirmPassword() {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    confirmPassword.classList.add("error-input");
    confirmPasswordError.style.display = "block";
    return false;
  }
  confirmPassword.classList.remove("error-input");
  confirmPassword.classList.add("success");
  confirmPasswordError.style.display = "none";
  return true;
}

// Live validation
username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

// Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = validateUsername() & validateEmail() & validatePassword() & validateConfirmPassword();

  if (isValid) {
    successMessage.style.display = "block";
    form.reset();
    [username, email, password, confirmPassword].forEach(input => input.classList.remove("success"));
  } else {
    successMessage.style.display = "none";
  }
});
