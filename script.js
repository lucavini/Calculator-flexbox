//insere os números e operadores digitados no input
const buttons = Array.from(document.querySelectorAll(".btn"));
buttons.forEach((button) => {
  button.addEventListener("click", (btn)=>{
    const inputArea = document.querySelector(".calculator-input input");
    let btnValue = btn.target.getAttribute("value");
  
    inputArea.setAttribute("value", inputArea.value + btnValue);
  });
});

//Realiza o cálculo
function operation() {
  const inputArea = document.querySelector(".calculator-input input");

  try {
    const result = eval(inputArea.value);
    inputArea.setAttribute("value", result);
  } catch (error) {
    inputArea.setAttribute("value", "invalid");
  }
}
const equalBtn = document.querySelector(".btn-equal");
equalBtn.addEventListener("click", operation);

//limpa o input
const cleanInput = document
  .querySelector(".btn-clean")
  .addEventListener("click", () => {
    const inputArea = document.querySelector(".calculator-input input");
    inputArea.setAttribute("value", "");
});

//limpa um caractere
const deleteCharacter = document
  .querySelector(".btn-delete")
  .addEventListener("click", () => {
    const inputArea = document.querySelector(".calculator-input input");

    const newText = inputArea.value
      .split("", inputArea.value.length - 1)
      .join("");

    inputArea.setAttribute("value", newText);
});
