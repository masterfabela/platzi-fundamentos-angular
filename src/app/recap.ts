const username: string | number = 'masterfabela';

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const nico = new Person(23, 'Molina');
