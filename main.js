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


// Nivell 1 Exercici 3

const array6 = [1,10,8,11];

const newarray3 = array6.find(checkBigger10);

function checkBigger10(check){
    return (check > 10)
}

//console.log(newarray3); // it works

// Nivell 1 Exercici 4

const array7 = [13,7,8,21];

const newarray4 = array7.reduce((acumulador,actual) => acumulador + actual,0);

//console.log(newarray4); // it works


// Exercici 1.6: Array loops


// Nivell 1 Exercici 1

let noms = ['Anna','Bernat','Clara'];

noms.forEach(element => {
    console.log(element);
});

// Nivell 1 Exercici 2

let noms2 = ['Anna','Bernat','Clara'];

for(let x of noms2){
    console.log(x);
}


// Nivell 1 Exercici 3

let numeros = [1,2,3,4,5,6];

const newarray5 = numeros.filter(checkParells); // previously used before

//console.log(newarray5); // it works


// Exercici 1.7: Promises & Async/Await

// Nivell 1 Exercici 1

let promise = new Promise (function(resolve, reject){

    setTimeout(() => {
        resolve("Hola, Món");
      }, 2000);

});

// Nivell 1 Exercici 2

promise.then(missatge => {
    console.log(missatge);
});

// Nivell 1 Exercici 3

let promise2 = (input) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input === "Hola") {
          resolve("success");
        } else {
          reject("failed");
        }
      }, 2000);
    });
  };
  
  // Use the promise
  promise2("Hola")
    .then(missatge => {
      console.log(missatge); // 'success'
    })
    .catch(error => {
      console.error(error); // Not executed
    });
  
  promise2("bye")
    .then(missatge => {
      console.log(missatge); // Not executed
    })
    .catch(error => {
      console.error(error); // 'failed'
    });
  
// Nivell 1 Exercici 4

// use exercici 1

  
  async function asincrona() {
    try {
      // wait
      let result = await promise;
      // print
      console.log(result);
    } catch (error) {
      // error
      console.error(error);
    }
  }
  
  // Call asincronize function
  asincrona();
  









 
