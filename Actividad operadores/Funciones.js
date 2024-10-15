//Ej1
function calcNomina(){
    let horas = prompt ("introduce las horas");
    let coste = prompt ("introduce el coste");
    let precio = horas*coste;
    
    document.getElementById("resultado1").innerHTML = "El cobro que recibiras es: " + precio; 

}

//Ej2
function calcPeso(){
    let peso = prompt("Introduce tu peso");
    let estatura = parseFloat(prompt("Introduce tu altura en centimetros"));
    estatura = estatura/100;
    let imc = peso/(estatura**2);
    
    document.getElementById("resultado2").innerHTML = "Tu índice de masa corporal es:" + imc.toFixed(2);
}

//Ej3
function calcResto(){
    let num = prompt("Introduce 1 numero");
    let num2 = prompt("Introduce el Segundo numero");
    let cociente = num / num2;
    let resto = num % num2;

    document.getElementById("resultado3").innerHTML = "El cociente es: "+ cociente+ " y el resto es: "+resto;
}

//Ej4
function calcInteres(){
    let cantInvertida = prompt("Introduce la cantidad a invertir");
    let interes = prompt("Cuanto es el interes Anual?"); 
    let years = prompt("Durante cuantos años?");

    let total = cantInvertida*Math.pow(1 + interes / 100,years);    

    document.getElementById("resultado4").innerHTML = "La capital sera: " +total +" subio un total de "+ (total-cantInvertida).toFixed(2);
}

//Ej5
function calcCaja(){
    let cantPayasos = prompt("Cuantos payasos van el pedido?");
    let cantMunecas = prompt("Y de muñecas que cantidad en el paquete?");
    let total = (cantPayasos*112) + (cantMunecas*75);

    document.getElementById("resultado5").innerHTML = "El peso del paquete seran: " + total+"g"; 
}

//Ej6
function calcPan(){
    let pangood = 3.49;
    let descuento = pangood * 0.6;
    let panbad= pangood - descuento;

    let cantidad = prompt("Cuantas barras que no son del dia has comprado?");

    document.getElementById("resultado6").innerHTML = "El precio de la barra de pan es "+ pangood+", con el descuento de la barras de pan que no son del dia es: " + descuento.toFixed(2) + " y el total de su importe es: "+(panbad*cantidad).toFixed(2);
}

//Ej7
function pre3(){
    alert ("Hagamos unas preguntas(Respon con Si o No)");
    let pre1 = prompt("Es el 165898 un numero par");
    pre1 = pre1.toLowerCase();
    let pre2 = prompt("Es lo mismo el 1 que el 0.9999...");
    pre2 = pre2.toLowerCase();
    let pre3 = prompt("Es el numero 7 un numero primo");
    pre3 = pre3.toLowerCase();


    if(pre1 == "si" && pre2 == "si" && pre3 == "si"){
        document.getElementById("resultado7").innerHTML = "Esta todo correcto";
    }else{
        document.getElementById("resultado7").innerHTML = "Te has equivocado, prueba otra vez";
    }

}

//Ej8
function user(){
    let userTrue = "yesua";
    let passTrue = "ibanez";

    let user = prompt("Introduce tu usuario");
    user = user.toLowerCase();
    let pass = prompt("Introduce tu pass");
    pass = pass.toLocaleLowerCase();

    if(userTrue == user && passTrue == pass){
        document.getElementById("resultado8").innerHTML = "Autenticación exitosa";
    }else{
        document.getElementById("resultado8").innerHTML = "Usuario o contraseña equivocados";

    }
}

//Ej9
function evalua(){
    let valor = "";
    let opcion = parseInt(prompt("Selecciona una de estas opciones: "+"1.Pizza "+"2.Coches "+"3.Videojuegos "+"4.Informatica "));
    opciones(opcion);

    function opciones(opcion){
        switch(opcion){
            case 1:
                valor = parseInt(prompt("¿Cuánto te gusta la pizza? del 1 al 10"));
                menj(valor);
                break;
            case 2:
                valor = parseInt(prompt("¿Cuánto te gustan los coches? del 1 al 10"));
                menj(valor);
                break;
            case 3:
                valor = parseInt(prompt("¿Cuánto te gustan los videojuegos? del 1 al 10"));
                menj(valor);
                break;
            case 4:
                valor = parseInt(prompt("¿Cuánto te gusta la informática? del 1 al 10"));
                menj(valor);
                break;
            default:
                alert("Opción no válida, introduce una opción válida");
                opcion = parseInt(prompt("Selecciona una de estas opciones: "+"1.Pizza "+"2.Coches "+"3.Videojuegos "+"4.Informatica "));
                opciones(opcion);
        }
    }
    
    function menj(valor){
        if (valor >= 1 && valor <= 4) {
            document.getElementById("resultado9").innerHTML = "No te termina de gustar demasiado.";
        } else if (valor == 5 || valor == 6) {
            document.getElementById("resultado9").innerHTML = "Veo que te gusta algo.";
        } else if (valor == 7 || valor == 8) {
            document.getElementById("resultado9").innerHTML = "Te gusta bastante.";
        } else if (valor == 9 || valor == 10) {
            document.getElementById("resultado9").innerHTML = "Te apasiona.";
        } else {
            alert("Valor no válido, introduce un número del 1 al 10");
            valor = parseInt(prompt("¿Cuánto te gusta la informática? del 1 al 10"));
            menj(valor);
        }
    }
}


//Ej10
function notas(){
    let nota = parseInt(prompt("Introduce tu nota"));
    respuesta(nota);

    function respuesta(nota){
        if (nota === 10) {
            document.getElementById("resultado10").innerHTML = "¡Excelente!";
        } else if (nota === 9 || nota === 8) {
            document.getElementById("resultado10").innerHTML = "¡Muy bien!";
        } else if (nota === 7 || nota === 6) {
            document.getElementById("resultado10").innerHTML = "Aprobado";
        } else if (nota >= 1 && nota <= 5) {
            document.getElementById("resultado10").innerHTML = "Reprobado";
        } else {
            alert("Opción no válida, introduce una opción válida");
            nota = parseInt(prompt("Introduce tu nota"));
            respuesta(nota);
        }
    }   
}



