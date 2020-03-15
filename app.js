const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employees = [];
const newEmployee = () => {
inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the employee?"
          },{
              type: "input",
              name: "id",
              message: "What is the ID of the employee?"
          },{
              type: "input",
              name: "email",
              message: "What is the employee's email address?"
          },{
              type: "list",
              name: "role",
              message: "What role does the employee play in the organization?",
              choices: [
                  "Manager",
                  "Engineer",
                  "Intern"
              ]
          }
]).then(function(data){
    
    switch (data.role) {
        case "Manager":
            inquirer.prompt(
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the manager's office number?" 
                }
            ).then(function(manData){
                const newManager = new Manager(data.name,data.id,data.email,manData.officeNumber);
                newManager.role = "Manager";
                employees.push(newManager);
                addEmployee();
            });
        break;
        case "Engineer":
            inquirer.prompt(
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineer's Github Username?" 
                }
            ).then(function(engData){
                const newEngineer = new Engineer(data.name,data.id,data.email,engData.github);
                newEngineer.role = "Engineer";
                employees.push(newEngineer);
                addEmployee();
            });
        break;
        case "Intern":
            inquirer.prompt(
                {
                    type: "input",
                    name: "school",
                    message: "What is the intern's school?" 
                }
            ).then(function(intData){
                const newIntern = new Intern(data.name,data.id,data.email,intData.school);
                newIntern.role = "Intern";
                employees.push(newIntern);
                addEmployee();
            });
        break;
    }
})
};
const addEmployee = () => {
    inquirer
    .prompt({
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add an employee?"
    }).then(function(data){
        if (data.addEmployee){
            newEmployee();
        } else {
            fs.writeFile(outputPath,render(employees),"utf8",function(err){
                if (err) {return console.log(err)};
  
                console.log("Success!");
               }); 
            } 
            
            
        }) 
    }
if (fs.existsSync(OUTPUT_DIR)){
    console.log("Output Path Exists.")
    }else{
    fs.mkdir(OUTPUT_DIR, function(err){
        if(err) {return console.error(err);
        } console.log("Directory created successfully");
        })
    };
// console.log(fs.existsSync(OUTPUT_DIR))
addEmployee();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```