let numeros = []; // La función "agregarNumero()" guarda los números en el array "numeros"

function agregarNumero() {
    let numero = document.getElementById('numero').value;
    if (numero !== '') {
        numeros.push(Number(numero));
        document.getElementById('numero').value = '';
    }
}

function sumarNumeros() { //El botón "Sumar números" ejecuta la función "sumarNumeros()" que suma los números del array
    let suma = numeros.reduce((a, b) => a + b, 0);
    document.getElementById('resultado').innerHTML = 'La suma es: ' + suma;
}
