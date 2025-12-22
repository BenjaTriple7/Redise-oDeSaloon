

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


const vinyl = document.getElementById("vinyl");
const turntable = document.getElementById("turntable");
const audio = document.getElementById("audio");
const arm = document.getElementById("arm");

let isPlaying = false;

// Detectar mobile
const isMobile = window.matchMedia("(max-width: 768px)").matches;

/* =========================
   DESKTOP: DRAG & DROP
========================= */

turntable.addEventListener("dragover", e => e.preventDefault());

turntable.addEventListener("drop", () => {
    if (isPlaying) return;
    placeVinyl();
});

vinyl.addEventListener("dragstart", () => {
    if (!isPlaying) return;
    removeVinyl();
});

/* =========================
   MOBILE: TAP (TOGGLE)
========================= */

if (isMobile) {
    vinyl.addEventListener("click", () => {
        if (!isPlaying) {
            placeVinyl();
        } else {
            removeVinyl();
        }
    });
}

/* =========================
   FUNCIONES
========================= */

function placeVinyl() {
    turntable.appendChild(vinyl);

    vinyl.classList.add("spinning", "docked");
    arm.classList.add("playing");

    audio.play();
    isPlaying = true;
}

function removeVinyl() {
    audio.pause();
    audio.currentTime = 0;

    vinyl.classList.remove("spinning", "docked");
    arm.classList.remove("playing");

    document.querySelector(".turntable-area").prepend(vinyl);

    isPlaying = false;
}
