const formulario = document.querySelector("#formulario-cadastro");
const campoNome = document.querySelector("#nome");
const mensagemConfirmacao = document.querySelector("#mensagem-confirmacao");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    mensagemConfirmacao.textContent = `Cadastro demonstrativo concluído, ${campoNome.value.trim()}! Seus dados não foram enviados nem armazenados.`;
    mensagemConfirmacao.hidden = false;
});

formulario.addEventListener("input", () => {
    mensagemConfirmacao.hidden = true;
    mensagemConfirmacao.textContent = "";
});
