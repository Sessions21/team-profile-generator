

const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path/posix');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/template');

const initializePrompt = () => {
  const buildManager = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerFirst',
        message: "Please provide the manager's first name:",
        validate: managerFirst => {
          if (managerFirst) {
            return true;
          } else {
            console.log('Enter a name to continue:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerLast',
        message: "Please provide the manager's last name:",
        validate: managerLast => {
          if (managerLast) {
            return true;
          } else {
            console.log('Enter a name to continue:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerId',
        message: "Please provide the employee ID:",
        validate: managerId => {
          if (managerId) {
            return true;
          } else {
            console.log('Enter an ID to continue:');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "Please provide the manager's email address:",
        validate: (Email) => {
          const managerEmail = answer.match(/\S+@\S+\.\S+/);
          if (managerEmail) {
            return true;
          }
          return 'Please enter a valid email address.';
        }
      },
      {
        type: 'input',
        name: 'office',
        message: "Please provide the manager's office number:",
        validate: office => {
          if (office) {
            return true;
          } else {
            console.log('Enter an office number to continue:');
            return false;
          }
        }
      }
      ])
      .then((input) => {
        const manager = new Manager(
          input.managerFirst,
          input.managerLast,
          input.managerId,
          input.managerEmail,
          input.office
        );
        employeeCards.push(manager);
        addTeam();
      })
    };

    const addTeam = () => {
      inquirer.prompt([
        {
          type: 'list',
          name: 'employeeType',
          message: 'Add a team member:',
          choices: [
            'Engineer',
            'Intern',
            'No additional team members.',
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.employeeType) {
          case 'Engineer':
            newEngineer();
            break;
          case 'Intern':
            newIntern();
            break;
          default:
            createTeam();
        }
      });
    }

    const newEngineer = () => {
      
    }
const employeeCards = [];


// 

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/template');

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});