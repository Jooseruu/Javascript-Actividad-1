let numeros = []; // La función "agregarNumero()" guarda los números en el array "numeros"

function agregarNumero() {
    let numero = document.getElementById('numero').value; //getElementById() es un método en JavaScript que se utiliza para seleccionar un elemento HTML que tenga un atributo id específico.
    if (numero !== '') {
        numeros.push(Number(numero));//El método push() modifica el array original y devuelve la nueva longitud del array.
        document.getElementById('numero').value = '';
    }
}

function sumarNumeros() { //El botón "Sumar números" ejecuta la función "sumarNumeros()" que suma los números del array
    let suma = numeros.reduce((a, b) => a + b, 0); //El método reduce() toma dos argumentos: la función reductora y un valor inicial opcional
    document.getElementById('resultado').innerHTML = 'La suma es: ' + suma; 
}
