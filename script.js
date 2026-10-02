const botao = document.querySelector("button");
botao.addEventListener("click", function() {
    document.querySelector("#mensagem").textContent = "Muito prazer! Quero usar esta página como um diário pessoal de memórias! E a primeira delas será do natal deste ano (2026)/ verão 2027."
    botao.style.backgroundColor = "aquamarine";
    botao.textContent = "Achou!"
});   