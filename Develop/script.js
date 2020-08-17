
// Create the password generator
function createPassword() {
    // Welcome message
    window.alert("Welcome to The SF Password Generator. Are you ready to generate a secure password to use?");

    // Prompt password length
    var length = parseInt(prompt("Please choose the length of your password. Length must be between 8 to 124 characters long."));

    length = Number(length);

    if (length < 8 || length > 124 || length === "") {
        window.alert("Password length must be more than 8 characters and less than 124 characters long.");
        return length();
    }
    else {
        alert("You have chosen a password with a total of: " + length + " characters. Is this correct?")
        return (length);
    };

    charCriteriaPrompt();
};

// Run the SF Password Generator
createPassword();

//confirm which criteria the user wants in the password
var charCriteriaPrompt = function () {
    confirm("Please select at least 1 of the following in order to generate a safe password. Select to add a Lowercase Letter, an Uppercase Letter, a Number and/or a Special Character.");
}

// Prompt lowercase
var lcstring = prompt("Would you like to add a lowercase letter in your password? Please type Y for Yes and N for No.");
if (lcstring === "Y") {
    confirm("We will add a lowercase letter to your password.");
    console.log(lcstring);
}
else {
    alert("You decided not to choose an lowercase letter, that's ok. Let's move on.");
}

// Prompt uppercase
var upstring = prompt("Would you like to add a uppercase letter in your password? Please type Y for Yes and N for No.");
if (upstring === "Y") {
    confirm("We will add a uppercase letter to your password.");
    console.log(upstring);
}
else {
    alert("You decided not to choose an uppercase letter, that's ok. Let's move on.");
}

// Prompt number
var num = prompt("Would you like to add a number in your password? Please type Y for Yes and N for No.");
if (num === "Y") {
    confirm("We will add a number to your password.");
    console.log(num);
}
else {
    alert("You decided not to choose an number, that's ok. Let's move on.");
}

// Prompt special character
var spchar = prompt("Would you like to add a special character in your password? Please type Y for Yes and N for No.");
if (spchar === "Y") {
    confirm("We will add a special character to your password.");
    console.log(spchar);
}
else {
    alert("You decided not to choose an special character, that's ok. Let's move on.");
}

generate();

//Characters Critera
//var charCriteria = {}
var lcstring = "abcdefghijklmnopqrstuvwxyz";
var upstring = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var spchar = "!@#$%^&*()_+~`|}{[]\:;?><,./-";
var userPassword = "";


// // Generate the final password
function generate() {
    if (lcstring == "Y") {
        userPassword += lcstring;
    }
    if (upstring == "Y") {
        userPassword += upstring;
    }
    if (num == "Y") {
        userPassword += num;
    }
    if (spchar == "Y") {
        userPassword += spchar;
    }
    return userPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = writePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", generate);