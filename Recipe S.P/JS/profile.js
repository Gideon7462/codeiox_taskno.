
document.addEventListener('DOMContentLoaded', () => {
  const addRecipeButton = document.getElementById('add-recipe-btn');
  const newRecipeForm = document.getElementById('new-recipe-form');
  const cancelAddRecipeButton = document.getElementById('cancel-add-recipe');
  const recipeForm = document.getElementById('recipe-form');
  const recipeListContainer = document.querySelector('.recipe-list');

  // Show the new recipe form when the "Add New Recipe" button is clicked
  addRecipeButton.addEventListener('click', () => {
    newRecipeForm.style.display = 'block';
  });

  // Hide the new recipe form when the "Cancel" button is clicked
  cancelAddRecipeButton.addEventListener('click', () => {
    newRecipeForm.style.display = 'none';
  });

  // Function to add a new recipe card
  function addNewRecipe(recipe) {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    // Adding recipe content (image, title, description, buttons)
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
      <h3 class="recipe-title">${recipe.title}</h3>
      <p class="recipe-description">${recipe.description}</p>
      <a href="../HTML/recipe-detail.html?recipeId=${recipe.id}" class="view-recipe-link">View Recipe</a>
      <button class="like-btn" data-id="${recipe.id}">Like</button>
      <button class="save-btn" data-id="${recipe.id}">Save to Favorites</button>
    `;

    // Append the new recipe card to the recipe list container
    recipeListContainer.appendChild(recipeCard);
  }

  // Handle form submission to add a new recipe
  recipeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the values from the form fields
    const title = document.getElementById('recipe-title').value;
    const image = document.getElementById('recipe-image').value;
    const description = document.getElementById('recipe-description').value;

    // Generate a new recipe object
    const newRecipe = {
      id: Date.now(), // Unique ID using the current timestamp
      title,
      image,
      description,
    };

    // Add the new recipe card to the list
    addNewRecipe(newRecipe);

    // Hide the form after adding the recipe
    newRecipeForm.style.display = 'none';

    // Clear the form fields
    recipeForm.reset();
  });
});
