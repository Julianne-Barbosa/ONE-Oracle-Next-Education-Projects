//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = []
let indice = 0;

function adicionarAmigo(){
    nome = document.getElementById('amigo').value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    nomes.push(nome);

    const item_lista = document.createElement('li');
    item_lista.innerText = nome;

    document.getElementById('listaAmigos').appendChild(item_lista);

    document.getElementById('amigo').value = "";
}

function sortearAmigo(){

    if(nomes.length === 0){
        alert("Por favor, insira um nome.");
        return;
    }

    while(indice === 0 || indice >= nomes.length){
        indice = Math.floor(Math.random()*nomes.length);
    }

    document.getElementById('listaAmigos').innerHTML = "";

    document.getElementById('resultado').innerHTML = "";

    const item_resultado = document.createElement('li');
    item_resultado.innerText = "O amigo secreto sorteado é " + nomes[indice];
    document.getElementById('resultado').appendChild(item_resultado);

    nomes.splice(indice, 1);
}
