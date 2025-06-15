const formId = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

formId.addEventListener("submit", (e) => {
  e.preventDefault();

  clearErrors();
  successMessage.textContent = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  // Name validation
  if (name === "") {
    showError("nameError", "Name is required");
    isValid = false;
  } else if (name.length < 2) {
    showError("nameError", "Name must be at least 2 characters");
    isValid = false;
  }

  // Email validation
  if (email === "") {
    showError("emailError", "Email is required");
    isValid = false;
  } else if (!isValidEmail(email)) {
    showError("emailError", "Please enter a valid email");
    isValid = false;
  }

  // Password validation
  if (password === "") {
    showError("passwordError", "Password is required");
    isValid = false;
  } else if (password.length < 6) {
    showError("passwordError", "Password must be at least 6 characters");
    isValid = false;
  }

  // Message validation
  if (message === "") {
    showError("messageError", "Message is required");
    isValid = false;
  } else if (message.length < 10) {
    showError("messageError", "Message must be at least 10 characters");
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    formId.reset();
  }
});

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;

  // Add error class to the corresponding input
  const inputId = elementId.replace("Error", "");
  const inputElement = document.getElementById(inputId);
  inputElement.classList.add("error");
}

function clearErrors() {
  // Clear all error messages
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach((element) => {
    element.textContent = "";
  });

  // Remove error classes from inputs
  const inputElements = document.querySelectorAll("input, textarea");
  inputElements.forEach((element) => {
    element.classList.remove("error");
  });
}

function isValidEmail(email) {
  // Simple email validation regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
