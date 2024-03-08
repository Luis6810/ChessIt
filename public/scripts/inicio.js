class StateHandler {
    location = {};
    images = {};
    jugador = {};
    miTurno;
    miMovimiento;
    turnoRival;
    movimientoRival;
    jaque;
    miJaque;

    reyRival;

    movs;
    constructor(jugador) {
        this.jugador = jugador;
        this.movs = new Movimientos(jugador);

        this.miTurno = jugadores.blancas === jugador ? estados.turnoBlancas : estados.turnoNegras
        this.miMovimiento = jugadores.blancas === jugador ? estados.movimientoBlancas : estados.movimientoNegras
        this.turnoRival = jugadores.blancas === jugador ? estados.turnoNegras : estados.turnoBlancas
        this.movimientoRival = jugadores.blancas === jugador ? estados.movimientoNegras : estados.movimientoBlancas
        this.jaque = jugadores.blancas === jugador ? estados.jaqueNegras : estados.jaqueBlancas
        this.miJaque = jugadores.blancas === jugador ? estados.jaqueBlancas : estados.jaqueNegras

        this.reyRival = jugadores.blancas === jugador ? reyNegro : estados.reyBlanco

        if (jugador === jugadores.blancas) {
            this.location = {
                "Torre": ["a1", "h1"],
                "Caballo": ["b1", "g1"],
                "Alfil": ["c1", "f1"],
                "Rey": ["e1",],
                "Reina": ["d1"],
                "Peon": ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"]
                // "Torre": ["a8", "h8"]
            }

            this.images = {
                "Torre": "White R.ico",
                "Caballo": "White N.ico",
                "Alfil": "White B.ico",
                "Rey": "White K.ico",
                "Reina": "White Q.ico",
                "Peon": "White P.ico"
            }
        }
        else {
            this.location = {
                "Torre": ["a8", "h8"],
                "Caballo": ["b8", "g8"],
                "Alfil": ["c8", "f8"],
                "Rey": ["e8",],
                "Reina": ["d8"],
                "Peon": ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"]
            };

            this.images = {
                "Torre": "Black R.ico",
                "Caballo": "Black N.ico",
                "Alfil": "Black B.ico",
                "Rey": "Black K.ico",
                "Reina": "Black Q.ico",
                "Peon": "Black P.ico"
            };
        }

    }
    setPieces() {


        Object.entries(this.location).forEach(pieza => {
            pieza[1].forEach(ubicacion => {
                let square = document.getElementById(ubicacion);
                square.style.backgroundImage = 'url("' + 'img/' + this.images[pieza[0]] + '")';
                square.style.backgroundSize = "contain";
                square.setAttribute("data-pieza", pieza[0]);
                square.setAttribute("data-jugador", this.jugador);

            });
        });


    }

    datosJaque() {
        let tablero = document.getElementById("tablero").children;
        let pieza, player;
        let todosMovimientos = [];

        let a = document.getElementById("tablero").children;
        Object.entries(a).forEach((item)=>{{
            item[1].style.backgroundColor = ""
          }}); 

        Object.entries(tablero).forEach((item) => {
            pieza = item[1].getAttribute("data-pieza");
            player = item[1].getAttribute("data-jugador")

            if (player == this.jugador) {
                
                todosMovimientos = todosMovimientos.concat(this.movs.getRivalAtacks(pieza, item[1].id));

                todosMovimientos.forEach((item)=>{
                    let a = document.getElementById(item);
                    a.style.backgroundColor = "red";
                })

            }
        })
        // return false;
        return todosMovimientos.includes;

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


    turno(casilla) {
        // alert("Alerta");
        if (casilla.srcElement.style.backgroundImage !== "" && casilla.srcElement.getAttribute("data-jugador") == this.jugador) { //Es una pieza

            let siguientesMovimientos = this.movs.obtenerMovimientos(casilla.srcElement.getAttribute("data-pieza"), casilla.srcElement.id);
            this.posiblesMovimientos(siguientesMovimientos);
            selectedPiece = casilla.srcElement.id;
            // console.log(Object.keys(estados)[estadoActual]); 
            // console.log(Object.keys(estados)[this.miMovimiento]); 
            // console.log(Object.keys(jugadores)[this.jugador]); 

            estadoActual = this.miMovimiento;
            // console.log(Object.keys(estados)[estadoActual]); 

        }

    }

    movimiento(casilla) {

        if (movimientosBlancas.includes(casilla.srcElement.id)) { //Movimiento válido
            this.move(selectedPiece, casilla.srcElement.id, casilla.srcElement.style.backgroundImage);

            if (this.datosJaque().length > 0) {
                estadoActual = this.jaque;
                return;
            }

            estadoActual = this.turnoRival;

        }

        else if (casilla.srcElement.style.backgroundImage !== "" && casilla.srcElement.getAttribute("data-jugador") == this.jugador) { //Es una pieza
            let siguientesMovimientos = this.movs.obtenerMovimientos(casilla.srcElement.getAttribute("data-pieza"), casilla.srcElement.id);
            this.posiblesMovimientos(siguientesMovimientos);
            selectedPiece = casilla.srcElement.id;
        }
    }

    jaqueNegras(casilla) {
        

        this.turno(casilla);

        // if (mate){
        //     alert("Jaque Mate")
        // }
        // else{
        //     this.turno(casilla);
        // }

    }

    esMate(casilla) {
        let movimientos = this.obtenerMovimientos(casilla);
        if (!movimientos.length === 0) {
            return false();
        }
    }

    move(from, to) {
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

        if (pieza === "Rey") {
            if (jugador.blancas == jugador) {
                reyBlanco = to;
            }
            else {
                reyNegro = to;

            }
        }
    }

}

class Movimientos {
    jugador;
    rival;

    constructor(jugador) {
        this.jugador = jugador;
        this.rival = jugador == jugadores.blancas ? jugadores.negras : jugadores.blancas;
    }

    obtenerMovimientos(tipo, casilla) {
        let movimientos = [];
        const columna = columnas.indexOf(casilla[0]);
        const fila = filas.indexOf(casilla[1]);

        if (estadoActual === this.miJaque && tipo !== "Rey") {
            // console.log(this.esJaque());
            return [];
        }

        switch (tipo) {
            case "Peon": movimientos = this.movimientosPeon(columna, fila); break;
            case "Torre": movimientos = this.movimientosTorre(columna, fila); break;
            case "Alfil": movimientos = this.movimientoAlfil(columna, fila); break;
            case "Rey": movimientos = this.movimientosRey(columna, fila); break;
            case "Caballo": movimientos = this.movimientosCaballo(columna, fila); break;
            case "Reina": movimientos = this.movimientosReina(columna, fila); break;
            default: movimientos = [];
        }
        return movimientos;
    }

    getRivalAtacks(tipo, casilla) {
        let movimientos = [];
        const columna = columnas.indexOf(casilla[0]);
        const fila = filas.indexOf(casilla[1]);

        switch (tipo) {
            case "Peon": movimientos = this.ataquesPeon(columna, fila); break;
            case "Torre": movimientos = this.movimientosTorre(columna, fila); break;
            case "Alfil": movimientos = this.movimientoAlfil(columna, fila); break;
            case "Rey": movimientos = this.ataquesRey(columna, fila); break;
            case "Caballo": movimientos = this.movimientosCaballo(columna, fila); break;
            case "Reina": movimientos = this.movimientosReina(columna, fila); break;
            default: movimientos = [];
        }
        return movimientos;
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
                        protectedPieces.add(mov);
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

    ataquesPeon(columna, fila) {
        // casilla = document.getElementById(columnas[columna] + (filas[fila + 1]));
        let casilla, mov;
        let movimientos = [];
        // let incremento = 1;
        let incremento = this.jugador == jugadores.blancas ? 1 : -1;

        mov = columnas[columna] + (filas[fila + (1 * incremento)]);
        // if(this.esMovimientoValido(mov)){

        // }

        mov = columnas[columna + (1 * incremento)] + (filas[fila + (1 * incremento)]);
        casilla = document.getElementById(mov);
        if (this.esCasillaValida(mov)) {
            // if (casilla.style.backgroundImage !== "" && casilla.getAttribute("data-jugador") == this.rival) {
                movimientos.push(mov);
            // }
        }
        // console.log(casilla.getAttribute("data-jugador"));


        mov = columnas[columna - (1 * incremento)] + (filas[fila + (1 * incremento)]);
        if (this.esCasillaValida(mov)) {
            casilla = document.getElementById(mov);
            // if (casilla.style.backgroundImage !== "" && casilla.getAttribute("data-jugador") == this.rival) {
                movimientos.push(mov);
            // }
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
                        // console.log(mov);
                        protectedPieces.add(mov);
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
                mov = columnas[columna + i] + filas[fila + j]
                casilla = document.getElementById(mov);
                if (this.esCasillaValida(mov)) {
                    if (casilla.style.backgroundImage !== "") {
                        if (casilla.getAttribute("data-jugador") == this.rival) {
                            movimientosRey.push(mov);
                        }
                    }
                    else {
                        if (this.esCasillaSegura(mov)) {
                            movimientosRey.push(mov);
                        }
                    }

                }
            }

        }

        return movimientosRey;

    }

    ataquesRey(columna, fila) {
        let movimientosRey = [];
        let casilla, mov;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
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
            }

        }

        return movimientosRey;

    }

    esCasillaValida(casilla) {
        let columna = columnas.indexOf(casilla[0]);
        let fila = filas.indexOf(casilla[1]);
        return filas.includes(filas[fila]) && columnas.includes(columnas[columna]);

    }

    esCasillaSegura(casilla) {
        protectedPieces.clear();
        let columna = columnas.indexOf(casilla[0]);
        let fila = filas.indexOf(casilla[1]);
        let ataques = new Set();

        let tablero = document.getElementById("tablero").children;
        // console.log(tablero);
        let pieza, player;
        Object.entries(tablero).forEach((item) => {
            pieza = item[1].getAttribute("data-pieza");
            player = item[1].getAttribute("data-jugador")
            // console.log(pieza + ' ' +item[1].id);
            
            if (player == this.rival) {
                // console.log(this.getRivalAtacks(pieza, item[1].id));
                ataques.add(...this.getRivalAtacks(pieza, item[1].id));
                let a = document.getElementById(item[1].id);
                a.style.backgroundColor = "red";
            }

        })

        let todosMovimientos = new Set([...ataques, ...protectedPieces])
        

    
        return !todosMovimientos.has(casilla);
    }

}

