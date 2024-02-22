class Blancas {
    movs = new Movimientos(jugadores.blancas);
    setPieces() {
        let locationsBlanco = {
            "Torre": ["a1", "h1"],
            "Caballo": ["b1", "g1"],
            "Alfil": ["c1", "f1"],
            "Rey": ["e1",],
            "Reina": ["d1"],
            "Peon": ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"]
        };

        let imagesBlanco = {
            "Torre": "White R.ico",
            "Caballo": "White N.ico",
            "Alfil": "White B.ico",
            "Rey": "White K.ico",
            "Reina": "White Q.ico",
            "Peon": "White P.ico"
        };

        Object.entries(locationsBlanco).forEach(pieza => {
            console.log(pieza);
            pieza[1].forEach(ubicacion => {
                let square = document.getElementById(ubicacion);
                square.style.backgroundImage = 'url("' + 'img/' + imagesBlanco[pieza[0]] + '")';
                square.style.backgroundSize = "contain";
                square.setAttribute("data-pieza", pieza[0]);
                square.setAttribute("data-jugador", jugadores.blancas);

            });
        });


    }

    obtenerMovimientos(tipo, casilla) {
        let movimientos = [];
        const columna = columnas.indexOf(casilla[0]);
        const fila = filas.indexOf(casilla[1]);


        switch (tipo) {
            case "Peon": movimientos = this.movs.movimientosPeon(columna, fila); break;
            case "Torre": movimientos = this.movs.movimientosTorre(columna, fila); break;
            case "Alfil": movimientos = this.movs.movimientoAlfil(columna, fila); break;
            case "Rey": movimientos = this.movs.movimientosRey(columna, fila); break;
            case "Caballo": movimientos = this.movs.movimientosCaballo(columna, fila); break;
            case "Reina": movimientos = this.movs.movimientosReina(columna, fila); break;
            default: movimientos = [];
        }
        console.log(movimientos);
        return movimientos;

    }

    posiblesMovimientos(siguientesMovimientos) {
        console.log(movimientosBlancas)
        movimientosBlancas.forEach((mov) => {
            let casilla = document.getElementById(mov);
            casilla.style.backgroundColor = "";
        });

        siguientesMovimientos.forEach((movimiento) => {
            let casilla = document.getElementById(movimiento);
            casilla.style.backgroundColor = "rgb(0, 204, 102)";
            
        });

        movimientosBlancas = siguientesMovimientos;
    }


    turnoBlancas(casilla) {
        // alert("Alerta");
        if (casilla.srcElement.style.backgroundImage !== "" && casilla.srcElement.getAttribute("data-jugador") == jugadores.blancas) { //Es una pieza

            let siguientesMovimientos = this.obtenerMovimientos(casilla.srcElement.getAttribute("data-pieza"), casilla.srcElement.id);
            this.posiblesMovimientos(siguientesMovimientos);
            selectedPiece = casilla.srcElement.id;
            estadoActual = estados.movimientoBlancas;
        }

    }

    movimientoBlancas(casilla) {

        if (movimientosBlancas.includes(casilla.srcElement.id)) { //Movimiento válido
            move(selectedPiece, casilla.srcElement.id, casilla.srcElement.style.backgroundImage);
            estadoActual = estados.turnoNegras;
        }

        else if (casilla.srcElement.style.backgroundImage !== "" && casilla.srcElement.getAttribute("data-jugador") == jugadores.blancas) { //Es una pieza
            let siguientesMovimientos = this.obtenerMovimientos(casilla.srcElement.getAttribute("data-pieza"), casilla.srcElement.id);
            this.posiblesMovimientos(siguientesMovimientos);
            selectedPiece = casilla.srcElement.id;
        }
    }




}

class Negras {
    movs = new Movimientos(jugadores.negras);

