const recipes = {
    "Сніданок": {
        name: "Омлет з овочами",
        ingredients: ["Яйця - 2 шт.", "Помідори - 1 шт.", "Цибуля - 1 шт.", "Сіль, перець за смаком"],
        image: "https://example.com/omelette.jpg"
    },
    "Обід": {
        name: "Борщ",
        ingredients: ["Буряк - 2 шт.", "Картопля - 3 шт.", "Капуста - 200 г", "М'ясо - 300 г", "Сметана за смаком"],
        image: "https://example.com/borscht.jpg"
    },
    "Вечеря": {
        name: "Гречка з грибами",
        ingredients: ["Гречка - 1 склянка", "Гриби - 200 г", "Цибуля - 1 шт.", "Масло - 2 ст. л."],
        image: "https://example.com/buckwheat.jpg"
        
    }
    
};

function showRecipe(category) {
    const recipe = recipes[category];
    const recipeDisplay = document.getElementById("recipe-display");
    recipeDisplay.innerHTML = `
        <div class="recipe">
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>Інгредієнти:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
            </ul>
        </div>
    `;
}