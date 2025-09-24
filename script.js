// Gera o número secreto entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Número máximo de tentativas
let tentativasMax = 10;
let tentativasRestantes = tentativasMax;

// Pega os elementos do HTML
const inputPalpite = document.getElementById("palpite");
const btnChutar = document.getElementById("btnChutar");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");
const proximidade = document.getElementById("proximidade");

// Exibe tentativas 
tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;

// Função do jogo (a cada clique equivale a uma iteração do loop)
btnChutar.addEventListener("click", function () {
  // Captura e converte o palpite
  let palpite = parseInt(inputPalpite.value);

  // Validação
  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "⚠️ Digite um número válido entre 1 e 100!";
    return;
  }

  // Decrementa tentativa
  tentativasRestantes--;

  // Estrutura de decisão do resultado
  if (palpite === numeroSecreto) {
    mensagem.textContent = "🎉 Você acertou! O número secreto era " + numeroSecreto;
    btnChutar.disabled = true;
  } else if (tentativasRestantes === 0) {
    mensagem.textContent = "❌ Você perdeu! O número secreto era " + numeroSecreto;
    btnChutar.disabled = true;
  } else if (palpite > numeroSecreto) {
    mensagem.textContent = "🔻 O número secreto é menor que " + palpite;
  } else {
    mensagem.textContent = "🔺 O número secreto é maior que " + palpite;
  }

  // Atualiza tentativas
  tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;

  // Proximidade do resultado com o número aleatório gerado
  if (palpite >= 1 && palpite <= 25) {
    proximidade.textContent = "🔎 Muito baixo: Você está entre  0%-25% de acertar";
  } else if (palpite >= 26 && palpite <= 50) {
    proximidade.textContent = "🔎 Baixo: Você está entre 26%-50% de acertar";
  } else if (palpite >= 51 && palpite <= 75) {
    proximidade.textContent = "🔎 Alto: Você está entre 51%-75% de acertar";
  } else if (palpite >= 76 && palpite <= 100) {
    proximidade.textContent = "🔎 Muito alto: Você está entre 76%-100% de acertar";
  }
});
