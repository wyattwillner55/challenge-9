const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }
  else if(license === 'MIT') {
    badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  }  
  else if (license === 'GNU GPL v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)'
  } 
  else if (license === 'Mozilla 2.0') {
    badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
  } 
  else {
  badge = ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (license === 'Apache 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  }
  else if(license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  }
  else if (license === 'GNU GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  }
  else if (license === 'Mozilla 2.0') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  }
  else {
    licenseLink = ""
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}


  ## ${renderLicenseSection(response.lcense)} ${renderLicenseBadge(response.license)}
  ### ${renderLicenseLink(response.license)}

  ## Description

  ${response.description}

  ## Table of Contents

  ###  - [Installation](#instal)
  ###  - [Usage](#usage)
  ###  - [Contributors](#contributors)
  ###  - [License](#license)
  ###  - [Badges](#badges)
  ###  - [Questions](#questions)

  ## Installation

  ${response.install}


  ## Usage

  ${response.usage}


  ## Contributors

  ${response.contributors}


  ## Tests

  ${response.tests}


  ## Questions

  For any questions, please contact me using the information from below:

  ### Github: https://github.com/${response.git}
  ### OR
  ### Email: ${response.email}

`;
}

module.exports = generateMarkdown;