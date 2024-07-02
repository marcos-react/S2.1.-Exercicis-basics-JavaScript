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


// Exercici 1.3: Callbacks

// Nivell 1 Exercici 1

function processar(nombre,callback){

    callback(nombre);

}

function mostrarNombre(nombre){

    console.log(`El nombre es: ${nombre}`);

}

//reference function

processar(1, mostrarNombre);


// Nivell 1 Exercici 2


function calculadora(nombre1,nombre2,callback)
{
    callback(nombre1,nombre2);
}

function mostrarSuma(nombre1,nombre2){

    console.log(`${nombre1+nombre2}`);

}

calculadora(5,3,mostrarSuma);


// Exercici 1.4: Rest & Spread

// Nivell 1 Exercici 1

const array1 = [1,2,3];

const array2 = [4,5,6];

const array3 =[...array1,...array2]; //spread array

//log.console(array3); It works


// Nivell 1 Exercici 2

function suma(...nombre){

    return nombre.reduce((acumulador,actual) => acumulador + actual,0)    

}

console.log(suma(1,2,3)); // 6
console.log(suma(1,2,3,4,5)); //15


// Exercici 1.5: Array transformations

// Nivell 1 Exercici 1

const array4 = [1,2,3,4];

const newarray = array4.map(numero => numero * numero);

console.log(newarray);


// Nivell 1 Exercici 2

const array5 = [1,2,3,4];

const newarray2 = array5.filter(checkParells);

function checkParells(parell){

    return ((parell % 2) == 0);

}

console.log(newarray2); // it works
 
