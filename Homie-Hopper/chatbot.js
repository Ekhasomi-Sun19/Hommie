// Get DOM elements
const chatDisplay = document.getElementById('chat-display');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Add event listener to send button
sendButton.addEventListener('click', sendMessage);

// Function to handle user input
function sendMessage() {
  const userMessage = userInput.value;

  // Display user message
  displayMessage('user', userMessage);

  // Call a function to generate bot response
  const botResponse = generateBotResponse(userMessage);

  // Display bot response
  displayMessage('bot', botResponse);

  // Clear user input
  userInput.value = '';
}

// Function to display messages in the chat display area
function displayMessage(sender, message) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message');

  if (sender === 'user') {
    messageContainer.classList.add('user-message');
  } else if (sender === 'bot') {
    messageContainer.classList.add('bot-message');
  }

  messageContainer.textContent = message;
  chatDisplay.appendChild(messageContainer);

  // Scroll to the bottom of the chat display
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

// Function to generate a bot response
function generateBotResponse(userMessage) {
  // Add your bot logic here to generate a response
  // You can use conditionals, APIs, or any other means to generate the response
  // For this example, let's simply echo the user's message
  return "You said: " + userMessage;
}
