let amigos = [];

function adicionar() {
    let novoAmigo = document.getElementById("nome-amigo").value;
    if (novoAmigo == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if (amigos.includes(novoAmigo)) {
        alert('Nome já adicionado!');
        return;
    }

    amigos.push(novoAmigo);
    document.getElementById("lista-amigos").innerHTML = amigos.join(", ");
    document.getElementById("nome-amigo").value = "";
  
}


function sortear() {
    
    if (amigos.length < 4) {
        alert("Adicione pelo menos 4 amigos");
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        }   
        else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }


}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);


        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar(){

    amigos = [];

    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}
