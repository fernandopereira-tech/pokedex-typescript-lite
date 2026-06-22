# Mini Pokédex - TypeScript & Programação Orientada a Objetos

## Sobre o Projeto

Este projeto consiste em uma aplicação back-end em TypeScript que consome a API externa PokeAPI (https://pokeapi.co/) em tempo de execução para gerenciar um catálogo local de Pokémon em memória.

## Objetivo

Praticar conceitos de:

- Node.js
- TypeScript
- Interfaces
- Classes
- Métodos de Array
- Async/Await
- Fetch
- Tratamento de Erros
- Programação Orientada a Objetos
- GitFlow

## 🔗 Links do Projeto
* **Demonstração Online (Manus Space):** [https://pokedashboard-zq6pkzee.manus.space/]
* **Quadro Kanban (GitHub Projetos):** [https://github.com/users/fernandopereira-tech/projects/1/views/1]

---

##  Tecnologias, Ferramentas e Ambiente
*   **Ambiente de Desenvolvimento:** Windows Subsystem for Linux (WSL2 - Ubuntu)
*   **Editor:** VS Code
*   **Runtime:** Node.js v22
*   **Linguagem:** TypeScript (Configurado em modo estrito)
*   **Executor de Scripts:** TSX (TypeScript Execute)

---

## Pré-requisitos

Antes de executar o projeto é necessário possuir:

- Node.js v22 ou superior
- npm
- Git


## Como Instalar

-> Clone o repositório:
git clone https://github.com/fernandopereira-tech/pokedex-typescript-lite.git

-> Entre na pasta:
cd pokedex-typescript-lite

-> Instale as dependências:
npm install

## Como Executar

-> Execute o projeto:

npm run dev

---

## Funcionalidades

- Buscar Pokémon por nome
- Buscar Pokémon por ID
- Consumir dados da PokeAPI
- Mapear resposta JSON para objeto simplificado
- Adicionar Pokémon ao catálogo
- Impedir registros duplicados
- Listar catálogo
- Remover Pokémon por ID
- Tratar erros de busca

## Estrutura dos Arquivos

### src/main.ts

Ponto de entrada da aplicação.

### src/types.ts

Interfaces e tipagens utilizadas no projeto.

### src/pokeApi.ts

Responsável pela integração com a PokeAPI.

### src/catalogo.ts

Implementa a classe CatalogoPokemon e suas regras de negócio.

### package.json

Dependências e scripts do projeto.

### tsconfig.json

Configurações do compilador TypeScript.

### pc_box.json

Arquivo JSON inicializado com array vazio.

---

##  Conceitos Aplicados e Justificativas

### 1. Ausência de Código Monolítico
O sistema foi totalmente fatiado em módulos com responsabilidades únicas e bem definidas, garantindo a manutenção e separação clara de conceitos:
*   `src/types.ts`: Centraliza exclusivamente as interfaces de tipagem dos dados.
*   `src/pokeApi.ts`: Módulo de infraestrutura responsável única e exclusivamente pela integração e consumo da API externa via fetch nativo.
*   `src/catalogo.ts`: Centraliza a regra de negócio do catálogo utilizando POO.
*   `src/main.ts`: Ponto de entrada que orquestra a execução e executa o fluxo de testes.

### 2. Programação Orientada a Objetos (POO) e Encapsulamento
A classe `CatalogoPokemon` foi implementada para centralizar as regras de gerenciamento. O array de dados foi definido como `private pokemons` para garantir o **encapsulamento**. Isso impede que o estado da lista seja manipulado de forma inadequada por fora da classe, obrigando o uso estrito dos métodos públicos (`adicionar`, `listar`, `remover`).

### 3. Métodos de Iteração e Manipulação de Array (ES6+)
A manipulação da lista interna evitou estruturas de repetição legadas (como loops `for` tradicionais) e adotou métodos modernos da API de Arrays do JavaScript, cumprindo com folga a variedade exigida:
*   `.map()`: Utilizado para transformar a estrutura complexa de tipos da PokeAPI em um array limpo de strings.
*   `.some()`: Utilizado para verificar a existência do ID de forma rápida, impedindo duplicidade no catálogo.
*   `.forEach()`: Utilizado para iterar sobre a coleção e exibir as informações formatadas no console.
*   `.findIndex()` e `.splice()`: Utilizados em conjunto para localizar a posição exata do Pokémon por ID e removê-lo de forma eficiente.

### 4. Tratamento de Erros e Resiliência
A comunicação externa implementa blocos `try/catch` associados à validação do código de status HTTP da resposta. Caso a API retorne um erro `404` (Pokémon não encontrado), a aplicação captura e trata a exceção adequadamente, exibindo uma mensagem amigável no console (`[ERRO] Pokémon não encontrado.`) sem interromper abruptamente a execução do sistema.

---

## Exemplos de Execução

### Catálogo vazio

```text
[AVISO] O catálogo está vazio.
```

### Busca e inserção

```text
[OK] pikachu adicionado ao catálogo com sucesso!
[OK] bulbasaur adicionado ao catálogo com sucesso!
```

### Listagem

```text
ID: 25 | Nome: pikachu
Tipos: electric
Altura: 4 | Peso: 60

ID: 1 | Nome: bulbasaur
Tipos: grass, poison
Altura: 7 | Peso: 69
```

### Duplicidade

```text
[AVISO] pikachu já está no catálogo.
```

### Pokémon inexistente

```text
[ERRO] Pokémon não encontrado.
```

### Remoção

```text
[OK] Pokémon removido do catálogo.
```

### Remoção inválida

```text
[ERRO] Pokémon com ID 999 não encontrado no catálogo.
```