# POC Next.js Multizones

Este repositório é uma prova de conceito (POC) para demonstrar o funcionamento do Next.js com multizones. O Next.js multizones permite que diferentes partes de um aplicativo sejam servidas por diferentes aplicações Next.js, facilitando a modularização e a escalabilidade do projeto.

## O que é Multizones?

Multizones é uma funcionalidade do Next.js que permite dividir um aplicativo em várias zonas, onde cada zona é um aplicativo Next.js independente. Isso é útil para grandes projetos que precisam ser divididos em partes menores e mais gerenciáveis, ou para equipes que trabalham em diferentes partes do aplicativo de forma independente.

## Como Rodar

Para rodar este projeto, você precisa executar os seguintes comandos no arquivo `package.json`:

1. Primeiro, inicie o servidor de desenvolvimento para o projeto 1:
    ```bash
    npm run project01
    ```

2. Em seguida, inicie o servidor de desenvolvimento para o projeto 2:
    ```bash
    npm run project02
    ```

Após executar esses comandos, você poderá acessar as diferentes zonas do aplicativo em seus respectivos endereços.

## Estrutura do Projeto

- `poc-multizones-app-001`: Contém a configuração e o código para a primeira zona do aplicativo.
- `poc-multizones-app-002`: Contém a configuração e o código para a segunda zona do aplicativo.

## Configuração

### `poc-multizones-app-001/next.config.ts`
