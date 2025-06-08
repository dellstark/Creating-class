class tipoHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
        atacar(){
            console.log(`O ${this.nome} atacou usando ${this.tipo}`);
        }
};


let guerreiro = new tipoHeroi("Guerreiro", 34, "Força");
let monge = new tipoHeroi("Monge", 40, "Magia");
let mago = new tipoHeroi("Mago", 46, "Magia");
let ninja = new tipoHeroi("Ninja", 30, "Churiken");

mago.atacar();