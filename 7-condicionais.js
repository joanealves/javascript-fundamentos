console.log(`trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
console.log("Destinos possíveis");
console.log(listaDeDestinos);

const estaAcompanhada = true;
if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1)//removendo item dentro da lista
} else {
    if (estaAcompanhada) { //a pessoa é menor de idade
        console.log("Comprador maior de idade");
        listaDeDestinos.splice(1, 1)//removendo item dentro da lista
    } else {
        console.log("Não é maior de idade e não posso vender");
    }
}

//operadores logicos
    // > 18
    // > 18
    // <= 18
    // > 18
    // == 18

