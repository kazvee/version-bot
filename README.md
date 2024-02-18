# Version-Bot 🤖

Version-Bot is an automated script which will provide the next software version number, eliminating the need to determine this manually.

When the program is run, it will ask for the current software version number, and provide you with the next software version number to use.

## Dependencies

* [Node](https://nodejs.org) v20.10.0 or above

### Dev Dependencies

* [Jest](https://jestjs.io/)

## Installation

### Getting Started

* Fork this repository to your own GitHub account
* Clone your fork onto your local device
* Navigate to the project folder in your terminal, and run `npm i` (or `npm install`)

## How to Use

* To run the version update script, navigate to the project folder in your terminal and run `npm run get-next-version`
  * Follow the prompt asking for your current software version, and press `Enter`
  * The next software version to use will be calculated and provided to you

## Testing with Jest

* Navigate to the project folder in your terminal, and run `npm run test`
  * Test results will be displayed in the terminal

## Further Improvements

* Ways to expand the project functionality include:
  * Validating user input to ensure string entered can be successfully changed to a number type
  * Widening version update functionality to account for multiple zeros in semantic versioning sections (e.g.: `3.000.001`)
* Additional testing for the above features