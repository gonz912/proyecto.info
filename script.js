// Fase 4: quiz interactivo sobre el Beato Carlos Navarro Miquel.
// El programa cuenta las respuestas correctas y muestra una devolución.

const formularioQuiz = document.getElementById("form-quiz");
const resultadoQuiz = document.getElementById("resultado-quiz");
const detalleQuiz = document.getElementById("detalle-quiz");

const respuestasCorrectas = {
    p1: "a",
    p2: "b",
    p3: "a",
    p4: "b",
    p5: "c",
    p6: "a",
    p7: "b",
    p8: "c"
};

const explicaciones = {
    p1: "Nació el 11 de febrero de 1911.",
    p2: "Nació en Torrente, Valencia, España.",
    p3: "Perteneció a las Escuelas Pías y fue sacerdote escolapio.",
    p4: "En 1927 sintió una llamada de la Virgen y decidió llevar también una vida religiosa.",
    p5: "Recibió el hábito escolapio y realizó su primera profesión religiosa el 5 de agosto de 1929.",
    p6: "Fue ordenado sacerdote el 4 de agosto de 1935.",
    p7: "Ejerció el ministerio calasancio en Albacete entre 1935 y 1936.",
    p8: "Antes de morir, él y sus compañeros gritaron: «¡Viva Cristo Rey!»."
};

if (formularioQuiz) {
    formularioQuiz.addEventListener("submit", function (evento) {
        evento.preventDefault();

        let puntaje = 0;
        let devoluciones = "";

        for (let numero = 1; numero <= 8; numero++) {
            const nombre = "p" + numero;
            const seleccionada = formularioQuiz.querySelector('input[name="' + nombre + '"]:checked');

            if (seleccionada && seleccionada.value === respuestasCorrectas[nombre]) {
                puntaje++;
                devoluciones += '<p class="respuesta-correcta">Pregunta ' + numero + ': ¡Correcto! ' + explicaciones[nombre] + '</p>';
            } else {
                devoluciones += '<p class="respuesta-incorrecta">Pregunta ' + numero + ': Revisá esta respuesta. ' + explicaciones[nombre] + '</p>';
            }
        }

        resultadoQuiz.textContent = "Tu resultado: " + puntaje + " de 8 respuestas correctas.";
        detalleQuiz.innerHTML = devoluciones;
        resultadoQuiz.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    formularioQuiz.addEventListener("reset", function () {
        resultadoQuiz.textContent = "";
        detalleQuiz.innerHTML = "";
    });
}
