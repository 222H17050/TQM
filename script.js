const fonts = [
    "Newsreader",
    "Ribeye Marrow",
    "Oswald",
    "Bebas Neue"
];

// Función para establecer una fuente aleatoria
function setRandomFont() {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.body.style.fontFamily = randomFont;
}


// Array de colores de fondo
const backgroundColors = [
    "#FF5733", // Rojo
    "#33FF57", // Verde
    "#3357FF", // Azul
    "#F1C40F", // Amarillo
    "#8E44AD", // Púrpura
    "#E67E22", // Naranja
    "#2ECC71", // Verde claro
    "#3498DB"  // Azul claro
];

// Función para establecer un color de fondo aleatorio
function setRandomBackground() {
    const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Llamar a la función al cargar la página
// Llamar a las funciones al cargar la página
setRandomBackground();
setRandomFont();



function calculateDays() {
    const inputDate = document.getElementById('dateInput').value;
    const today = new Date();

    // Definir la fecha límite (12 de enero de 2025)
    const limitDate = new Date(2025, 0, 12); // Mes es 0-indexado (0 = enero)

    if (!inputDate) {
        alert("Por favor, ingresa una fecha.");
        return;
    }

    const selectedDate = new Date(inputDate);

    // Validar que la fecha ingresada sea posterior al 12 de enero de 2025
    if (selectedDate <= limitDate) {
        alert("La fecha debe ser posterior al 12 de enero de 2025.");
        return;
    }

    const timeDifference = selectedDate - today;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let resultText = '';

    if (daysDifference > 0) {
        resultText = `hahaha ahora han pasado ${daysDifference} días.<br>`;
    } else if (daysDifference < 0) {
        resultText = `jaja han pasado ${-daysDifference} días.<br>`;
    } else {
        resultText = "¡Hoy es la fecha ingresada!<br>";
    }

    // Array de mensajes aleatorios
    const messages = ["I love you", "Te quiero", "TQM", "Te amo", "Hermosa", "Te quiero mucho"];

    for (let i = 0; i < Math.abs(daysDifference); i++) {
        // Seleccionar un mensaje aleatorio
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        resultText += randomMessage + "<br>";
    }

    document.getElementById('result').innerHTML = resultText;
}

