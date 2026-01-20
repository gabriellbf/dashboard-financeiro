# 💰 Dashboard Financeiro

> Um gerenciador de despesas simples, eficiente e focado em JavaScript Puro (Vanilla JS).

![Preview do Projeto](./dashboard.gif) 

### [➡️ Visite a demonstração](https://gabriellbf.github.io/dashboard-financeiro/))

## 💻 Sobre o Projeto

Este projeto foi desenvolvido como parte de um estudo aprofundado para **revisitar e consolidar os fundamentos do desenvolvimento web** (HTML, CSS e JavaScript) antes de iniciar novos desafios profissionais.

O objetivo foi criar uma aplicação funcional de controle financeiro que não apenas manipulasse a interface (DOM), mas também gerenciasse estado e persistência de dados sem o uso de bibliotecas externas ou frameworks.

## ✨ Funcionalidades

- [x] **Adicionar Transações:** Registro de entradas e saídas com nome, valor e data.
- [x] **Cálculo Automático:** Atualização dinâmica do saldo total, total de receitas e total de despesas.
- [x] **Persistência de Dados:** Uso do **LocalStorage** para que os dados não se percam ao atualizar a página.
- [x] **Exclusão de Itens:** Remoção de transações com atualização imediata dos cálculos e do armazenamento.
- [x] **Ordenação Inteligente:** As transações são ordenadas automaticamente por data (da mais recente para a mais antiga).
- [x] **Interface Responsiva:** Layout adaptável e alinhado.

## 🛠 Tecnologias e Conceitos Aplicados

O projeto foi construído utilizando apenas **tecnologias nativas**, focando na compreensão profunda de como o navegador funciona.

- **HTML5:** Estruturação semântica.
- **CSS3:**
  - **CSS Grid:** Utilizado para o alinhamento preciso das colunas (Nome, Valor, Data e Ações) dentro dos cards.
  - **Variáveis e Responsividade.**
- **JavaScript (ES6+):**
  - **Manipulação de DOM:** Criação e renderização dinâmica de elementos HTML.
  - **Gestão de Estado:** Lógica de "Render Engine" onde a interface reage às mudanças no array de dados.
  - **LocalStorage:** Implementação de um CRUD básico persistente.
  - **Array Methods:** Uso intensivo de `filter`, `sort`, `map` e `forEach` para manipulação de dados.
  - **Date Manipulation:** Tratamento e formatação de datas para o padrão brasileiro (`pt-BR`).


