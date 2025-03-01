// Отримуємо елементи форми та списку постів
const blogForm = document.getElementById('blog-form');
const postsList = document.getElementById('posts-list');

// Масив для зберігання постів
let posts = [];

// Функція для додавання нового посту
function addPost(title, content, image) {
    const post = {
        id: Date.now(), // Унікальний ID на основі часу
        title,
        content,
        image,
    };
    posts.push(post); // Додаємо пост до масиву
    renderPosts(); // Оновлюємо список постів
}

// Функція для відображення постів
function renderPosts() {
    postsList.innerHTML = ''; // Очищаємо список перед оновленням
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        postCard.innerHTML = `
            ${post.image ? `<img src="${post.image}" alt="${post.title}">` : ''}
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        postsList.appendChild(postCard); // Додаємо пост до списку
    });
}

// Обробник події для форми
blogForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Забороняємо стандартну поведінку форми

    // Отримуємо значення з полів форми
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const image = document.getElementById('post-image').value;

    // Додаємо новий пост
    addPost(title, content, image);

    // Очищаємо поля форми
    blogForm.reset();
});