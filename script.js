const form = document.getElementById("form");
const inputNome = document.getElementById("nome");
const inputValor = document.getElementById("valor");
const inputData = document.getElementById("data");
const selectTipo = document.getElementById("tipo");
const expensesDisplay = document.getElementById("expenses-display");
const totalDisplay = document.getElementById("total-display");
const listaTransacoes = document.getElementById("lista-transacoes");

// Array para conter as transações
const transactions = [];

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

  addTransactionToDom(transaction);
  updateValues();

  //Limpa formulário
  form.reset();
}

//Função para adicionar os itens digitados ao DOM
function addTransactionToDom(transaction) {
  const element = document.createElement("div");
  element.classList.add("item-transacao");
  element.innerHTML = `
  <h4>${transaction.nome}</h4>
  <p>${transaction.valor.toFixed(2)}</p>
  <p>${transaction.data}</p>
  `;
  listaTransacoes.appendChild(element);
}

function updateValues() {
  let entryValues = 0;
  let exitValues = 0;
  //Percorre todas as transações e identifica se é entrada ou saída
  transactions.forEach((currentTransaction) => {
    if (currentTransaction.tipo === "entrada") {
      entryValues = entryValues + currentTransaction.valor;
    } else {
      exitValues = exitValues + currentTransaction.valor;
    }
  });

  const totalbalance = entryValues - exitValues;

  expensesDisplay.innerText = `R$ ${exitValues.toFixed(2)}`;
  totalDisplay.innerText = `R$ ${totalbalance.toFixed(2)}`;
}