const filas = ['1', '2', '3', '4', '5', '6', '7', '8'];
const columnas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const jugadores = {
    blancas: 0,
    negras: 1
}

let protectedPieces = new Set();

const estados = {
    inicio: 0,
    turnoBlancas: 1,
    turnoNegras: 2,
    movimientoBlancas: 3,
    movimientoNegras: 4,
    jaqueNegras: 5,
    jaqueBlancas: 6
};

let estadoActual = estados.inicio
let movimientosBlancas = [];

let selectedPiece = "";

let reyNegro = "e8";
let reyBlanco = "e1";

let stateBlancas = new StateHandler(jugadores.blancas);
let stateNegras = new StateHandler(jugadores.negras);
// let negras = new Negras();

beginGame();

function beginGame() {

    stateBlancas.setPieces();
    stateNegras.setPieces();

    let casillas = document.getElementById("tablero").children;
    Object.entries(casillas).forEach((casilla) => {
        casilla[1].addEventListener("click", clickCasillas);
    });

    estadoActual = estados.turnoBlancas;
}

function clickCasillas(casilla) {
    console.log(Object.entries(estados)[estadoActual][0]);
    switch (estadoActual) {
        case estados.turnoBlancas: stateBlancas.turno(casilla); break;
        case estados.movimientoBlancas: stateBlancas.movimiento(casilla); break;
        case estados.turnoNegras: stateNegras.turno(casilla); break;
        case estados.movimientoNegras: stateNegras.movimiento(casilla); break;
        case estados.jaqueNegras: stateNegras.jaqueNegras(casilla); break;
    }
}

