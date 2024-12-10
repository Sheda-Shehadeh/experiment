// Handle navigation from the project info page to the chatbox page
document.getElementById('start-button').addEventListener('click', () => {
    // Hide the info page
    document.getElementById('info-page').style.display = 'none';  
    // Show the chatbox page
    document.getElementById('chat-container').style.display = 'flex';  
});

// Handle navigation from the chatbox page back to the info page
document.getElementById('back-button').addEventListener('click', () => {
    // Hide the chatbox page
    document.getElementById('chat-container').style.display = 'none';  
    // Show the info page
    document.getElementById('info-page').style.display = 'flex';  
});

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();
    if (messageText === '') return;

    // Add user message to chat
    addMessage(messageText, 'user-message');

    // Clear input
    input.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botReply = generateBotResponse(messageText);
        addMessage(botReply, 'bot-message');
    }, 500);
}

function addMessage(text, className) {
    const messages = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = text;
    messages.appendChild(messageElement);

    // Scroll to the bottom
    messages.scrollTop = messages.scrollHeight;
}

function generateBotResponse(userMessage) {
    // Simple bot response logic
    return `You said: "${userMessage}".`;
}
