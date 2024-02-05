alert("Bem vindo ao jogo do número secreto!");

let dificuldade = 1000;
let numeroSecreto = parseInt(Math.random() * dificuldade + 1);
let chute;
let cont = 1;

while (numeroSecreto != chute) {
  chute = prompt(`informe o número de 1 a ${dificuldade} `);
  if (numeroSecreto == chute) {
    alert(`Parabens voce acertou, o número secreto era ${numeroSecreto}`);
  } else {
    if (numeroSecreto > chute) {
      alert("O numero secreto é maior");
    } else alert("O numero secreto é menor");
    cont++;
  }
}
let palavraTentativas = cont == 1 ? "tentativa" : "tentativas";
alert(`Você usou ${cont} ${palavraTentativas}`);
