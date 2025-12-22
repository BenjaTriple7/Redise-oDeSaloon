

// Función para verificar si una fecha ya pasó
function checkPastEvents() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const showRows = document.querySelectorAll('.show-row');

    showRows.forEach(row => {
        const dateText = row.getAttribute('data-date');
        const [day, month, year] = dateText.split('/');
        const showDate = new Date(year, month - 1, day);

        if (showDate < today) {
            row.classList.add('past-event');
        }
    });
}

checkPastEvents();



/* Vinilo */

const vinyl = document.getElementById("vinyl");
const turntable = document.getElementById("turntable");
const audio = document.getElementById("audio");
const arm = document.getElementById("arm");

let isPlaying = false;

turntable.addEventListener("dragover", e => e.preventDefault());

turntable.addEventListener("drop", () => {
    if (isPlaying) return;

    // Colocar vinilo
    turntable.appendChild(vinyl);

    // Reproducir
    audio.play();
    vinyl.classList.add("spinning");
    arm.classList.add("playing");

    isPlaying = true;
});

// Permitir sacar el vinilo
vinyl.addEventListener("dragstart", () => {
    if (!isPlaying) return;

    audio.pause();
    audio.currentTime = 0;

    vinyl.classList.remove("spinning");
    arm.classList.remove("playing");

    document.querySelector(".turntable-area").prepend(vinyl);

    isPlaying = false;
});

