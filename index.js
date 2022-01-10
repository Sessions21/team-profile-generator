

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
      inquirer.prompt([
        {
          type: 'input',
          name: 'engineerFirst',
          message: "Please provide the engineer's first name:",
          validate: engineerFirst => {
            if (engineerFirst) {
              return true;
            } else {
              console.log('Enter a name to continue:');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'engineerLast',
          message: "Please provide the engineer's last name:",
          validate: engineerLast => {
            if (engineerLast) {
              return true;
            } else {
              console.log('Enter a name to continue:');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "Please provide the employee ID:",
          validate: engineerId => {
            if (engineerId) {
              return true;
            } else {
              console.log('Enter an ID to continue:');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "Please provide the engineer's email address:",
          validate: (Email) => {
            const engineerEmail = answer.match(/\S+@\S+\.\S+/);
            if (engineerEmail) {
              return true;
            }
            return 'Please enter a valid email address.';
          }
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: 'Please provide GitHub username:',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Enter GitHub username to continue:');
              return false;
            }
          }
        },
      ])
      .then((input) => {
        const engineer = new Engineer(
          input.engineerFirst,
          input.engineerLast,
          input.engineerId,
          input.engineerEmail,
          input.engineerGithub
        );
        employeeCards.push(engineer);
        addTeam();
      });
    };

    const newIntern = () => {
      inquirer.prompt([
        {
          type: 'input',
          name: 'internFirst',
          message: "Please provide the intern's first name:",
          validate: internFirst => {
            if (internFirst) {
              return true;
            } else {
              console.log('Enter a name to continue:');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'internLast',
          message: "Please provide the intern's last name:",
          validate: internLast => {
            if (internLast) {
              return true;
            } else {
              console.log('Enter a name to continue:');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'internId',
          message: "Please provide the employee ID:",
          validate: internId => {
            if (internId) {
              return true;
            } else {
              console.log('Enter an ID to continue:');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "Please provide the intern's email address:",
          validate: (Email) => {
            const internEmail = answer.match(/\S+@\S+\.\S+/);
            if (internEmail) {
              return true;
            }
            return 'Please enter a valid email address.';
          }
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "Please provide the school the intern is attending:",
          validate: internSchool => {
            if (internSchool) {
              return true;
            } else {
              console.log('Enter a school or N/A to continue:');
              return false;
            }
          }
        },
      ])
      .then((input) => {
        const intern = new Intern(
          input.internFirst,
          input.internLast,
          input.internId,
          input.internEmail,
          input.internSchool
        );
        employeeCards.push(intern);
        addTeam();
      });
    };

    const createTeam = () => {
      
    }

}
const employeeCards = [];


// 

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/template');

function createTeam() {
  // Create the output directory if the dist path doesn't exist
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
}

createManager();
}

start();