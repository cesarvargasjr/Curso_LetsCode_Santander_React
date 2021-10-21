/*==============================================================================

>>> FUNÇÕES DE ALTA ORDEM <<<

const subtrair = (a,b) => a-b;
const aplicaOperated = (a, b, operacao) => operacao (a, b);

let resultado = aplicaOperated (4 , 2, subtrair);

console.log(resultado); 

/*==============================================================================

>>> MAP <<<

const vetor = ["10", "20", "30"];
const stringToInt = (x) => parseInt (x);
const vetor2 = vetor.map(stringToInt);
console.log(vetor2);

const vetor3 = vetor2.map(x => x*x);
console.log(vetor3);


/*==============================================================================

>>> FILTER <<<

const vetor = [1,2 , 3, 4, 5, 6, 7, 8, 9, 10];

const pares = vetor.filter (function (x) {return x%2 === 0});

console.log(pares);

===============================================================================

>>> REDUCE <<<  

const vetor = [1, 2, 3, 4, 5, 6];

const soma = vetor.reduce((estado, item) => estado * item, 1); 

console.log(soma);


===============================================================================*/

