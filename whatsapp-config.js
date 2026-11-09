// Troque somente o número entre as aspas. Use o DDD e o número.
const WHATSAPP_NUMERO = "1197707-1469";

(function () {
  const digitos = WHATSAPP_NUMERO.replace(/\D/g, '');
  const numero = digitos.length === 10 || digitos.length === 11
    ? '55' + digitos
    : digitos;

  window.WHATSAPP_NUMERO_CONFIGURADO = /^55[1-9][0-9]{9,10}$/.test(numero) ? numero : '';
})();
