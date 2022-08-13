// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

function generateREADME ({ projectTitle, projectDesc, instalation, usageDesc, license, contributing, tests, questions, github, email}) { 
`
# ${projectTitle}
${projectDesc}

## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Where to Find Me](#Where to Find Me)

## Installation Instructions:
${instalation}

## Usage
${usageDesc}

## Licenses
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
${questions}

## Where to Find Me
${github}
${email}`;
// TODO: Create an array of questions for user input
const questions = ["What is the project title?" , "What is the project description?" ,
 "What is the installation description?" , "What is the usage description?" ,
  "What are the licenses?" , "What are the contributing guidelines?" , "How can you test this?" ,
  "What are the frequently asked questions and answers?" , "What is your github?" , "What is your email?"];
  
  
function promptUser() {
    return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'projectDesc',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'usageDesc',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'license',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'contributing',
      message: questions[5],
    },
    {
        type: 'input',
        name: 'tests',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'github',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[8],
      },
    ]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename , data, (err) =>
    err ? console.log(err) : console.log('Sucessfully created README.MD!')
    );
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
