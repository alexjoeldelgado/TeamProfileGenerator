# TeamProfileGenerator
This application will create an HTML file that displays the Managers, Engineers, and Interns of an engineering team.

## Description
The project will ask the user, through CLI prompts, various questions about their team and return a cleanly formatted HTML file displaying the appropraite info.

### Table of Contents
I. Title
II. Description
III. Table of Contents
IV. Installation
V. Visuals
VI. Usage
VII. License
VIII. Contributing
IX. Test(s)
X. Questions
    
## Installation
The user will need to install inquirer and jest to run and test the application.

## Visuals
<img src='https://github.com/alexjoeldelgado/TeamProfileGenerator/blob/master/assets/images/ss1.PNG' alt='screenshot1' height='200px'>
<img src='https://github.com/alexjoeldelgado/TeamProfileGenerator/blob/master/assets/images/ss2.PNG' alt='screenshot2' height='200px'>
<img src='https://github.com/alexjoeldelgado/TeamProfileGenerator/blob/master/assets/images/ss3.PNG' alt='screenshot3' height='200px'>
    
## Usage
The application will check to see if the output directory exists, and if it doesn't, it will be created. The user is then asked if they would like to add an employee. The user is asked for the name, id, email, and role of the employee. Depending on which role the user selects, a role-specific question will be asked. From the gathered data, the application will create an array of either Manager, Engineer, or Intern objects. Each object will have the appropriate properties that match the previous data. Once all employees have been inputted, the application will create an HTML file, using templates for each employee, and save that file in the output directory.

## License
<img src='https://img.shields.io/badge/License-MIT-black' alt='badge'>
    
## Contributing
N/A

## Test(s)
There are 4 tests that check for input validation found in the test directory. There is a test for the Employee, Engineer, Intern, and Manager classes. 

## Questions
If you have any questions, please feel free to contact me below.

Email: alexjoeldelgado@gmail.com

<a href='https://github.com/alexjoeldelgado'>Github Profile: alexjoeldelgado</a>

<img src='https://avatars2.githubusercontent.com/u/55860772?v=4' height='200px' alt='github avatar'>

