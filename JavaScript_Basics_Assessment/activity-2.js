//  JavaScript Variables, Alerts, Prompts, and Conditionals:

// Grab a user input using a prompt() and store it in a variable.
const userInput = prompt('Please enter your name');

// Add a conditional statement where if the variable's length is greater than 4,
// we alert the user that their name is greater than four characters.

if (userInput.length > 4) {
  alert('Your name is greater than 4 characters');
} else {
  // Otherwise, alert that their name is less than four characters.
  alert('Your name is less than 4 characters');
}
