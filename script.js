// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 
// My code starts here
// 

// My character set stored in 4 arrays corresponding to their ASCII types:
// lowercase, uppercase, number, special.

var lower = Array.from(Array(26)).map((e, i) => i + 97);
var lowerCase = lower.map((a) => String.fromCharCode(a));

var upper = Array.from(Array(26)).map((e, i) => i + 65);
var upperCase = upper.map((A) => String.fromCharCode(A));

var numeric = Array.from(Array(10)).map((e, i) => i + 48);
var number = numeric.map((n) => String.fromCharCode(n));

var spec = Array.from(Array(15)).map((e, i) => i + 33);
var special = spec.map((s) => String.fromCharCode(s));

var arrays = [];
var randomizedArray = [];


var chosenLength;
var useLower;
var useUpper;
var useNum;
var useSpec;

// Generates a randomized password from an array containing up to
// four character type arrays and puts it in a new array.

function generatePassword() {
  passwordLength();
  console.log("password being generated");
  for (var i = 0; i < chosenLength; i++) {
    var randomIndex = Math.floor(Math.random() * arrays.length);
    randomizedArray.push(
      arrays[randomIndex][
        Math.floor(Math.random() * arrays[randomIndex].length)
      ]
    );
  }
  return randomizedArray.join("");
}

// Prompts for password length, and types of characters to include.
// If answers are valid user is prompted with next question.
// If answers are invalid user is prompted again until answer is valid.

var passwordLength = function () {
  chosenLength = prompt(
    "How many characters long between 8 - 128 do you want your password to be?"
  );
  if (chosenLength < 129 && chosenLength > 7) {
    promptLower();
  } else {
    passwordLength();
  }
};

var promptNum = function () {
  useNum = prompt("Do you want your password to include numbers? y or n");
  if (useNum === "y" || useNum === "Y") {
    arrays.push(number);
    promptSpec();
    console.log("numbers yes");
  } else if (useNum === "n" || useNum === "N") {
    console.log("numbers no");
    promptSpec();
  } else {
    promptNum();
  }
};

var promptUpper = function () {
  useUpper = prompt(
    "Do you want your password to include capital letters? y or n"
  );
  if (useUpper === "y" || useUpper === "Y") {
    arrays.push(upperCase);
    promptNum();
    console.log("Caps yes");
  } else if (useUpper === "n" || useUpper === "N") {
    promptNum();
    console.log("Caps no");
  } else {
    promptUpper();
  }
};

var promptLower = function () {
  useLower = prompt(
    "Do you want your password to include lowercase letters? y or n"
  );
  if (useLower === "y" || useLower === "Y") {
    arrays.push(lowerCase);
    promptUpper();
    console.log("lower yes");
  } else if (useLower === "n" || useLower === "N") {
    promptUpper();
    console.log("lower no");
  } else {
    promptLower();
  }
};

var promptSpec = function () {
  useSpec = prompt(
    "Do you want your password to include special characters? y or n"
  );
  if (useSpec === "y" || useSpec === "Y") {
    arrays.push(special);
    console.log("spec yes");
  } else if (useSpec === "n" || useSpec === "N") {
    console.log("spec no");
  } else {
    promptSpec();
  }
  console.log("prompts done");
};