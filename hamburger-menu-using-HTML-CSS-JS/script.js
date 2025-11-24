const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
    navEl.classList.toggle("nav-open");
    hamburgerEl.classList.toggle("hamburger-open");
});

navEl.addEventListener('click', () => {
   navEl.classList.remove("nav-open");
    hamburgerEl.classList.remove("hamburger-open"); 
})



//1. camelCase

// First word lowercase, next words capitalized.

// Example: firstName, userEmail

//2. PascalCase

// Every word capitalized.

// Example: FirstName, UserEmail

// Often used for class names.

//3. snake_case

// Words separated by underscores, all lowercase.

// Example: first_name, user_email

//4. kebab-case

// Words separated by hyphens, all lowercase.

// Example: first-name, user-email

// Often used in URLs or CSS classes.

//5. UPPER_CASE

// All letters capitalized, words separated by underscores.

// Example: MAX_VALUE, API_KEY

// Often used for constants.