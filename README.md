# Publicar no GitHub e no Cloudflare Pages

Esta versão contém uma página de atendimento com formulário e WhatsApp. A pessoa
revisa a mensagem no WhatsApp. O formulário não envia os dados para um servidor.

## Enviar ao GitHub

1. Extraia o ZIP. Abra index.html para testar a página.
2. Abra whatsapp-config.js e troque o número entre aspas pelo seu número com DDD.
3. Crie um repositório no GitHub. Envie os arquivos extraídos na raiz pela opção
   Add file > Upload files. O index.html deve aparecer na primeira tela do
   repositório. Clique em Commit changes.

## Publicar no Cloudflare Pages

1. Em Workers & Pages, crie um projeto Pages com a opção de conectar ao Git.
2. Autorize o acesso ao repositório e selecione a branch que recebeu os arquivos.
3. Use a opção sem framework. Deixe o comando de build vazio e use a raiz do
   repositório como diretório de saída (.). Inicie o deploy.
4. Abra o endereço pages.dev mostrado no painel e teste o botão.

Para trocar o número depois, edite whatsapp-config.js no GitHub e salve na branch
de produção. O Cloudflare publicará a alteração no próximo deploy.

Guia oficial:
https://developers.cloudflare.com/pages/get-started/git-integration/

Consulta automática de CPF, banco de propostas e PIX não fazem parte deste pacote.
Esses recursos exigem serviços autorizados, configuração de servidor e testes
em homologação. Não coloque credenciais ou dados pessoais no repositório.
