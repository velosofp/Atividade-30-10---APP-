const formulario = document.querySelector("#formulario-agendamento");
const campoEspecialidade = document.querySelector("#especialidade");
const campoData = document.querySelector("#data");
const campoHorario = document.querySelector("#horario");
const resumo = document.querySelector("#resumo-agendamento");

function dataLocalISO(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

campoData.min = dataLocalISO(new Date());

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }

    const dataSelecionada = new Date(`${campoData.value}T00:00:00`);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    if (dataSelecionada < hoje) {
        campoData.setCustomValidity("Escolha uma data de hoje em diante.");
        formulario.reportValidity();
        return;
    }

    campoData.setCustomValidity("");

    document.querySelector("#resumo-especialidade").textContent = campoEspecialidade.value;
    document.querySelector("#resumo-data").textContent = dataSelecionada.toLocaleDateString("pt-BR");
    document.querySelector("#resumo-horario").textContent = campoHorario.value;
    resumo.hidden = false;
});

campoData.addEventListener("input", () => {
    campoData.setCustomValidity("");
});

formulario.addEventListener("input", () => {
    resumo.hidden = true;
});

formulario.addEventListener("change", () => {
    resumo.hidden = true;
});
