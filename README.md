# Password-Generator-JS
* Random Password Generator Module 03 Assignment

## Usage

This random password generator prompts the user for length of password, and whether to include lowercase, uppercase, numerical and / or special characters, then creates one based on these criteria. Answers are validated in order to progress through the prompts.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Mock-Up

* The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](./assets/img/03-javascript-homework-demo.png)

* Here is a link to the live application: [Random Password Generator](https://cookingmeister.github.io/Password-Generator-JS/)

## Credits

>I used MDN Web Docs, W3Schools and freeCodeCamp resources as well as some general Google searches for Javascript functionality and proof of concept testing. The function that generates an array of ascii numbers and then converts it to string character values is not my own. It is based upon found code, although I have not been able to find it again to properly cite ownership.

## License

* Please see attached license file.