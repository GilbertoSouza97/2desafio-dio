function calcularNivelRankeado(vitorias, derrotas){
//calcular saldo das rankeadas

let saldoVitorias = vitorias - derrotas;

//determinar o nivel com base no saldo de vitorias

let nivel;

if (vitorias < 10) {
    nivel = "Ferro"
} 

else if (vitorias <= 20) {
    nivel = "Bronze"
} 

else if (vitorias <= 50){
    nivel = "Prata"
} 

else if (vitorias <= 80){
    nivel = "Ouro"
} 

else if (vitorias <= 90){
    nivel = "Diamante"
}

else if (vitorias <= 100) {
    nivel = "Lendario"
}

else {
    nivel = "Imortal"
}

return {
    saldoVitorias: saldoVitorias,
    nivel: nivel
};

}

function exibirMensagem(){
    let resultadoJogador = calcularNivelRankeado(80,30)
    console.log(`O jogador tem um saldo de ${resultadoJogador.saldoVitorias} e está no nivel de ${resultadoJogador.nivel}`)
    }

exibirMensagem();