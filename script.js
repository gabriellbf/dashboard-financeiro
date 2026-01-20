const form = document.getElementById("form");
const inputNome = document.getElementById("nome");
const inputValor = document.getElementById("valor");
const inputData = document.getElementById("data");
const selectTipo = document.getElementById("tipo");
const expensesDisplay = document.getElementById("expenses-display");
const totalDisplay = document.getElementById("total-display");
const listaTransacoes = document.getElementById("lista-transacoes");

let transactions = [];

// Detecta quando o usuário clica no botão
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  //Captura os valores dos elementos
  const transaction = {
    id: Date.now(),
    nome: inputNome.value,
    valor: Number(inputValor.value),
    data: inputData.value,
    tipo: selectTipo.value,
  };
  transactions.push(transaction);
  console.log(transactions);

  renderTransactions();
  updateValues();
  saveValues();

  //Limpa formulário
  form.reset();
}

//Função para adicionar os itens digitados ao DOM
function addTransactionToDom(transaction) {
  const element = document.createElement("div");
  element.classList.add("item-transacao");

  //Caso seja uma entrada, acrescenta a classe que modificará a cor
  if (transaction.tipo === "entrada") element.classList.add("entryColor");

  element.innerHTML = `
  <h4 class="info-nome">${transaction.nome}</h4>
  <p  class="info-valor">R$${transaction.valor.toFixed(2)}</p>
  <p class="info-data">${formatDate(transaction.data)}</p>
  <button class='delete'>X</button>
  `;
  listaTransacoes.appendChild(element);

  //Remove a transação ao clicar no botão, visualmente e do array/localStorage
  const deleteBtn = element.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    transactions = transactions.filter((item) => item.id !== transaction.id);
    renderTransactions();
    updateValues();
    saveValues();
  });
}

//Atualiza os valores de despesas e total do usuário
function updateValues() {
  let entryValues = 0;
  let exitValues = 0;
  //Percorre todas as transações e identifica se é entrada ou saída
  transactions.forEach((currentTransaction) => {
    if (currentTransaction.tipo === "entrada") {
      entryValues += currentTransaction.valor;
    } else {
      exitValues += currentTransaction.valor;
    }
  });

  const totalbalance = entryValues - exitValues;

  expensesDisplay.innerText = `R$${exitValues.toFixed(2)}`;
  totalDisplay.innerText = `R$${totalbalance.toFixed(2)}`;
}

function saveValues() {
  //Cria uma entrada e converte a array em string
  localStorage.setItem("transaction", JSON.stringify(transactions));
}

function loadValues() {
  //Lê as entradas e traz os dados como String
  const data = localStorage.getItem("transaction");

  if (!data) return; // sai da função caso não tenha nada salvo

  //Converte de string para array novamente
  const savedTransactions = JSON.parse(data);

  //Array recebe todos os dados de uma vez e redesenha com a função
  transactions = savedTransactions;
  renderTransactions();
  updateValues(); //Recalcula os valores totais
}

//Carrega a função loadValues ao iniciar o site
window.addEventListener("load", loadValues);

//Conversão para data local
function formatDate(dateString) {
  const [ano, mes, dia] = dateString.split("-");
  return `${dia}/${mes}/${ano}`;
}

//Função para redesenhar as transações e ordenar por data
function renderTransactions() {
  listaTransacoes.innerHTML = "";

  transactions.sort((a, b) => new Date(b.data) - new Date(a.data));

  transactions.forEach((transaction) => {
    addTransactionToDom(transaction);
  });
}
