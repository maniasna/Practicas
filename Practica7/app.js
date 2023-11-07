 document.addEventListener("DOMContentLoaded", function () {
            const formulario = document.querySelector("#formulario");
            const input = document.querySelector("#input");
            const listaTareas = document.querySelector("#lista-tareas");
            const template = document.querySelector("#temp");

            formulario.addEventListener("submit", evento => {
                evento.preventDefault();

                const tarea = input.value.trim();
                if (tarea == "") {
                    return;
                }

                const nuevaTarea = template.content.cloneNode(true);
                nuevaTarea.querySelector("p").textContent = tarea;
                listaTareas.appendChild(nuevaTarea);

                input.value = "";

                nuevaTarea.querySelector(".fa-times-circle").addEventListener("click", () => {
                    listaTareas.removeChild(nuevaTarea);
                });
                nuevaTarea.querySelector(".fa-check-circle").addEventListener("click", () => {
                    nuevaTarea.classList.toggle("alert-success");
                });
            });
        });