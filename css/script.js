let saida, i;

function ContarAteCem(){
    inicio = Number (document.getElementById("inicio").value);
    saida3 = "";
    for (a = inicio; a <=100;a++){
        saida3 =  saida3 + a +"<br>"
    }

    document.getElementById("ateCem").
    innerHTML = saida3;
}

let numero, h, saida4;

function tabuada() {
    numero = Number (document.getElementById("numero").value);
    saida4 = "";
    for (h = 1; h <=10; h++) {
        saida4 = saida4 + numero + "X"+
        h + "=" + numero * h + "<br>"
    }

    document.getElementById("tabuada").
    innerHTML = saida4;
}

let saida5, q;
function Gerar(){
    saida5 = ""
    for(q = 0; q<=5;q++){
        saida5 = saida5 = '<div class="caixa"><div>'
    }

    document.getElementById("quadarado").innerHTML = saida5;
}