    setPieces() {
        let locationsNegro = {
            "Torre": ["a8", "h8"],
            "Caballo": ["b8", "g8"],
            "Alfil": ["c8", "f8"],
            "Rey": ["e8",],
            "Reina": ["d8"],
            "Peon": ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"]
        };

        let imagesNegro = {
            "Torre": "Black R.ico",
            "Caballo": "Black N.ico",
            "Alfil": "Black B.ico",
            "Rey": "Black K.ico",
            "Reina": "Black Q.ico",
            "Peon": "Black P.ico"
        };


        Object.entries(locationsNegro).forEach(pieza => {
            pieza[1].forEach(ubicacion => {
                // console.log(images[pieza[0]]);
                let square = document.getElementById(ubicacion);
                square.style.backgroundImage = 'url("' + 'img/' + imagesNegro[pieza[0]] + '")';
                // square.style.backgroundImage = 'url("' + "Black R.ico" + '")';

                square.style.backgroundSize = "contain";
                square.setAttribute("data-pieza", pieza[0]);
                square.setAttribute("data-jugador", jugadores.negras);

            });
        });

    }

    turnoNegras(casilla) {
        if (casilla.srcElement.style.backgroundImage !== "" && casilla.srcElement.getAttribute("data-jugador") == jugadores.negras) { //Es una pieza

            let siguientesMovimientos = this.obtenerMovimientos(casilla.srcElement.getAttribute("data-pieza"), casilla.srcElement.id);
            this.posiblesMovimientos(siguientesMovimientos);
            selectedPiece = casilla.srcElement.id;
            estadoActual = estados.movimientoNegras;
        }

    }

    movimientoNegras(casilla) {

        if (movimientosBlancas.includes(casilla.srcElement.id)) { //Movimiento válido
            move(selectedPiece, casilla.srcElement.id, casilla.srcElement.style.backgroundImage);
            estadoActual = estados.turnoBlancas;
        }

        else if (casilla.srcElement.style.backgroundImage !== "" && casilla.srcElement.getAttribute("data-jugador") == jugadores.negras) { //Es una pieza
            let siguientesMovimientos = this.obtenerMovimientos(casilla.srcElement.getAttribute("data-pieza"), casilla.srcElement.id);
            this.posiblesMovimientos(siguientesMovimientos);
            selectedPiece = casilla.srcElement.id;
        }
    }


    obtenerMovimientos(tipo, casilla) {
        let movimientos = [];
        const columna = columnas.indexOf(casilla[0]);
        const fila = filas.indexOf(casilla[1]);


        switch (tipo) {
            case "Peon": movimientos = this.movs.movimientosPeon(columna, fila); break;
            case "Torre": movimientos = this.movs.movimientosTorre(columna, fila); break;
            case "Alfil": movimientos = this.movs.movimientoAlfil(columna, fila); break;
            case "Rey": movimientos = this.movs.movimientosRey(columna, fila); break;
            case "Caballo": movimientos = this.movs.movimientosCaballo(columna, fila); break;
            case "Reina": movimientos = this.movs.movimientosReina(columna, fila); break;
            default: movimientos = [];
        }
        console.log(movimientos);
        return movimientos;

    }

    posiblesMovimientos(siguientesMovimientos) {
        movimientosBlancas.forEach((mov) => {
            let casilla = document.getElementById(mov);
            casilla.style.backgroundColor = "";
        });

        siguientesMovimientos.forEach((movimiento) => {
            let casilla = document.getElementById(movimiento);
            casilla.style.backgroundColor = "rgb(0, 204, 102)";
        });

        movimientosBlancas = siguientesMovimientos;
    }

}

class Movimientos {
    jugador;
    rival;

    constructor(jugador) {
        this.jugador = jugador;
        this.rival = jugador == jugadores.blancas ? jugadores.negras : jugadores.blancas;
    }


