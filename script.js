let currentPlayer = 1;
let jaGanhou = false;
let jogadas = 0;

$("td").click(function(){
    if(currentPlayer == 1 && $(this).text() == "" && jaGanhou == false){
        $(this).text("X");
        jogadas++;
        validaVencedor("X",currentPlayer);
        currentPlayer = 2;
    } else if($(this).text() == "" && jaGanhou == false) {
        $(this).text("O");
        jogadas++;
        validaVencedor("O",currentPlayer);
        currentPlayer = 1;
    }
});

function validaVencedor(icone,player){
    if($("#11").text() == icone && $("#12").text() == icone && $("#13").text() == icone){
        $("#11").css("background-color","green");
        $("#12").css("background-color","green");
        $("#13").css("background-color","green");
        jaGanhou = true;
        return $("h2").text(`Ganhador é ${player}`);
    } else if($("#21").text() == icone && $("#22").text() == icone && $("#23").text() == icone){
        $("#21").css("background-color","green");
        $("#22").css("background-color","green");
        $("#23").css("background-color","green");
        jaGanhou = true;
        return $("h2").text(`Ganhador é ${player}`);
    } else if($("#31").text() == icone && $("#32").text() == icone && $("#33").text() == icone){
        $("#31").css("background-color","green");
        $("#32").css("background-color","green");
        $("#33").css("background-color","green");
        jaGanhou = true;
        return $("h2").text(`Ganhador é ${player}`);
    } else if($("#11").text() == icone && $("#22").text() == icone && $("#33").text() == icone){
        $("#11").css("background-color","green");
        $("#22").css("background-color","green");
        $("#33").css("background-color","green");
        jaGanhou = true;
        return $("h2").text(`Ganhador é ${player}`);
    } else if($("#13").text() == icone && $("#22").text() == icone && $("#31").text() == icone){
        $("#13").css("background-color","green");
        $("#22").css("background-color","green");
        $("#31").css("background-color","green");
        jaGanhou = true;
        return $("h2").text(`Ganhador é ${player}`);
    } else if($("#11").text() == icone && $("#21").text() == icone && $("#31").text() == icone){
        $("#11").css("background-color","green");
        $("#21").css("background-color","green");
        $("#31").css("background-color","green");
        jaGanhou = true;
        return $("h2").text(`Ganhador é ${player}`);
    } else if($("#12").text() == icone && $("#22").text() == icone && $("#32").text() == icone){
        $("#12").css("background-color","green");
        $("#22").css("background-color","green");
        $("#32").css("background-color","green");
        jaGanhou = true;
        return $("h2").text(`Ganhador é ${player}`);
    } else if($("#13").text() == icone && $("#23").text() == icone && $("#33").text() == icone){
        $("#13").css("background-color","green");
        $("#23").css("background-color","green");
        $("#33").css("background-color","green");
        jaGanhou = true;
        return $("h2").text(`Ganhador é ${player}`);
    } else if($("td").text() == "" && jaGanhou == false && jogadas > 8){
        return $("h2").text("Empatou!");
    }
}

$("#btn").click(clean);

function clean(){
    $("#11").text("");
    $("#12").text("");
    $("#13").text("");
    $("#21").text("");
    $("#22").text("");
    $("#23").text("");
    $("#31").text("");
    $("#32").text("");
    $("#33").text("");
    $("h2").text("");
}