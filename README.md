# Funil de simulação e atendimento

O visitante escolhe o objetivo, o valor e as parcelas, pode informar o nome e
revisa as escolhas antes de abrir a conversa no WhatsApp. A estimativa por
parcela divide o principal pela quantidade de parcelas e exclui juros e encargos.

## Publicar no GitHub Pages

1. Extraia o ZIP e abra index.html para testar o fluxo.
2. No repositório já publicado, abra Add file > Upload files.
3. Envie todos os arquivos extraídos na raiz do repositório, incluindo index.html.
   Confirme o commit na branch usada pelo GitHub Pages, normalmente main.
4. Em Settings > Pages, confira se a origem está na raiz da branch. Aguarde o
   deploy em Actions e abra Visit site. Percorra as cinco telas e confira o destino
   da mensagem no WhatsApp.

## Trocar o número de WhatsApp

Edite whatsapp-config.js no GitHub. Troque só o número entre aspas na linha
const WHATSAPP_NUMERO. Use DDD e número. Salve na branch de publicação.

Esta versão usa o visual da abertura e a ilustração do projeto original.
Ela funciona no GitHub Pages sem servidor. A consulta externa de CPF, a
verificação facial, as aprovações simuladas e as etapas de cobrança ficaram fora.
O pacote também não inclui código de tracking, segredos ou banco de propostas.
