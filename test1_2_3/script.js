const carousel = document.querySelector(".carousel");
let scrollPosition = 0;

function scrollLeft() {
    scrollPosition -= 200;
    if (scrollPosition < 0) scrollPosition = 0;
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

function scrollRight() {
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    scrollPosition += 200;
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

const recipes = [
    {
        title: "Thang Noodle",
        image: "images/thang-noodle.jpg",
        time: "20 mins",
        servings: "4",
        ingredients: ["Rice noodles", "Shredded chicken", "Soup broth", "Spring onions"],
        instructions: "Boil soup broth, add noodles, and serve with shredded chicken."
    },
    {
        title: "Mango Sticky Rice",
        image: "images/mango-sticky-rice.jpg",
        time: "25 mins",
        servings: "4",
        ingredients: ["Sticky rice", "Mango", "Coconut milk", "Sugar"],
        instructions: "Steam sticky rice, mix with coconut milk, and serve with mango slices."
    },
    {
        title: "Corn Spicy Salad",
        image: "images/corn-spicy-salad.jpg",
        time: "10 mins",
        servings: "2",
        ingredients: ["Corn", "Chili", "Fish sauce", "Lime"],
        instructions: "Mix all ingredients and toss well."
    },
    {
        title: "Green Curry",
        image: "images/green-curry.jpg",
        time: "30 mins",
        servings: "4",
        ingredients: ["Coconut milk", "Green curry paste", "Chicken", "Thai basil"],
        instructions: "Simmer coconut milk, add curry paste, then chicken, and cook until tender."
    },
    {
        title: "Massaman Curry",
        image: "images/massaman-curry.jpg",
        time: "40 mins",
        servings: "4",
        ingredients: ["Beef", "Massaman curry paste", "Coconut milk", "Peanuts"],
        instructions: "Simmer beef in curry paste and coconut milk, add peanuts, and serve."
    },
    {
        title: "Pad Thai",
        image: "images/padthai.jpg",
        time: "25 mins",
        servings: "3",
        ingredients: ["Rice noodles", "Tofu", "Tamarind paste", "Peanuts"],
        instructions: "Stir-fry noodles with tofu, tamarind paste, and peanuts, then serve."
    }
];

function showRecipe(index) {
    const recipe = recipes[index];
    document.getElementById("recipeTitle").innerText = recipe.title;
    document.getElementById("recipeImage").src = recipe.image;
    document.getElementById("recipeTime").innerText = `Time: ${recipe.time}`;
    document.getElementById("recipeServings").innerText = `Servings: ${recipe.servings}`;
}
