// Abrir y cerrar el chatbot
document.getElementById('open-chatbot').addEventListener('click', function() {
    document.getElementById('chat-window').classList.remove('hidden');
    resetChat(); // Reinicia el chat al abrirlo
});

document.getElementById('close-chatbot').addEventListener('click', function() {
    document.getElementById('chat-window').classList.add('hidden');
    resetChat(); // Reinicia el chat al cerrarlo
});

// Función para mostrar información de cada opción
function showInfo(option) {
    let chatBody = document.querySelector('.chat-body');
    let response = '';

    // Respuestas basadas en la opción seleccionada
    switch (option) {
        case 'donar':
            response = `
                <p>¡Gracias por querer apoyar a nuestros niños y niñas! A continuación te dejamos las opciones para realizar tu donación:</p>
                <button class="chat-option" onclick="showDonationInfo('plin-yape')">Donar por Plin o Yape</button>
                <button class="chat-option" onclick="showDonationInfo('transferencia')">Donar por transferencia</button>
                <button class="chat-option" onclick="resetChat()">Volver</button>
            `;
            break;
        case 'necesito-ayuda':
            response = `
                <p>¿En qué podemos ayudarte? Por favor, elige una de las siguientes opciones:</p>
                <button class="chat-option" onclick="showHelpInfo('asistencia-ninos')">Asistencia para niños</button>
                <button class="chat-option" onclick="showHelpInfo('apoyo-educativo')">Apoyo educativo</button>
                <button class="chat-option" onclick="showHelpInfo('asistencia-legal')">Asistencia legal</button>
                <button class="chat-option" onclick="showHelpInfo('otras-ayudas')">Otras ayudas</button>
                <button class="chat-option" onclick="resetChat()">Volver</button>
            `;
            break;
        case 'soy-donante':
            response = `
                <p>¡Muchas gracias por tu generoso apoyo! Tu donación hace una gran diferencia en la vida de nuestros niños y niñas.</p>
                <p>Si deseas saber cómo ha ayudado tu contribución, puedes enviar un mensaje a este número:</p>
                <p><strong>Número de contacto:</strong> 987 654 321</p>
                <button class="chat-option" onclick="resetChat()">Volver</button>
            `;
            break;
        case 'alianza':
            response = `
                <p>¡Gracias por tu interés en colaborar con nosotros! Para establecer una alianza corporativa, por favor completa el siguiente formulario:</p>
                <p><strong>URL:</strong> GOOGLEFORMS</p>
                <button class="chat-option" onclick="resetChat()">Volver</button>
            `;
            break;
        case 'voluntario':
            response = `
                <p>¡Nos alegra mucho que quieras ser parte de nuestro equipo de voluntarios! Para inscribirte y obtener más información, por favor completa el siguiente formulario:</p>
                <p><strong>URL:</strong> GOOGLEFORMS</p>
                <button class="chat-option" onclick="resetChat()">Volver</button>
            `;
            break;
    }

    chatBody.innerHTML = response;
}

// Funciones para mostrar información específica (se mantiene igual)

function showHelpInfo(type) {
    let chatBody = document.querySelector('.chat-body');
    let helpInfo = '';

    // Respuestas basadas en el tipo de ayuda
    switch (type) {
        case 'asistencia-ninos':
            helpInfo = `
                <p>Ofrecemos ayuda en educación, alimentación y refugio para niños vulnerables. Si necesitas apoyo para un niño, contáctanos a este número:</p>
                <p><strong>Número de contacto:</strong> 987 654 321</p>
                <button class="chat-option" onclick="goBackToNeedHelp()">Volver</button>
            `;
            break;
        case 'apoyo-educativo':
            helpInfo = `
                <p>Si necesitas asistencia con programas educativos o tutoría, contáctanos para obtener más información.</p>
                <p><strong>Número de contacto:</strong> 987 654 324</p>
                <button class="chat-option" onclick="goBackToNeedHelp()">Volver</button>
            `;
            break;
        case 'asistencia-legal':
            helpInfo = `
                <p>Brindamos orientación legal para familias en situaciones vulnerables. Si requieres apoyo, contáctanos a este número:</p>
                <p><strong>Número de contacto:</strong> 987 654 325</p>
                <button class="chat-option" onclick="goBackToNeedHelp()">Volver</button>
            `;
            break;
        case 'otras-ayudas':
            helpInfo = `
                <p>Si necesitas otro tipo de asistencia, nuestro equipo está disponible para ayudarte. Llámanos al siguiente número:</p>
                <p><strong>Número de contacto:</strong> 987 654 326</p>
                <button class="chat-option" onclick="goBackToNeedHelp()">Volver</button>
            `;
            break;
    }

    chatBody.innerHTML = helpInfo;
}

// Funciones de retroceso y reinicio (se mantienen igual)

function goBackToNeedHelp() {
    showInfo('necesito-ayuda'); // Muestra la sección de ayuda
}

function showDonationInfo(type) {
    let chatBody = document.querySelector('.chat-body');
    let donationInfo = '';

    // Respuestas basadas en el tipo de donación
    switch (type) {
        case 'plin-yape':
            donationInfo = `
                <p>Puedes realizar tu donación mediante Plin o Yape al siguiente número:</p>
                <p><strong>Número:</strong> 999 999 999</p>
                <button class="chat-option" onclick="goBackToDonar()">Volver</button>
            `;
            break;
        case 'transferencia':
            donationInfo = `
                <p>Realiza tu donación a nuestra cuenta bancaria:</p>
                <p><strong>Número de cuenta:</strong> 123-456-789</p>
                <p><strong>Código interbancario:</strong> 002-123-456-789</p>
                <button class="chat-option" onclick="goBackToDonar()">Volver</button>
            `;
            break;
    }

    chatBody.innerHTML = donationInfo;
}

function goBackToDonar() {
    showInfo('donar'); // Muestra la sección de donación
}

// Función para reiniciar el chat al estado inicial
function resetChat() {
    let chatBody = document.querySelector('.chat-body');
    chatBody.innerHTML = `
        <p>Para resolver tus dudas, elige una de estas opciones:</p>
        <button class="chat-option" onclick="showInfo('donar')">Quiero donar</button>
        <button class="chat-option" onclick="showInfo('necesito-ayuda')">Necesito ayuda</button>
        <button class="chat-option" onclick="showInfo('soy-donante')">Soy donante</button>
        <button class="chat-option" onclick="showInfo('alianza')">Quiero una alianza corporativa</button>
        <button class="chat-option" onclick="showInfo('voluntario')">Quiero ser voluntario</button>
    `;
}
