let numeroCartas = Number(prompt("Com quantas cartas você quer jogar?"));

while ((numeroCartas % 2) !== 0) {
    numeroCartas = Number(prompt("Com quantas cartas você quer jogar?"));
}


console.log(numeroCartas);