# projeto1
# 🎬 Streaming Projeto

Projeto backend de uma **plataforma de streaming de vídeos**, onde usuários podem cadastrar, comentar e excluir vídeos. O foco é oferecer uma estrutura organizada e escalável, com logs de erros, banco de dados MongoDB e rotas bem definidas.

## 🎯 Tema do Projeto

Este sistema simula uma plataforma de streaming com o objetivo de:

- Armazenar vídeos cadastrados pelos usuários
- Permitir comentários em vídeos
- Permitir exclusão de vídeos de comentários
- Exibir logs de erros para auxiliar no monitoramento da aplicação

## 🧪 Formas de Teste

O sistema pode ser testado de duas formas: **manual** (via menu interativo) e **automática** (execução de testes simulados diretamente pelo sistema).

### 🔹 Teste Manual (via Menu)

Ao executar o projeto, o sistema exibe um menu no terminal permitindo ao usuário interagir com as funcionalidades de forma prática e direta.

**Funcionalidades disponíveis no menu:**

- Cadastrar um vídeo
- Listar todos os vídeos
- Excluir um vídeo
- Adicionar um comentário
- Listar comentários
- Cadastrar usuário
- Sair do sistema

Essa opção é ideal para validar os fluxos manualmente e entender o comportamento do sistema em tempo real.

### 🔸 Teste Automático (Simulação Completa)

Nesta abordagem, o sistema executa automaticamente os seguintes passos:

1. Cadastra usuários
2. Adiciona vídeos
3. Lista vídeos cadastrados
4. Cadastra comentários
5. Lista comentários
6. Exclui vídeos
7. Finaliza a execução

Essa opção é útil para validar o comportamento do sistema de forma






## 💻 PROMPT PARA EXECUTAR O PROJETO BACKEND DE STREAMING COM MYSQL

## 1. Clone o repositório
git clone https://github.com/seu-usuario/streaming-projeto.git
cd streaming-projeto

## 2. Instale as dependências do Node.js
npm install

## 3. Configure as variáveis de ambiente
## Crie um arquivo .env com o seguinte conteúdo:
echo "PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario_mysql
DB_PASSWORD=sua_senha_mysql
DB_NAME=nome_do_banco" > .env

## 4. Execute o script de criação do database no sql

## 5. Certifique-se de que o MySQL está rodando e o banco está criado

## 6. Execute a aplicação
node app.js








