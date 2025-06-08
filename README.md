# Classe `tipoHeroi` – Simulação de Ataques com Heróis

Este repositório apresenta um exemplo simples de aplicação dos conceitos de programação orientada a objetos (POO) em **JavaScript**, através da criação de uma classe chamada `tipoHeroi`.

## 🎯 Finalidade

Demonstrar de forma prática:
- Como declarar e utilizar uma **classe** em JavaScript
- Uso de **construtores** para inicializar objetos
- Definição de **métodos de instância**
- Criação e manipulação de múltiplas instâncias (objetos)

## 🧱 Estrutura do Código

A classe `tipoHeroi` representa personagens com os seguintes atributos:

- `nome`: Nome do herói
- `idade`: Idade do herói
- `tipo`: Tipo do herói (por exemplo: Magia, Força, etc.)

Ela também possui o método `atacar()`, que exibe no console uma mensagem com o tipo de ataque usado por aquele herói.

## ⚔️ Heróis Criados

```javascript
let guerreiro = new tipoHeroi("Guerreiro", 34, "Força");
let monge = new tipoHeroi("Monge", 40, "Magia");
let mago = new tipoHeroi("Mago", 46, "Magia");
let ninja = new tipoHeroi("Ninja", 30, "Churiken");

mago.atacar(); // Saída: "O Mago atacou usando Magia"
