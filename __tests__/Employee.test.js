const Employee = require('../lib/Employee');

test('create an employee card', () => {
  const employee = new Employee('John', 'Doe', 'A53993', 'snich@fit.com');

  expect(employee.firstName).toBe('John');
  expect(employee.lastName).toBe('Doe');
  expect(employee.id).toBe('A53993');
  expect(employee.email).toBe('snich@fit.com');
});