    movimientosCaballo(columna, fila) {
        let movimientosCaballo = [];
        let casilla, mov;
        for (let i = -2; i < 3; i++) {
            if (i === 0) {
                i++;
            }
            for (let j = -2; j < 3; j++) {
                if (j === 0) {
                    continue;
                }
                if (Math.abs(i) != Math.abs(j)) {
                    mov = columnas[columna + i] + filas[fila + j]
                    casilla = document.getElementById(mov);
                    if (this.esCasillaValida(mov)) {
                        if (casilla.style.backgroundImage !== "") {
                            if (casilla.getAttribute("data-jugador") == this.rival) {
                                movimientosCaballo.push(columnas[columna + i] + filas[fila + j]);
                            }
                        }
                        else {
                            movimientosCaballo.push(columnas[columna + i] + filas[fila + j]);
                        }

                    }

                }

            }
        }
        return movimientosCaballo;
    }

    movimientosTorre(columna, fila) {
        let movimientosTorre = [];
        let incrementosTorre = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
        let mov, casilla;

        incrementosTorre.forEach((element) => {
            for (let i = 1; filas.includes(filas[fila + (i * element[1])]) && columnas.includes(columnas[columna + (i * element[0])]); i++) {
                mov = columnas[columna + (i * element[0])] + filas[fila + (i * element[1])];
                casilla = document.getElementById(mov);

                if (casilla.style.backgroundImage !== "") {
                    if (casilla.getAttribute("data-jugador") == this.jugador) {
                        break;
                    }
                    else {
                        movimientosTorre.push(mov);
                        break
                    }

                }

                movimientosTorre.push(mov);
            }
        });



        return movimientosTorre;
    }

    movimientosPeon(columna, fila) {
        // casilla = document.getElementById(columnas[columna] + (filas[fila + 1]));
        let casilla, mov1, mov2, mov;
        let movimientos = [];
        let obstruccion = false;
        // let incremento = 1;
        let incremento = this.jugador == jugadores.blancas ? 1 : -1;

        mov = columnas[columna] + (filas[fila + (1 * incremento)]);
        // if(this.esMovimientoValido(mov)){

        // }
        casilla = document.getElementById(mov);
        if (this.esCasillaValida(mov)) {
            if (casilla.style.backgroundImage === "") {
                movimientos.push(mov);
            }
            else {
                obstruccion = true;
    
            }
        }
        

        if ((filas[fila] === '2' || filas[fila] === '7') && !obstruccion) {
            mov = columnas[columna] + (filas[fila + (2 * incremento)]);
            casilla = document.getElementById(mov);
            if (this.esCasillaValida(mov)) {
                if (casilla.style.backgroundImage === "") {
                    movimientos.push(mov);
    
                }
            }
        }

        mov = columnas[columna + (1 * incremento)] + (filas[fila + (1 * incremento)]);
        casilla = document.getElementById(mov);
        if (this.esCasillaValida(mov)) {
            if (casilla.style.backgroundImage !== "" && casilla.getAttribute("data-jugador") == this.rival) {
                movimientos.push(mov);
            }
        }
        // console.log(casilla.getAttribute("data-jugador"));


        mov = columnas[columna - (1 * incremento)] + (filas[fila + (1 * incremento)]);
        if (this.esCasillaValida(mov)) {
            casilla = document.getElementById(mov);
            if (casilla.style.backgroundImage !== "" && casilla.getAttribute("data-jugador") == this.rival) {
                movimientos.push(mov);
            }
        }


        return movimientos;

    }

    movimientoAlfil(columna, fila) {
        let movimientos = [];

        let incrementos = [
            [-1, -1],
            [-1, 1],
            [1, 1],
            [1, -1]
        ]
        incrementos.forEach(element => {
            let mov;
            let casilla;
            for (let i = 1; filas.includes(filas[fila + (i * element[0])]) && columnas.includes(columnas[columna + (i * element[1])]); i++) {
                mov = columnas[columna + (i * element[1])] + filas[fila + (i * element[0])];
                casilla = document.getElementById(mov);
                if (casilla.style.backgroundImage !== "") {
                    if (casilla.getAttribute("data-jugador") == this.jugador) {
                        break;

                    }
                    else {
                        movimientos.push(mov);
                        break;

                    }
                }
                movimientos.push(mov);
            }
        });


        return movimientos;
    }


