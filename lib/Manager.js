const Employee = require('./Employee');

class Manager extends Employee {
  constructor(firstName, lastName, id, email, office) {
    super(firstName, lastName, id, email);

    this.office = office;
  };

  getOffice() {
    return this.office;
  };

  getRole() {
    return 'Manager';
  };
};

module.exports = Manager