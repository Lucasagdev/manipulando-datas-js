const dataAtual = new Date();

const umDiaDepois = new Date(dataAtual)

umDiaDepois.setDate(dataAtual.getDate() + 1);

console.log(umDiaDepois)

const umMesAtras = new Date (dataAtual);

umMesAtras.setMonth(umMesAtras.getMonth() - 1);

console.log(umMesAtras);

const dataAtual = new Date();
const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes);

console.log(dataFormatada)

const formatador = new Intl.DateTimeFormat('pt-BR', opcoes);

const dataFormatada = formatador.format(dataAtual);

console.log(dataFormatada);