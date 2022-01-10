const Intern = require('../lib/Intern');

test('create an intern card', () => {
  const intern = new Intern('John', 'Doe', 'A53993', 'snich@fit.com', 'UofU');

  expect(intern.firstName).toBe('John');
  expect(intern.lastName).toBe('Doe');
  expect(intern.id).toBe('A53993');
  expect(intern.email).toBe('snich@fit.com');
  expect(intern.school).toBe('UofU');
});