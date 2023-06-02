//This var gets the button
var button = document.querySelector('button');
var userInput

//This listens for a the click upon pressing the button and gets user input
button.addEventListener('click', function() {
    var userInput = window.prompt("Please enter a number between 8 and 128");
    if (isNaN(userInput) || userInput < 8 || userInput > 128) {
    userInput = window.prompt("Invalid length or number! Please try again.")
    } else {
        
    }
  });





