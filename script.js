// Utilisation de alert() JS
alert("Welcome to RB Cosmetique!");


// Utilisation de prompt() JS
var userName = prompt("Enter your name:");

alert("Hello, " + userName + "!");

// Utilisation de document.getElementById() JS
var headerTitle = document.getElementById("headerTitle");
if (headerTitle) {
    headerTitle.innerHTML = "RB Cosmetique - Beauty Products";
}

// Intégration d'une fonction personnalisée JS
function displayMessage(message) {
    alert(message);
}

// Utilisation des structures conditionnelles JS
var age = prompt("Enter your age:");
if (age >= 16) {
    displayMessage("You are eligible to explore our beauty products!");
} else {
    displayMessage("Sorry, you must be 16 or older to access our products.");
    //var maFenetre = window.open('Error.html', 'MaFenetre', 'width=600,height=400')
    window.location.href = "Error.html";
}

// Utilisation de la programmation Evènementielle JS
document.getElementById("homeButton").addEventListener("click", function () {
    alert("You clicked the 'Discover more' button!");
});

