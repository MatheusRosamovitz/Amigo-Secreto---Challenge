//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function exibirListaDeAmigos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {
    let novoAmigo = document.querySelector('input').value.trim(); // melhor nome para a variável

    if (novoAmigo === "") {
        alert("Por favor, insira um nome válido!");
        return; // Interrompe a execução da função
    }
    
    listaDeAmigos.push(novoAmigo); // adiciona o novo amigo à lista
    

    let listaHTML = "<ul>";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        listaHTML += `<li>${listaDeAmigos[i]}</li>`;
    }
    listaHTML += "</ul>";

    exibirListaDeAmigos('ul', listaHTML); // Exibe a lista completa
    document.querySelector('input').value = ''; // Limpa o campo de input
}

function sortearAmigo() {
    if (listaDeAmigos.length == 0) {
        alert("Adicione pelo menos um amigo na lista!");
        return;
    }

    // Sorteia um índice aleatório da lista
    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSecreto = listaDeAmigos[indiceSorteado];

    // Exibe o nome sorteado na tela
    exibirListaDeAmigos('#resultado', `O amigo sorteado é: ${amigoSecreto}`);
}
