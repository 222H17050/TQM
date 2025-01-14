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

const frases = [
    "Perdí en el romanticismo cuando me fijé en ti.",
    "Quisiera regresar en el tiempo y quedarme en el primer día que nos fuimos juntos...",
    "El amor verdadero existe, solo que no le entienden a la puta vibra.",
    "Dejaré la chaqueta cuando ya no te ame.",
    "Aun queda alguien por quien luchar y ese eres tú...",
    "Si voy a llorar por ella, entonces que también sea por mí...",
    "No pienses que tu vida es una mierda, el mundo sí, pero tú no...",
    "Definitivamente, quizás sin dolor no hay gloria.",
    "Corre más fuerte que hoy y hoy más fuerte que nunca.",
    "Lo importante no es cómo el mundo te ve sino cómo ves tú al mundo.",
    "Nunca me rendiré.",
    "Tengo que hacer lo que más me gusta."
];


function setFrases(frases) {
    // Asignar el arreglo de frases a la variable dotaciones
    const dotaciones = frases;

    // Obtener el contenedor donde se agregarán los elementos
    const contenedor = document.getElementById('frase');

    // Limpiar el contenedor antes de agregar nuevos elementos
    contenedor.innerHTML = '';

    // Usar un ciclo for para iterar a través del arreglo
    for (let i = 0; i < dotaciones.length; i++) {
        // Acceder al elemento actual del arreglo
        let actual = dotaciones[i];

        // Crear un nuevo elemento <p>
        const parrafo = document.createElement("p");
        
        // Asignar el texto del elemento al string actual del arreglo
        parrafo.textContent = actual;

        // Agregar el nuevo párrafo al contenedor
        contenedor.appendChild(parrafo);
    }
}

// Llamar a la función al cargar la página
// Llamar a las funciones al cargar la página
setRandomBackground();
setRandomFont();
setFrases(frases);



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

