const Manager = require('../lib/Manager');

test('create a Manager card', () => {
  const manager = new Manager('John', 'Doe', 'A53993', 'snich@fit.com', '321');

  expect(manager.firstName).toBe('John');
  expect(manager.lastName).toBe('Doe');
  expect(manager.id).toBe('A53993');
  expect(manager.email).toBe('snich@fit.com');
  expect(manager.office).toBe('321');
});