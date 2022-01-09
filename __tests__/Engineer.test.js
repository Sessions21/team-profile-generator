const Engineer = require('../lib/Engineer');

test('create an engineer card', () => {
  const engineer = new Engineer('John', 'Doe', 'A53993', 'snich@fit.com', 'sessions21');

  expect(engineer.firstName).toBe('John');
  expect(engineer.lastName).toBe('Doe');
  expect(engineer.id).toBe('A53993');
  expect(engineer.email).toBe('snich@fit.com');
  expect(engineer.gitHub).toBe('sessions21');
});