const botao = document.querySelector("button");
botao.addEventListener("click", function() {
    document.querySelector("#mensagem").textContent = "Muito prazer! Quero esse site com uma estética Hello Kitty, summer, cute and shine. Quero usá-lo como um diário pessoal de memórias! E a primeira delas será do natal deste ano (2026)/ verão 2027."
    botao.style.backgroundColor = "aquamarine";
    botao.textContent = "Achou!"
});   