class Negras {
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
                square.style.backgroundImage = 'url("' + imagesNegro[pieza[0]] + '")';
                // square.style.backgroundImage = 'url("' + "Black R.ico" + '")';

                square.style.backgroundSize = "contain";

            });
        });

    }

    obtenerMovimientos(tipo, casilla) {
        let columna = casilla[0];
        let fila = parseInt(casilla[1]);

        switch (tipo) {
            case "Peon": return [columna + (fila + 1)]; break;
            default: 0;
        }

        return [];

    }

    posiblesMovimientos(siguientesMovimientos) {
        movimientosBlancas.forEach((mov) => {
            let casilla = document.getElementById(mov);
            console.log(casilla);
            casilla.style.backgroundColor = "";
        });

        siguientesMovimientos.forEach((movimiento) => {
            let casilla = document.getElementById(movimiento);
            casilla.style.backgroundColor = "green";
        });

        movimientosBlancas = siguientesMovimientos;
    }

    move() {

    }


}