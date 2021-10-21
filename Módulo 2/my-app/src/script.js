/*======================================================================================= 

>>> INTRO ORIENTAÇÃO A OBJETOS <<<

const pessoa = {Nome: 'Cesar', Idade: 26};

console.log(pessoa.Nome);

const quadrado = {
    base: 10, 
    altura: 20, 
    calculaArea: function(){
        return this.base*this.altura
    }
}

console.log (quadrado.calculaArea());

/*=======================================================================================

>>> CLASSE E CONSTRUTOR <<<

class Pessoa {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;

    }
}

const pessoa1 = new Pessoa ('Carlos', 20);
pessoa1.idade = 21;

const pessoa2 = new Pessoa ('Laura', 36);

console.log(pessoa1, pessoa2);

=======================================================================================

>>> ATRIBUTOS <<<

class Quadrado{
    constructor (base, altura){
        if (isNaN(base) || isNaN (altura)) throw "informação não numérica";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

const quadrado = new Quadrado (11, 12);
quadrado.cor = 'blue';
console.log(quadrado);

=======================================================================================

>>> METODOS <<<

class Quadrado{
    constructor (base, altura){
        if (isNaN(base) || isNaN (altura)) throw "informação não numérica";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }

    calculaArea () {
        return this.base*this.altura;
    }

    duplicaBase () {
        this.base = 2* this.base;
    }

    imprimir () {
        return `<div style = 'width:${this.base} px; height:${this.altura} px; background-color:${this.cor || "blue"}'></div`;
    }
}

const quadrado = new Quadrado(11,12);
quadrado.duplicaBase();
console.log(quadrado.calculaArea());

=======================================================================================

>>> ENCAPSULAMENTO <<<

/*function Quadrado (base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue';
}

const quadrado = new Quadrado (3,4);
quadrado.cor = 'red';
console.log(quadrado.cor);*/

/*const { convertCompilerOptionsFromJson } = require("typescript");/*



/*function criaQuadrado (base, altura) {
    
    let cor = 'blue';

    return {
        base,
        altura,
        getCor: function() {return cor;}
    };
}

const quadrado = criaQuadrado (3,4);
console.log(quadrado.getCor());



class Quadrado{
    constructor (lado, altura){
        let cor = 'blue';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor; };
    }
}

const quadrado = new Quadrado(3,4);
console.log(quadrado.getCor());


=======================================================================================

>>> MÉTODOS DE ACESSO <<<

class Quadrado{
    constructor (lado, altura){
        let cor = 'blue';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor; };
        this.setCor = (c) => {cor = c;}
    }
}

const quadrado = new Quadrado(3,4);
quadrado.setCor ('red');
console.log(quadrado.getCor());

=======================================================================================

>>> HERANÇA E POLIMORFISMO <<<

class Pessoa {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor (nome, idade, rg, cpf) {
        super (nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}

const cidadao = new Cidadao ('Lucas', 26, '0000', '1111');
console.log(cidadao);

=======================================================================================*/

