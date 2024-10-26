// script.js

// Función para enviar el mensaje del usuario
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const messagesContainer = document.getElementById('chatbox-messages');

    // Si el campo de entrada no está vacío
    if (userInput.trim() !== "") {
        // Crear y mostrar el mensaje del usuario
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = userInput;
        messagesContainer.appendChild(userMessage);

        // Respuesta automática del bot
        setTimeout(() => {
            generateBotResponse(userInput);
        }, 1000);

        // Limpiar el campo de entrada de texto
        document.getElementById('user-input').value = "";
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Función para manejar la selección de opciones predeterminadas
function handleOption(option) {
    const messagesContainer = document.getElementById('chatbox-messages');

    // Crear y mostrar el mensaje de la opción seleccionada
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = option;
    messagesContainer.appendChild(userMessage);

    // Generar respuesta del bot basada en la opción seleccionada
    setTimeout(() => {
        generateBotResponse(option);
    }, 1000);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Función para generar las respuestas automáticas del bot
function generateBotResponse(input) {
    const messagesContainer = document.getElementById('chatbox-messages');
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');

    // Lógica para determinar la respuesta basada en el input del usuario
    if (input.toLowerCase().includes("horario de atención")) {
        botMessage.textContent = "Nuestro horario de atención es de 8:00 am a 6:00 pm.";
    } else if (input.toLowerCase().includes("pasos para reclamación")) {
        botMessage.textContent = "Ingrese a la PQR innovatetech.com.co.";
    } else {
        botMessage.textContent = "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?";
    }

    messagesContainer.appendChild(botMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Pregunta al usuario si desea más información y carga el menú principal
    setTimeout(() => {
        askForMoreInfo();
    }, 1500);
}

// Función para preguntar si se desea más información
function askForMoreInfo() {
    const messagesContainer = document.getElementById('chatbox-messages');
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');

    botMessage.textContent = "¿Deseas más información?";
    messagesContainer.appendChild(botMessage);

    // Cargar el menú principal con opciones
    const optionsMessage = document.createElement('div');
    optionsMessage.classList.add('message', 'bot-message');
    optionsMessage.innerHTML = `
        <button onclick="handleOption('Horario de atención')">Horario de atención</button>
        <button onclick="handleOption('Pasos para reclamación')">Pasos para reclamación</button>
        <button onclick="handleOption('Otro')">Otro</button>
    `;
    messagesContainer.appendChild(optionsMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

