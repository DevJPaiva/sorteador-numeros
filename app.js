function sortear() {
  // 1. Coleta e Conversão dos Valores Iniciais
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  // 2. Tratamento de Erro (Garante que a quantidade pedida seja possível)
  let totalDeNumeros = ate - de + 1;

  // Repete enquanto a quantidade pedida for maior que o total disponível
  while (quantidade > totalDeNumeros) {
    // Pede um novo valor ao usuário
    let novaQuantidade = prompt(`A quantidade pedida (${quantidade}) é maior do que o total de ${totalDeNumeros} números disponíveis no intervalo de ${de} a ${ate}. Por favor, insira uma nova quantidade (máximo ${totalDeNumeros}):`);
    
    // Atualiza a variável 'quantidade' com o novo valor
    quantidade = parseInt(novaQuantidade);
  }

  // Checagem final para se o usuário digitou algo inválido ou cancelou o prompt
  if (isNaN(quantidade) || quantidade <= 0) {
     alert("Operação cancelada ou quantidade inválida após a correção.");
     return;
  }
  
  // 3. Lógica do Sorteio
  let numerosSorteados = []; 

  // O loop principal (roda o número exato de vezes definido pela 'quantidade')
  for (let i = 1; i <= quantidade; i++) {
    let novoNumero = obterNumeroAleatorio(de, ate); 

    // Loop interno (Garante Unicidade): repete o sorteio enquanto o número gerado JÁ ESTIVER na lista
    while (numerosSorteados.includes(novoNumero)) { 
        novoNumero = obterNumeroAleatorio(de, ate);
    }
    
    // Adiciona o número único à lista
    numerosSorteados.push(novoNumero);
  }

  // 4. Exibir o Resultado
  let resultado = document.getElementById('resultado'); 
  // Usa join() para formatar a lista com separador " - "
  resultado.innerHTML = numerosSorteados.join(' - ');
  alterarStatusBotao();
}

// A função auxiliar de sorteio (não deve ser mudada)
function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao =  document.getElementById('btn-reiniciar');
  if (botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado');

  } else {

  }

}
