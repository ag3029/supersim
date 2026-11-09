const formulario = document.querySelector('#simulacao');
const telas = [...formulario.querySelectorAll('.tela')];
const progresso = document.querySelector('#progresso');
const etapa = document.querySelector('#etapa');
const continuar = document.querySelector('#continuar');
const voltar = document.querySelector('#voltar');
const nome = document.querySelector('#nome');
const avisoNome = document.querySelector('#aviso-nome');
const avisoWhatsApp = document.querySelector('#aviso-whatsapp');
const valor = document.querySelector('#valor');
const parcelas = document.querySelector('#parcelas');
const valorExibido = document.querySelector('#valor-exibido');
const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const numero = window.WHATSAPP_NUMERO_CONFIGURADO;
let atual = 0;

function lerSimulacao() {
  const objetivo = formulario.elements.objetivo.value;
  const quantidade = Number(parcelas.value);
  return {
    objetivo,
    valor: moeda.format(valor.valueAsNumber),
    parcelas: quantidade,
    referencia: moeda.format(valor.valueAsNumber / quantidade)
  };
}

function mostrarTela(indice) {
  atual = indice;
  telas.forEach((tela, i) => { tela.hidden = i !== indice; });
  progresso.value = indice + 1;
  etapa.textContent = 'Etapa ' + (indice + 1) + ' de ' + telas.length;
  voltar.hidden = indice === 0;
  const revisao = indice === telas.length - 1;
  continuar.textContent = revisao ? 'Continuar no WhatsApp' : 'Continuar';
  continuar.disabled = revisao && !numero;
  avisoWhatsApp.hidden = !continuar.disabled;

  if (revisao) {
    const dados = lerSimulacao();
    document.querySelector('#resumo-objetivo').textContent = dados.objetivo;
    document.querySelector('#resumo-valor').textContent = dados.valor;
    document.querySelector('#resumo-parcelas').textContent = dados.parcelas;
    document.querySelector('#resumo-referencia').textContent = dados.referencia;
  }

  telas[indice].querySelector('h1, h2').focus();
}

valor.addEventListener('input', () => {
  valorExibido.value = moeda.format(valor.valueAsNumber);
});

nome.addEventListener('input', () => {
  avisoNome.hidden = true;
  nome.removeAttribute('aria-invalid');
});

voltar.addEventListener('click', () => mostrarTela(atual - 1));

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const primeiroNome = nome.value.trim();

  if (atual >= 3 && primeiroNome && !/^[\p{L}\p{M} .’'-]+$/u.test(primeiroNome)) {
    mostrarTela(3);
    avisoNome.hidden = false;
    nome.setAttribute('aria-invalid', 'true');
    nome.focus();
    return;
  }

  if (atual < telas.length - 1) {
    mostrarTela(atual + 1);
    return;
  }

  if (!numero) return;

  const dados = lerSimulacao();
  const apresentacao = primeiroNome ? 'Olá! Meu nome é ' + primeiroNome + '.' : 'Olá!';
  const mensagem = [
    apresentacao + ' Gostaria de conversar sobre esta simulação de crédito.',
    'Objetivo: ' + dados.objetivo,
    'Valor solicitado: ' + dados.valor,
    'Parcelas escolhidas: ' + dados.parcelas
  ].join('\n');

  window.location.href = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensagem);
});

continuar.disabled = false;
