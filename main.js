// Nivell 1 Exercici 1 -  Arrows functions

const add = (a, b) => a + b;

// Nivell 1 Exercici 2 - Arrow function - randomNumber with out parameters and a seq 1 to 100

const randomNumber = () => {
  var random = Math.floor(Math.random() * 100) + 1;
  console.log(random);
};

// Nivell 1 Exercici 3 - Arrow function - class person

class person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hola, ${this.name}`);
  };
}

// the string shows in greet function.
//const Person = new person("marcos");

//Person.greet();
