
const formulario = document.getElementById("form-tarefa");
const input = document.getElementById("nova-tarefa");
const lista = document.querySelector(".lista-tarefas");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const tarefa = document.createElement("li");
    tarefa.classList.add("tarefa");

    const nome = document.createElement("span");
    nome.textContent = input.value;

    const status = document.createElement("span");
    status.classList.add("status", "pendente");
    status.textContent = "Pendente";

    tarefa.appendChild(nome);
    tarefa.appendChild(status);

    lista.appendChild(tarefa);

    input.value = "";
});

// Alternar entre tarefa pendente e concluída
lista.addEventListener("click", function(evento) {
    const tarefa = evento.target.closest(".tarefa");

    if (!tarefa) {
        return;
    }

    const status = tarefa.querySelector(".status");

    if (status.classList.contains("pendente")) {
        status.classList.replace("pendente", "concluida");
        status.textContent = "Concluída";
    } else {
        status.classList.replace("concluida", "pendente");
        status.textContent = "Pendente";
    }
});
