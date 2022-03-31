# Mern E-Loja - EM ANDAMENTO

Projeto criado tanto para testar novas tecnologias, como desafiar as que já possuo algum domínio.


## Techs

Entre as técnologias escolhidas está primariamente a Stack MERN, mas foram adicionadas outras durante o processo as quais destacar:

 - [MongoDB](https://docs.mongodb.com) - como banco de dados não relacional.
 
 - [Express](https://expressjs.com/) - para facilitar a manipulação dos dados para o Node
 
 - [React](https://reactjs.org/docs/getting-started.html) - para toda parte do frontend.
 
 - [Node JS](https://nodejs.org/en/docs/) - onde foi criada toda API de comunicação e controle do banco de dados.
 
 - [Redux](https://redux.js.org) - para deixar de forma global as variáveis e facilitar seu reuso.

## Instalação e execução do projeto

### Importante

*A primeira vista, pode parecer complicado por ser feita instalação individual do backend e também do frontend. 
Mas escolhi essa forma de arquitetura para centralizar todos códigos dentro de um elemento raiz. Dessa forma, não só os códigos de para iniciar o projeto ficam agrupados e facilitam ser iniciados, como também ficam separadas as dependencias de backend e frontend dando um controle sobre o que será instalado em ambas partes, facilitando uma futura possível manutenção*

### Antes de baixar instalar o projeto, é necessário ter o **GIT** e **NODEJS** previamente instalados em sua máquina!

## Instalação
No terminal vá para a pasta onde será instalado o projeto e  execute o comando: 

`git clone https://github.com/WellytonSdJ/merneloja.git`

vá até a pasta raiz do projeto e instale as dependencias de desenvolvimento:

`cd /merneloja`

`npm install`

Após isso, no terminal acesse o frontend: 

`cd /frontend`

e instale as dependencias com o comando: 

`npm install`

e retorne à pasta raiz para executar o Projeto

`cd ..`

## Execução
Uma vez instaladas todas dependencias, *NA PASTA RAIZ*, execute o comando: 
`npm run dev` - para rodar o projeto e suas integrações do front e backend ao mesmo tempo.


# PROBLEMAS ENCONTRADOS

- durante a conexão do backend e frontend -> solução: instalei e configurei no backend o setupProxy
- Outro ponto importante é que eu havia esquecido de validar se as rotas estavam funcionando. Testei e precisei fazer uns ajustes e por fim validei que estava certo.

