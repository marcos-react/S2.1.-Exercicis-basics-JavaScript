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


// Exercici 1.2: Operador ternari


// Nivell 1 Exercici 1


 function potConduir(edat){

    return edat >= 18 ? "Pots conduir":"No pots conduir"; 

 }

 // The function has been checked and it works.
 //console.log(potConduir(19));

 
 // Nivell 1 Exercici 2

function compare(num1, num2){

    return num1>num2 ? "num1 es mes gran":"num2 es mes gran";

}

// The function has been checked and it works.
//console.log(compare(5,3));
//console.log(compare(3,5));

