// Get DOM elements
const changeImageBtn = document.getElementById('change-image-btn');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const locationInput = document.getElementById('location-input');
const settingsForm = document.getElementById('settings-form');
const chatbotForm = document.getElementById('chatbot-form');
const chatbotContainer = document.getElementById('chatbot-container');
const messageInput = document.getElementById('message-input');

// Change profile image
changeImageBtn.addEventListener('click', () => {
  // Replace the logic below with your own implementation to change the profile image
  alert('Change image functionality will be implemented here');
});

// Save profile settings
settingsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get input values
  const name = nameInput.value;
  const email = emailInput.value;
  const location = locationInput.value;
  
  // Replace the logic below with your own implementation to save the profile settings
  alert(`Name: ${name}\nEmail: ${email}\nLocation: ${location}\n\nProfile settings saved successfully`);
});

// Send message in chatbot
chatbotForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message input value
  const message = messageInput.value;

  // Replace the logic below with your own implementation to handle the chatbot message sending
  // For this example, we'll just display the message in the chatbot container
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  chatbotContainer.appendChild(messageElement);

  // Clear the input field
  messageInput.value = '';
});
