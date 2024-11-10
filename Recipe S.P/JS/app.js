// Simulate fetching recipes from an API or backend
function fetchRecipes() {
  // Simulating an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Spaghetti Carbonara",
          image: "../images/Screenshot 2024-11-10 164608.png",
          description: "A creamy, delicious classic Italian pasta dish.",
        },
        {
          id: 2,
          title: "Chicken Tikka Masala",
          image: "../images/Screenshot 2024-11-10 164450.png",
          description: "A flavorful, spicy Indian-inspired chicken dish.",
        },
        {
          id: 3,
          title: "Avocado Toast",
          image: "../images/Screenshot 2024-11-10 163102.png",
          description: "Simple yet delicious breakfast or snack option.",
        }
      ]);
    }, 1000); // Simulate a 1-second delay for data fetching
  });
}

// Function to render recipes dynamically
function renderRecipes(recipes) {
  const recipeListContainer = document.querySelector('.recipe-list');

  // Clear existing recipes (in case of re-rendering)
  recipeListContainer.innerHTML = '';

  // Loop through the recipes array and generate recipe cards dynamically
  recipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');
    
    // Adding recipe content (image, title, description, buttons)
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
      <h3 class="recipe-title">${recipe.title}</h3>
      <p class="../HTML/recipe-description">${recipe.description}</p>
      <a href="recipe-detail.html?recipeId=${recipe.id}" class="view-recipe-link">View Recipe</a>
      <button class="like-btn" data-id="${recipe.id}">Like</button>
      <button class="save-btn" data-id="${recipe.id}">Save to Favorites</button>
    `;

    // Append the recipe card to the container
    recipeListContainer.appendChild(recipeCard);
  });
}

// Function to handle the like button functionality
function handleLikeButtonClick(event) {
  const recipeId = event.target.dataset.id;

  // You can implement functionality here to like the recipe (e.g., send a like request to the backend)
  console.log(`Recipe with ID ${recipeId} liked.`);
  event.target.textContent = 'Liked'; // Change button text to indicate it's been liked
  event.target.disabled = true; // Disable the button to prevent multiple clicks
}

// Function to handle the save button functionality
function handleSaveButtonClick(event) {
  const recipeId = event.target.dataset.id;

  // You can implement functionality here to save the recipe to the user's favorites (e.g., save it in localStorage or database)
  console.log(`Recipe with ID ${recipeId} saved to favorites.`);
  event.target.textContent = 'Saved'; // Change button text to indicate it's been saved
  event.target.disabled = true; // Disable the button to prevent multiple clicks
}

// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Fetch the recipes dynamically (simulated API call)
    const recipes = await fetchRecipes();

    // Render the recipes dynamically
    renderRecipes(recipes);

    // Add event listeners to like and save buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
      button.addEventListener('click', handleLikeButtonClick);
    });

    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(button => {
      button.addEventListener('click', handleSaveButtonClick);
    });
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
});

