const formulario = document.querySelector('#atendimento');
const botao = document.querySelector('#abrir');
const aviso = document.querySelector('#aviso');
const numero = window.WHATSAPP_NUMERO_CONFIGURADO;

if (numero) {
  botao.disabled = false;

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const campos = new FormData(formulario);
    const nome = campos.get('nome').trim();
    const assunto = campos.get('assunto');
    const apresentacao = nome ? 'Olá! Meu nome é ' + nome + '.' : 'Olá!';
    const mensagem = apresentacao + ' Gostaria de ' + assunto + '.';

    window.location.href = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(mensagem);
  });
} else {
  aviso.textContent = 'O número de atendimento precisa ser configurado.';
}
