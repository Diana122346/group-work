// Отримуємо елементи форми та списку нотаток
const noteForm = document.getElementById('note-form');
const notesList = document.getElementById('notes-list');

// Масив для зберігання нотаток
let notes = [];

// Функція для збереження нотаток у кукі
function saveNotesToCookies() {
    const notesJSON = JSON.stringify(notes); // Перетворюємо масив у JSON
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 10); // Встановлюємо термін дії на 10 років
    document.cookie = `notes=${encodeURIComponent(notesJSON)}; expires=${expirationDate.toUTCString()}; path=/`;
}

// Функція для завантаження нотаток з кукі
function loadNotesFromCookies() {
    const cookies = document.cookie.split('; ');
    const notesCookie = cookies.find(cookie => cookie.startsWith('notes='));

    if (notesCookie) {
        const notesJSON = decodeURIComponent(notesCookie.split('=')[1]);
        notes = JSON.parse(notesJSON); // Перетворюємо JSON у масив
        renderNotes(); // Відображаємо нотатки
    }
}

// Функція для додавання нотатки
function addNote(title, content) {
    const note = {
        id: Date.now(), // Унікальний ID на основі часу
        title,
        content,
    };
    notes.push(note); // Додаємо нотатку до масиву
    saveNotesToCookies(); // Зберігаємо нотатки у кукі
    renderNotes(); // Оновлюємо список нотаток
}

// Функція для видалення нотатки
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id); // Видаляємо нотатку з масиву
    saveNotesToCookies(); // Оновлюємо кукі
    renderNotes(); // Оновлюємо список нотаток
}

// Функція для відображення нотаток
function renderNotes() {
    notesList.innerHTML = ''; // Очищаємо список перед оновленням

    if (notes.length === 0) {
        notesList.innerHTML = '<p>Нотаток немає.</p>'; // Повідомлення, якщо нотаток немає
    } else {
        notes.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            noteCard.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
                <button onclick="deleteNote(${note.id})">Видалити</button>
            `;
            notesList.appendChild(noteCard); // Додаємо нотатку до списку
        });
    }
}

// Обробник події для форми
noteForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Забороняємо стандартну поведінку форми

    // Отримуємо значення з полів форми
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    // Додаємо нову нотатку
    addNote(title, content);

    // Очищаємо поля форми
    noteForm.reset();
});

// Завантажуємо нотатки з кукі при завантаженні сторінки
window.addEventListener('load', () => {
    loadNotesFromCookies();
});