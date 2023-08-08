const subscribeButton = document.getElementById('subscribe-btn');
const subscribePage = document.getElementById('subscribe-page');
const subscriptionMessage = document.getElementById('subscription-message');
const userInput = document.getElementById('email');
const subscribeMessage = document.getElementById('email-placeholder');
const errorLabel = document.getElementById('error-label');
const dismissButton = document.getElementById('dismiss-btn');

subscribeButton.addEventListener('click', () => {
  const email = userInput.value;

  if (email) {
    subscribePage.style.display = 'none';
    subscribeMessage.textContent = `${email}`;
    subscriptionMessage.style.display = 'block';
  }

  const errorValidation = () => {
    if (!validateEmail(email)) {
      errorLabel.textContent = 'Valid email required';
      errorLabel.style.display = 'inline';
      userInput.classList.add('error-input');
    } else {
      errorLabel.textContent = '';
      errorLabel.style.display = 'none';
      userInput.classList.remove('error-input');
      displayThankYouPage(email);
    }
  }

  const validateEmail = (email) => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidation.test(email);
  }

  errorValidation();
});

dismissButton.addEventListener('click', () => {
  subscribePage.style.display = '';
  subscriptionMessage.style.display = 'none';
  subscribeMessage.textContent = '';
});