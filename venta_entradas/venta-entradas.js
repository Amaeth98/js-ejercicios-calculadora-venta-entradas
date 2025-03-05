document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", calcularPrecioEntrada);
});

function calcularPrecioEntrada() {
    let edadInput = document.getElementById("edad").value.trim();
    let resultado = document.getElementById("resultado");

    resultado.textContent = ""; 


    if (edadInput === "") {
        resultado.textContent = "Error: Por favor, introduce una edad.";
        resultado.style.color = "red";
        return;
    }

  
    let edad = Number(edadInput);
    if (isNaN(edad) || edad <= 0) {
        resultado.textContent = "Error: Ingresa un número válido mayor que 0.";
        resultado.style.color = "red";
        return;
    }


    let precio;
    if (edad < 12) {
        precio = "Gratis";
    } else if (edad >= 12 && edad <= 18) {
        precio = "5€ (precio reducido)";
    } else {
        precio = "7€ (precio completo)";
    }

    resultado.textContent = `El precio de la entrada es: ${precio}`;
    resultado.style.color = "black";
}
