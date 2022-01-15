//for in =>
//iterage com o objeto. Por exemplo, imprime os valores da propriedade

//estrututa
//let nomeVariavel = {
    //nomePropriedade1: ,
    //nomePropriedade2: ,
//}
//for (let nomeVariavel2 in nomeVariavel) {
    //console.log(nomeVariavel[nomeVariavel2]);
//}

let carro = {
    nome: "Ferrari",
    ano: 2020,
}
for (let proprietario in carro) {
    console.log(carro[proprietario]);
}

//for of =>
//iterage com a array, ou seja, nao faz o loop de todos os elementos, apenas o elemento especificado.
//iterar = percorrer

//estrutura
//let nomeVariavel = ["elemento1", "elemento2", ...];
//for (const nomeVariavel2 of nomeVariavel) {
    //console.log(nomeVariavel2);
//}

let series = ["Meu amigo", "Oz", "Dr. Fritz"];
for (const elementos of series) {
    console.log(elementos);
}
