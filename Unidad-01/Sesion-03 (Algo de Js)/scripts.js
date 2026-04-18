function saludar(){
    alert("Holaaa que tal com estaas");
}

function CalcularEcuacion(){
    var a=document.getElementById('a').value;
    var b=document.getElementById('b').value;
    var c=document.getElementById('c').value;
    var discriminante = Math.pow(b,2)-4*a*c;
    console.log(discriminante);
    if(discriminante<0) {
        alert("Sin soluciones reales");
    } else {
        x1=(-b+Math.sqrt(discriminante))/(2*a);
        x2=(-b+Math.sqrt(discriminante))/(2*a);
    }
    document.getElementById('x1').value=x1;
    document.getElementById('x2').value=x2;
}

function Primo(){
    var num = document.getElementById('num').value;
    var NoPrimo = "no es primo";
    var Primo = "Es primo";

    var esPrimo= true
    //si el numero es menor igual que  uno, se desactiva la banderita 
    if(num <= 1) {
        esPrimo = false;
    } else {
        //para cuando i sea menor que num hasta num-1 
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        console.log("es primo");
        document.getElementById('p').value = Primo;
    } else {
        console.log("no es primo");
        document.getElementById('p').value = NoPrimo;
    }
}