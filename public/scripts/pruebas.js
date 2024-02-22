// class Main{
//     static estados = {
//         inicio: 0,
//         turnoBlancas: 1,
//         turnoNegras: 2,
//         movimientoBlancas: 3,
//     };

//     // estado = this.estados.inicio
//     movimientosBlancas = [];

//     beginGame() {
//         console.log(this.estados);
//         // console.log(estado);
//     }

// }

// let a = new Main;
// console.log(Main.estados);
// a.beginGame();

// var arr = ['A','B','C','D'];

// var len = arr.length;
// for(var i = 0; i<len; i++){
//     // console.log((i + 2 % len + len) % len);
//     let val = arr[(i + 2 % len + len) % len];
//     // array.forEach(element => {
        
//     // });
//     console.log(val);
// }

function obtenerMovimientosAlfil(posicion) {
    const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numeros = ['1', '2', '3', '4', '5', '6', '7', '8'];

    const fila = letras.indexOf(posicion[0]);
    const columna = numeros.indexOf(posicion[1]);

    const movimientos = [];

    // Movimientos en diagonal hacia arriba a la derecha y hacia abajo a la izquierda
    for (let i = 1; fila + i < 8 && columna + i < 8; i++) {
            
    }

    for (let i = 1; fila - i >= 0 && columna - i >= 0; i++) {
        movimientos.push(letras[fila - i] + numeros[columna - i]);
    }

    // Movimientos en diagonal hacia arriba a la derecha
    for (let i = 1; fila + i < 8 && columna + i < 8; i++) {
        movimientos.push(letras[fila + i] + numeros[columna + i]);
    }

    // Movimientos en diagonal hacia arriba a la izquierda
    for (let i = 1; fila - i >= 0 && columna + i < 8; i++) {
        movimientos.push(letras[fila - i] + numeros[columna + i]);
    }


    return movimientos;
}

// Ejemplo de uso:
console.log(obtenerMovimientosAlfil("c4")); // Devuelve los movimientos posibles para un alfil en c4
