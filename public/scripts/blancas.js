
module.exports(Blancas);

class Blancas {
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
            pieza[1].forEach(ubicacion => {
                // console.log(images[pieza[0]]);
                let square = document.getElementById(ubicacion);
                square.style.backgroundImage = 'url("' + imagesBlanco[pieza[0]] + '")';
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

