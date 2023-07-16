const validateEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // Password should be at least 6 characters long
  return password.length >= 6;
};

module.exports = { validateEmail, validatePassword };
