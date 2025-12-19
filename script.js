

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