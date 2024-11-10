document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a new user object
    const newUser = {
      username: username,
      email: email,
      password: password,
      profilePicture: "../images/default-profile.png", // Placeholder for profile picture
      bio: "Food lover, recipe creator, and enthusiastic home cook."
    };

    // Get existing users from localStorage, or initialize empty array if none exist
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to users array
    users.push(newUser);

    // Save updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to profile page after successful registration
    window.location.href = './profile.html';
  });
// auth.js - Handles user authentication

function authenticateUser(email, password) {
    // Get the users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Find the user by email
    const user = users.find(u => u.email === email);
  
    // Check if user exists and the password matches
    if (user && user.password === password) {
      // Optionally, you can store the user in sessionStorage to persist the session
      sessionStorage.setItem('loggedInUser', JSON.stringify(user)); // Save logged-in user to sessionStorage
      return true;
    }
  
    return false;
  }
  


  