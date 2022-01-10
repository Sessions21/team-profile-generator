const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(firstName, lastName, id, email, gitHub) {
    super(firstName, lastName, id, email);

    this.gitHub = gitHub;
  };

  getGithub() {
    return this.gitHub;
  };

  getRole() {
    return 'Engineer';
  };
};

module.exports = Engineer