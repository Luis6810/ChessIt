// alert("This is the server");

// let a = require("blancas.js");
// let b = require("negras.js");


// let main = new Main();
// main.beginGame();

estados = {
    inicio: 0,
    turnoBlancas: 1,
    turnoNegras: 2,
    movimientoBlancas: 3,
};

estado = estados.inicio;

movimientosBlancas = [];

blancas = new Blancas()
negras = new Blancas();

function beginGame() {
    alert("Game is beginning");

    this.blancas.setPieces();
    this.negras.setPieces();

    let casillas = document.getElementById("tablero").children;
    Object.entries(casillas).forEach((casilla) => {
        casilla[1].addEventListener("click", clickCasillas);
    });

    estado = estados.turnoBlancas;

}

function clickCasillas(casilla) {
    // console.log(casilla.srcElement.style.backgroundImage !== "");
    if (casilla.srcElement.style.backgroundImage !== "") { //Es una pieza
        // switch (estado) {
        //     case estados.turnoBlancas: break;
        //     default 0;
        // }

        if (estado === estados.turnoBlancas) {
            estado = estados.movimientoBlancas;
            siguientesMovimientos = this.blancas.obtenerMovimientos("Peon", casilla.srcElement.id);
            this.blancas.posiblesMovimientos(siguientesMovimientos);

            // console.log(movimientos);
        }
        else if (estado === estados.movimientoBlancas) {
            if (movimientosBlancas.find(casilla.srcElement.id)) {
                // move(casilla.srcElement.id,casilla.srcElement.style.backgroundImage);
            }
            else {
                let siguientesMovimientos = this.blancas.obtenerMovimientos("Peon", casilla.srcElement.id);
                this.blancas.posiblesMovimientos(siguientesMovimientos);
            }
        }
    }

}
