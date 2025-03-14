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

// Дані рецептів
const recipesData = [
    {
        title: "Тірамісу",
        category: "desserts",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Classic_Italian_Tiramisu-3_%2829989504485%29.jpg/640px-Classic_Italian_Tiramisu-3_%2829989504485%29.jpg",
        description: "Класичний італійський десерт з кави та сиру маскарпоне.",
    },
    {
        title: "Чізкейк",
        category: "desserts",
        image: "https://klopotenko.com/wp-content/uploads/2023/03/cheesecake-new-york_sitewebukr-img-1000x600.jpg?v=1720545631",
        description: "Ніжний чізкейк з ягідним соусом.",
    },
    {
        title: "Мохіто",
        category: "drinks",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4hExiYtupfKNxXeCh1e-nT4sbkCBaVgscA&s",
        description: "Освіжаючий коктейль з м'ятою, лаймом та содою.",
    },
    {
        title: "Кава по-італійськи",
        category: "drinks",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyOKzOfFZP9Uqj79Q64GI9IrINXnDGAkPRA&s",
        description: "Ароматна кава з вершками.",
    },
    {
        title: "Омлет",
        category: "breakfast",
        image: "https://klopotenko.com/wp-content/uploads/2018/03/yaichnica-omlet_siteWeb.jpg",
        description: "Пушений омлет з зеленню та сиром.",
    },
    {
        title: "Гранола",
        category: "breakfast",
        image: "https://klopotenko.com/wp-content/uploads/2017/11/Granola_siteWebUkr.jpg",
        description: "Домашня гранола з медом та горіхами.",
    },
];

// Функція для відображення рецептів
function displayRecipes(category = "all") {
    const recipesList = document.getElementById("recipes-list");
    recipesList.innerHTML = ""; // Очистити список

    const filteredRecipes = category === "all"
        ? recipesData
        : recipesData.filter(recipe => recipe.category === category);

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        `;
        recipesList.appendChild(recipeCard);
    });
}

// Фільтрація рецептів за категорією
document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-category");
        displayRecipes(category);
    });
});

// Початкове відображення всіх рецептів
displayRecipes();
