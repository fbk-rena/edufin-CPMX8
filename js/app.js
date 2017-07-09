var cargarPagina = function () {
    $(".button-collapse").sideNav();
    $("#results").click(quizz);
    $("#reparte-cartas").click(memorama);
    $(".button-collapse").sideNav();
    
};
var quizz = function () {

    if (!$("input[@name=q1]:checked").val() ||
        !$("input[@name=q2]:checked").val() ||
        !$("input[@name=q3]:checked").val()
    ) {
        alert("No haz respondido");
    } else {
        var cat1name = "1";
        var cat2name = "2";
        var cat3name = "3";
        var cat11name = "11";


        var cat1 = ($("input[@name=q1]:checked").val() != "a");

        var cat2 = ($("input[@name=q2]:checked").val() != "b");

        var cat3 = ($("input[@name=q3]:checked").val() != "c");
        var cat11 = (!cat1 && !cat2 && !cat3 && !cat4 && !cat5 && !cat6 && !cat7 && !cat8 && !cat9 && !cat10);
        var categories = [];

        if (cat1) {
            categories.push(cat1name)
        };
        if (cat2) {
            categories.push(cat2name)
        };
        if (cat3) {
            categories.push(cat3name)
        };
        if (cat11) {
            categories.push(cat11name)
        };

        var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';
        $("#categorylist").text(catStr);
        $("#categorylist").show("slow");

        if (cat1) {
            $("#category1").show("slow");
        };
        if (cat2) {
            $("#category2").show("slow");
        };
        if (cat3) {
            $("#category3").show("slow");
        };
        if (cat11) {
            $("#category11").show("slow");
        }; {
            $("#closing").show("slow");
        };
    }
};
var memorama = function () {
    var tablero = document.getElementById('tablero');
    var cartas = [1, 2, 3, 4, 5, 6, 7, 8];
    var parejas = cartas.length;
    var primerCarta = 0;
    var segundaCarta = 0;


    cartas = cartas.concat(cartas);
    cartas = cartas.sort(function () {
        return Math.random() - 0.5
    });

    cartas.forEach(function (val) {
        var div = document.createElement('div');
        var imagen = document.createElement('img');
        imagen.src = "../assets/img/" + ("imagen" + (val)) + ".jpg";
        imagen.className = "imagenCarta";
        div.id = val;
        div.className = "cartasConImagen"
        console.log(val);
        div.appendChild(imagen);
        tablero.appendChild(div);
        div.addEventListener('click', function (event) {
            var imagenSeleccionada = event.target;
            if (primerCarta !== 0 && segundaCarta !== 0) {
                // limpiar banderas
                if (primerCarta.id !== segundaCarta.id) {
                    primerCarta.classList.remove('open');
                    segundaCarta.classList.remove('open');
                };
                primerCarta = 0;
                segundaCarta = 0;
            };
            imagenSeleccionada.classList.add('open');
            if (primerCarta === 0) {
                primerCarta = imagenSeleccionada;
            } else {
                segundaCarta = imagenSeleccionada;
                if (primerCarta.id === segundaCarta.id) {
                    parejas = parejas - 1;
                    console.log(parejas);
                }
                if (parejas === 0) {
                    alert('¡Ganaste!')
                    location.reload();
                }
            }
            if (primerCarta === segundaCarta) {};
        }, true)
    });
}

$(document).ready(cargarPagina);
