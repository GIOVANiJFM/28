window.onload = function() {
    alert("Bem-vindo ao Quiz sobre Java e CSS!");
};

document.getElementById('color-btn').addEventListener('click', function() {
    const colors = ['#f9f9f9', '#ffebcd', '#d3f9f3', '#ffcccc'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let resposta1 = document.querySelector('input[name="q1"]:checked');
    let resposta2 = document.querySelector('input[name="q2"]:checked');
    let resultado = document.getElementById("resultado");

    if (!resposta1 || !resposta2) {
        alert("Por favor, responda todas as perguntas.");
        return;
    }

    let acertos = 0;

    if (resposta1.value === "resposta1") acertos++;
    if (resposta2.value === "resposta1") acertos++;

    if (acertos === 2) {
        resultado.innerHTML = "<p>Você acertou todas as perguntas! Parabéns!</p>";
        alert("Parabéns! Você acertou todas as perguntas.");
    } else {
        resultado.innerHTML = `<p>Você acertou ${acertos} de 2 perguntas.</p>`;
    }
});
