// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if(license !== "None"){
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (license !== "None"){
    return`this project uses the follwoing license; [${license}](https://choosealicense.com/licenses/${license}/)`
  
  }
  return ""

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License
    
    this project is lisenced under ${license} lincese.`
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
  ${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${data.installation}



## Usage 
${data.usage}

## Credits 

${data.credits}



## License
  -${renderLicenseSection(data.license)}

//  ${data.license.length !== 0 ? renderLicenseSection(data.license[0]) : ""}














`;
}


module.exports = generateMarkdown;
