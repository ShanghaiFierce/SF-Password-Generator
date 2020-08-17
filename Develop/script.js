
// Create the password generator
function createPassword() {
    // Welcome message
    window.alert("Welcome to The SF Password Generator. Are you ready to generate a secure password to use?");

    // Prompt password length
    var length = parseInt(prompt("Please choose the length of your password. Length must be between 8 to 124 characters long."));

    length = Number(length);

    if (length < 8 || length > 124 || !length) {
        window.alert("Password length must be more than 8 characters and less than 124 characters long.");
        createPassword ();
    }
    else {
        alert("You have chosen a password with a total of: " + length + " characters. Is this correct?")
        charCriteriaPrompt();
    };
};

//confirm which criteria the user wants in the password
var charCriteriaPrompt = function () {
    alert("Please select at least 1 of the following in order to generate a safe password. A) Lowercase Letter B) Uppercase Letter C) a Number and/or D) a Special Character.");

        // Prompt lowercase
        var lcstring = prompt("Would you like to add a lowercase letter in your password? Please type Y for Yes and N for No.");
        if (lcstring === "Y") {
            confirm("We will add a lowercase letter to your password.");
            console.log (lcstring);
        }
        else {
            alert("You decided not to choose an lowercase letter, that's ok. Let's move on.");  
        }
        // Prompt uppercase
        var upstring = prompt("Would you like to add a uppercase letter in your password? Please type Y for Yes and N for No.");
        if (upstring === "Y") {
            confirm("We will add a uppercase letter to your password.");
            console.log (upstring);
        }
        else {
            alert("You decided not to choose an uppercase letter, that's ok. Let's move on.");
        }

        // Prompt number
        var num = prompt("Would you like to add a number in your password? Please type Y for Yes and N for No.");
        if (num === "Y") {
            confirm("We will add a number to your password.");
            console.log (num);
        }
        else {
            alert("You decided not to choose an number, that's ok. Let's move on.");
        }

        // Prompt special character
        var spchar = prompt("Would you like to add a special character in your password? Please type Y for Yes and N for No.");
        if (spchar === "Y") {
            confirm("We will add a special character to your password.");
            console.log (spchar);
        }
        else {
            alert("You decided not to choose an special character, that's ok. Let's move on.");
        }

        //Final check for num, up, lc, spchar
         if (lcstring === "Y" || upstring === "Y" || num === "Y" || spchar === "Y") {
            confirm("We are getting ready to generate your unique password!");
            generatePwd();
         }
         else {
             //(!lcstring || lcstring === "N" && !upstring || upstring === "N" && !num || num === "N" && !spchar || spchar === "N") {
            window.alert("You need to select at least 1 of the following to add to your password. Let's try again.");
            return charCriteriaPrompt();
        }
}

// Run the SF Password Rules
createPassword();

// Generate function for the final password
function generatePwd() {
    var password = '';
    var lcstring = "abcdefghijklmnopqrstuvwxyz";
    var upstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num = "0123456789";
    var spchar = "!@#$%^&*()_+~`|}{[]\:;?>,./-";

    //Length "if & else" conditions
    //lcstring result
    var lcstringAfter = localStorage.getItem("lcstring");
    if (lcstring === "Y") {
        lcstring.length = 1;}
    else {
        lcstring.length = 0};
    //upstring result
    var upstringAfter = localStorage.getItem("upstring");
        if (upstring === "Y") {
        upstring.length = 1;}
    else {
        upstring.length = 0};
    //num result
    var numAfter = localStorage.getItem("num");
        if (num === "Y") {
        num.length = 1;}
    else {
        num.length = 0};
    //spchar result
    var spcharAfter = localStorage.getItem("spchar");
        if (spchar === "Y") {
        spchar.length = 1;}
    else {
        spchar.length = 0};

    //ceiling
    var length = Math.ceil();

    for ( i=0; i < length; i++) {
        password += lcstring.charAt(Math.ceil(Math.random() * lcstring.length));
        password += upstring.charAt(Math.ceil(Math.random() * upstring.length));
        password += num.charAt(Math.ceil(Math.random() * num.length));
        password += spchar.charAt(Math.ceil(Math.random() * spchar.length)).join('');
    }

    return (password);
// //Confirming the special variables
// var charCriteria = [lcstring === "Y", upstring === "Y", num === "Y", spchar === "Y"];
// var userPassword = charCriteria.join(" and ");
// //return (userPassword);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = writePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);