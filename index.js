// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'Please input a title.'
                }
            },
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'desc',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'Please input a description.'
                }
            },
        },
        {
            type: 'input',
            message: 'What are the instructions to install your project?',
            name: 'install',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'Please input your installation instructions.'
                }
            },
        },
        {
            type: 'input',
            message: 'What is the usage of your project?',
            name: 'usage',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'Please input the usage of your project.'
                }
            },
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please selecte licenses that are used in your project?',
            choices: ['None', 'Apache 2.0', 'MIT', 'GNU GPL v3.0', 'Mozilla 2.0'],
            validate: licenseInput = () => {
                if (licenseInput) {
                    return true;
                } else {
                    return false;
                    }
            }
        },
        {
            type: 'input',
            message: 'Is there anyone else who helped contribute to your project?',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'What is the associated test with your project?',
            name: 'tests',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'Please input your test for your project.'
                }
            },
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'git',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'Please input your github username.'
                }
            },
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'Please input your email.'
                }
            },
        },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeToFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README.md file has sucessfuly been generated.')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response => {
            const pageContent = generateMarkdown(response);
            writeToFile(response);
        }))
}

// Function call to initialize app
init();
