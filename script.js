// Assignment code here
  

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




// My code starts here

const lower = Array.from(Array(26)).map((e, i) => i + 97);
const lowerCase = lower.map((a) => String.fromCharCode(a));
console.log(lowerCase);

const upper = Array.from(Array(26)).map((e, i) => i + 65);
const upperCase = upper.map((A) => String.fromCharCode(A));
console.log(upperCase);

const numeric = Array.from(Array(10)).map((e, i) => i + 48);
const number = numeric.map((n) => String.fromCharCode(n));
console.log(number);

const spec = Array.from(Array(15)).map((e, i) => i + 33);
const special = spec.map((s) => String.fromCharCode(s));
console.log(special);

var generatedPassword = [];

// I now have my character set stored in 4 arrays corresponding to their types: upper, lower, num, spec

var length = 0;
var useLower;
var useUpper;
var useNum;
var useSpec;

var promptNum = function() {
  useNum = prompt("Do you want your password to include numbers? y or n");
  // TO DO - check if valid response
  console.log(useNum);
  promptSpec();
}

var promptUpper = function() {
  useUpper = prompt("Do you want your password to include capital letters? y or n");
  // TO DO - check if valid response
  console.log(useUpper);
  promptNum();
}

var promptLower = function() {
  var y = true;
  var n = false;
  useLower = prompt("Do you want your password to include lowercase letters? y or n");
  // TO DO - check if valid response
    if (useLower === "y" || useLower ==="n" || useLower === "N" || useLower === "Y") {
      console.log(useLower);
      promptUpper();
    } else {
      promptLower();
    };
}
  

var promptSpec = function() {
  useSpec = prompt("Do you want your password to include special characters? y or n");
  // TO DO - check if valid response
  console.log(useSpec);
}

var passwordLength = function() {
  length = prompt("How many characters long between 8 - 128 do you want your password to be?");
  // TO DO - check if valid response
  console.log(length);
}

function generatePassword() {
  displayPrompt();
  // var randomIndex = Math.floor(Math.random()*(length));
  // return randomIndex;
  
  for (let i = 0; i<length; i++) {
    var x = function() {
      generatedPassword.push(lowerCase[Math.floor(Math.random()*length)]);
    };
    x();
  };
  return generatedPassword.join("");
}

// Step 1 - First prompt

function displayPrompt() {
  passwordLength();
    if (length < 129 && length > 7) {
      promptLower();
    } else {
      passwordLength();
    };      
  
};
