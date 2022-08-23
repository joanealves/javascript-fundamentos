console.log(`trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);//adicionando itens na lista 
console.log("Destinos possíveis");
// console.log("salvador, sãoPaulo, rioDeJaneiro");

//removendo item dentro da lista
listaDeDestinos.splice(1, 1)//o que quero apagar e o segundo numero e a quantidade de elementos
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos);