    movimientosReina(columna, fila) {
        let movimientosReina = [];
        let movimientosAlfil = this.movimientoAlfil(columna, fila);
        let movimientosTorre = this.movimientosTorre(columna, fila);

        movimientosReina = movimientosTorre.concat(movimientosAlfil);

        return movimientosReina;
    }

    movimientosRey(columna, fila) {
        let movimientosRey = [];
        let casilla, mov;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                console.log(i.toString() + j.toString());
                mov = columnas[columna + i] + filas[fila + j]
                casilla = document.getElementById(mov);
                if (this.esCasillaValida(mov)) {
                    if (casilla.style.backgroundImage !== "") {
                        if (casilla.getAttribute("data-jugador") == this.rival) {
                            movimientosRey.push(mov);
                        }
                    }
                    else {
                        movimientosRey.push(mov);
                    }

                }
                // if (columnas.includes(columnas[columna + i]) && filas.includes(filas[fila + j])) {
                //     movimientosRey.push(columnas[columna + i] + filas[fila + j]);
                // }
            }

        }

        return movimientosRey;

    }

    esCasillaValida(casilla) {
        let columna = columnas.indexOf(casilla[0]);
        let fila = filas.indexOf(casilla[1]);
        return filas.includes(filas[fila]) && columnas.includes(columnas[columna]);

    }

}

const filas = ['1', '2', '3', '4', '5', '6', '7', '8'];
const columnas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const jugadores = {
    blancas: 0,
    negras: 1
}

const estados = {
    inicio: 0,
    turnoBlancas: 1,
    turnoNegras: 2,
    movimientoBlancas: 3,
    movimientoNegras: 4,
};

let estadoActual = estados.inicio
let movimientosBlancas = [];

let selectedPiece = "";

let blancas = new Blancas;
let negras = new Negras();

beginGame();

function beginGame() {

    blancas.setPieces();
    negras.setPieces();

    let casillas = document.getElementById("tablero").children;
    Object.entries(casillas).forEach((casilla) => {
        casilla[1].addEventListener("click", clickCasillas);
    });

    estadoActual = estados.turnoBlancas;
}

function clickCasillas(casilla) {
    // if(esMovimientoValido)
    // let casillaAnterior = document.getElementById(selectedPiece);
    // console.log(casillaAnterior);

    // casilla.srcElement.style.backgroundColor = "rgb(255, 217, 102)";  
    switch (estadoActual) {
        case estados.turnoBlancas: blancas.turnoBlancas(casilla); break;
        case estados.movimientoBlancas: blancas.movimientoBlancas(casilla); break;
        case estados.turnoNegras: negras.turnoNegras(casilla); break;
        case estados.movimientoNegras: negras.movimientoNegras(casilla); break;

    }
}

function move(from, to) {
    let casilla;
    let image;
    let pieza;
    let jugador;


    casilla = document.getElementById(from);
    image = casilla.style.backgroundImage;
    pieza = casilla.getAttribute("data-pieza")
    jugador = casilla.getAttribute("data-jugador")
    casilla.removeAttribute("data-pieza");
    casilla.removeAttribute("data-jugador");
    casilla.style.backgroundImage = "";

    movimientosBlancas.forEach((mov) => {
        let casilla = document.getElementById(mov);
        casilla.style.backgroundColor = "";
    });

    casilla = document.getElementById(to);
    casilla.style.backgroundImage = image;
    casilla.style.backgroundSize = "contain";
    casilla.setAttribute("data-pieza", pieza);
    casilla.setAttribute("data-jugador", jugador);
}
