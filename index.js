const generateMarkdown = require('./utils/generateMarkdown')
const fs = require(`fs`)
const inquirer = require(`inquirer`)


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt ([
        {
            type: "input",
            name: "title",
            message: "what is the title?",

        },{
            type: "input",
            name: "description",
            message: "what is your description?"
        },{
            type: "input",
            name: "installation",
            message: "what is your installtion command?"
        },{
            type: "input",
            name: "usage",
            message: "provide a example usage?",
        },{
            type: "input",
            name: "contributing",
            message: "how can contribution is done",
        },{
            type: "input",
            name: "test",
            message: "testing instrutions",
        },{
            type: "list",
            name: "license",
            message: "select a license",
            choices: ["mit", "gpl-3.0", "mpl-2.0", "apache-2.0", "None"],

        },{
            type: "input",
            name:   "email",
            message: "what is your email address?",
        },{
            type: "input",
            name: "github",
            message: "what is your github username?",
        }
        
    ]) 
    .then((answer)=>{
        console.log(answer)
        const mardownContent = generateMarkdown(answer)
        fs.writeFile(`./output/readme.md`,mardownContent, (err)=>
        err ? console.log(err): console.log('created a markdown')
        )
    })
}

// Function call to initialize app
init();
