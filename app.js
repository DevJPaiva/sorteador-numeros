/*function sortear() {
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
}*/

function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  // 1. O tratamento de erro
  let totalDeNumeros = ate - de + 1;

  if (quantidade > totalDeNumeros) {
    alert(
      `O número de ${quantidade} que você pediu é maior do que o total de ${totalDeNumeros} números disponíveis no intervalo de ${de} a ${ate}.`
    );
    return; // Para a função aqui.
  }

  // 2. A lógica de sorteio (que só roda se o if for falso)
  let numerosSorteados = [];

  for (let i = 1; i <= quantidade; i++) {
    let novoNumero = obterNumeroAleatorio(de, ate);

    while (numerosSorteados.includes(novoNumero)) {
      novoNumero = obterNumeroAleatorio(de, ate);
    }

    numerosSorteados.push(novoNumero);
  }

  // 3. Exibir o resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = numerosSorteados.join(" - ");
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
