function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let numero = obterNumeroAleatorio(de, ate);

  for (let i = 1; i <= quantidade; i++) {
    let novoNumero = obterNumeroAleatorio(de, ate);

    // O while repete o sorteio enquanto o número gerado JÁ ESTIVER na lista
    while (numerosSorteados.includes(novoNumero)) {
      for (let i = 1; i <= quantidade; i++) {
        let novoNumero = obterNumeroAleatorio(de, ate);

        // O while repete o sorteio enquanto o número gerado JÁ ESTIVER na lista
        while (numerosSorteados.includes(novoNumero)) {
          // Se for repetido, gera um novo número para checar na próxima rodada
          novoNumero = obterNumeroAleatorio(de, ate);
        }

        // Adiciona o número único (o while garante que ele não se repete)
        numerosSorteados.push(novoNumero);
      }
      novoNumero = obterNumeroAleatorio(de, ate);
    }

    numerosSorteados.push(novoNumero);
  }
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



