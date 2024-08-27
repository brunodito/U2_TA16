document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');

    function boton() {
        const text = document.getElementById('text');
        const inner = btn.innerText;

        if (inner === "Ocultar") {
            text.style.visibility = "hidden";
            btn.innerText = "Mostrar";
        } else {
            text.style.visibility = "visible";
            btn.innerText = "Ocultar";
        }
    }

    btn.addEventListener('click', boton);
});