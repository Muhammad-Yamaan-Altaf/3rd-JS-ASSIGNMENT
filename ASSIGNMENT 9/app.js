                                // ? ASSIGNMNET
                                // *Q.1
function checkCharacterType(char) {
    var charCode = char.charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) {
        return "Number";
    } else if (charCode >= 65 && charCode <= 90) {
        return "Uppercase Letter";
    } else if (charCode >= 97 && charCode <= 122) {
        return "Lowercase Letter";
    } else {
        return "Invalid Input";
    }
}
var inputChar = prompt("Enter a character:");
var charType = checkCharacterType(inputChar);
if (charType !== "Invalid Input") {
    alert("The character '" + inputChar + "' is a " + charType + ".");
} else {
    alert("Invalid input. Please enter a valid character.");
}
                            // *Q.2
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));
if (num1 === num2) {
    console.log("The two integers are equal.");
} else if (num1 > num2) {
    console.log("The larger integer is: " + num1);
} else {
    console.log("The larger integer is: " + num2);
}

                            // *Q.3
var number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

                            // *Q.4
function isVowel(char) {
    char = char.toLowerCase();
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}
var character = prompt("Enter a character:");
if (character.length === 1) {
    var result = isVowel(character);
    console.log("Is it a vowel? " + result);
} else {
    console.log("Please enter a single character.");
}

                            // *Q.5
var correctPassword = "YourCorrectPassword";
var userPassword = prompt("Enter your password:");
if (!userPassword) {
    alert("Please enter your password.");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}
                            // *Q.6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
                            // *Q.7
var userInput = parseInt(prompt("Enter a time in 24-hour clock format (e.g., 1900 for 7pm):"));
if (!isNaN(userInput)) {
    if (userInput >= 0 && userInput < 1200) {
        alert("Good morning!");
    } else if (userInput >= 1200 && userInput < 1700) {
        alert("Good afternoon!");
    } else if (userInput >= 1700 && userInput < 2100) {
        alert("Good evening!");
    } else if (userInput >= 2100 && userInput < 2400) {
        alert("Good night!");
    } else {
        alert("Invalid input. Please enter a time between 0000 and 2359.");
    }
} else {
    alert("Invalid input. Please enter a valid time.");
}
