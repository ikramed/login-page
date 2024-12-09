// JavaScript to validate form on submit
const form = document.getElementById('signup-form');
const passwordInput = document.getElementById('new-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  // Validate password length
  if (passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    valid = false;
  } else {
    passwordError.textContent = '';
  }

  // Validate confirm password
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    valid = false;
  } else {
    confirmPasswordError.textContent = '';
  }

  // If valid, submit form
  if (valid) {
    alert('Sign Up Successful!');
    // Normally, you'd submit the form here with form.submit();
  }
});