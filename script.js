const form = document.getElementById("form");
const inputNome = document.getElementById("nome");
const inputValor = document.getElementById("valor");
const inputData = document.getElementById("data");
const selectTipo = document.getElementById("tipo");

const expensesDisplay = document.getElementById("expenses-display");
const totalDisplay = document.getElementById("total-display");
const listaTransacoes = document.getElementById("lista-transacoes");

// Detecta quando o usuário clica no botão
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  console.log("deu certo!");
}
