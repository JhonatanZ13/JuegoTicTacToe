var turno = 1;
var play = true;
$('.turnoJugador').append('<span>Turno de <i class="colorganador">X</i> </span>');
$('.colorganador').css('color','aqua');
$('table tr td').click(function() {
    if ($(this).text() == "" && play) {
        if ((turno%2)==1) {
            $(this).append("X");
            $(this).css('color','aqua');
            $('.turnoJugador').empty();
            $('.turnoJugador').append('<span>Turno de <i class="colorganador">O</i> </span>');
            $('.colorganador').css('color','blueviolet');
        }else{
            $(this).append("O");
            $(this).css('color','blueviolet');
            $('.turnoJugador').empty();
            $('.turnoJugador').append('<span>Turno de <i class="colorganador">X</i> </span>');
            $('.colorganador').css('color','aqua');
        }
        turno++;
        if (verificarGanador() != -1 && verificarGanador() != "") {
            if (verificarGanador() == "X") {
                $('body').append('<div class="ganador"> <span>Ha ganado <i class="colorganador">X</i></span> </div>');
                $('body').append('<input type="button" value="Jugar" class="btnJugar">');
                $('.colorganador').css('color','aqua');
                $('table tr td').css('border','1px solid aqua');
                $('.turnoJugador').empty();
                $('.btnJugar').click(jugarNuevamente);
                play=false;
            }else{
                $('body').append('<div class="ganador"> <span> Ha ganado <i class="colorganador">O</i></span> </div>');
                $('body').append('<input type="button" value="Jugar" class="btnJugar">');
                $('.colorganador').css('color','blueviolet');
                $('table tr td').css('border','1px solid blueviolet');
                $('.turnoJugador').empty();
                $('.btnJugar').click(jugarNuevamente);
                play=false;
            }
        }
        if ((turno==10) && (verificarGanador()== -1)) {
            $('body').append('<div class="ganador"> <span>Nadie gano.</span> </div>');
            $('body').append('<input type="button" value="Jugar" class="btnJugar">');
            $('.btnJugar').click(jugarNuevamente);

        }

    }
});

$('.btnJugar').click(jugarNuevamente);


function verificarGanador() {
    p1 = $('table tr:nth-child(1) td:nth-child(1)').text();
    p2 = $('table tr:nth-child(1) td:nth-child(2)').text();
    p3 = $('table tr:nth-child(1) td:nth-child(3)').text();
    p4 = $('table tr:nth-child(2) td:nth-child(1)').text();
    p5 = $('table tr:nth-child(2) td:nth-child(2)').text();
    p6 = $('table tr:nth-child(2) td:nth-child(3)').text();
    p7 = $('table tr:nth-child(3) td:nth-child(1)').text();
    p8 = $('table tr:nth-child(3) td:nth-child(2)').text();
    p9 = $('table tr:nth-child(3) td:nth-child(3)').text();

    if ((p1 == p2) && (p1 == p3)) {
        return p1;
    } else if ((p4 == p5) && (p4 == p6)) {
        return p4;
    } else if ((p7 == p8) && (p7 == p9)) {
        return p7;
    } else if ((p1 == p4) && (p1 == p7)) {
        return p1;
    }else if (( p2 == p5) && (p2 == p8)) {
        return p2;
    }else if (( p3 == p6) && (p3 == p9)) {
        return p3;
    }else if (( p1 == p5) && (p1 == p9)) {
        return p1;
    }else if (( p3 == p5) && (p3 == p7)) {
        return p3;
    }
    return -1;
}

function jugarNuevamente() {
    $('.ganador').remove();
    $('.btnJugar').remove();
    play=true;
    p1="";
    p3="";
    p4="";
    p5="";
    p6="";
    p7="";
    p8="";
    p9="";
    $('table tr:nth-child(1) td:nth-child(1)').empty();
    $('table tr:nth-child(1) td:nth-child(2)').empty();
    $('table tr:nth-child(1) td:nth-child(3)').empty();
    $('table tr:nth-child(2) td:nth-child(1)').empty();
    $('table tr:nth-child(2) td:nth-child(2)').empty();
    $('table tr:nth-child(2) td:nth-child(3)').empty();
    $('table tr:nth-child(3) td:nth-child(1)').empty();
    $('table tr:nth-child(3) td:nth-child(2)').empty();
    $('table tr:nth-child(3) td:nth-child(3)').empty();
    $('table tr td').css('border','1px solid gray');
    if (turno%2==1) {
       turno=2;
       $('.turnoJugador').append('<span>Turno de <i class="colorganador">O</i> </span>');
        $('.colorganador').css('color','blueviolet'); 
    }else{
        turno=1;
        $('.turnoJugador').append('<span>Turno de <i class="colorganador">X</i> </span>');
        $('.colorganador').css('color','aqua');
    }
}