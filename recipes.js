// Отримуємо елемент для списку рецептів
const recipesList = document.getElementById('recipes-list');

// Масив для зберігання рецептів (завантажуємо з localStorage або створюємо новий)
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

// Якщо масив порожній, додаємо початкові рецепти

    recipes = [
        {
            id: 1,
            title: "Борщ",
            category: "soups",
            ingredients: "буряк, капуста, картопля, морква, цибуля, м'ясо, сметана",
            instructions: "Зваріть м'ясо, додайте овочі, доведіть до готовності. Подавайте зі сметаною.",
            image: "https://www.themealdb.com/images/media/meals/1529446352.jpg", // Працююче посилання
        },
        {
            id: 2,
            title: "Пельмені",
            category: "main-courses",
            ingredients: "тісто, фарш, цибуля, сметана",
            instructions: "Зліпіть пельмені, зваріть у підсоленій воді. Подавайте зі сметаною.",
            image: "https://www.themealdb.com/images/media/meals/1529446630.jpg", // Працююче посилання
        },
    ];
    saveRecipes(); // Зберігаємо початкові рецепти


// Функція для збереження рецептів у localStorage
function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Функція для відображення рецептів
function renderRecipes() {
    recipesList.innerHTML = ''; // Очищаємо список перед оновленням

    recipes.forEach(recipe => {
        // Створюємо картку рецепту
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        // Додаємо зображення, якщо воно є
        if (recipe.image) {
            const img = document.createElement('img');
            img.src = recipe.image;
            img.alt = recipe.title;
            recipeCard.appendChild(img);
        }

        // Додаємо контент рецепту
        const recipeContent = document.createElement('div');
        recipeContent.className = 'recipe-content';

        const title = document.createElement('h4');
        title.textContent = recipe.title;
        recipeContent.appendChild(title);

        const ingredients = document.createElement('p');
        ingredients.innerHTML = `<strong>Інгредієнти:</strong> ${recipe.ingredients}`;
        recipeContent.appendChild(ingredients);

        const instructions = document.createElement('p');
        instructions.innerHTML = `<strong>Приготування:</strong> ${recipe.instructions}`;
        recipeContent.appendChild(instructions);

        // Додаємо контент до картки
        recipeCard.appendChild(recipeContent);

        // Додаємо картку до списку
        recipesList.appendChild(recipeCard);
    });
}

// Відображаємо рецепти при завантаженні сторінки
renderRecipes();