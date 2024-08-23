
//1.Función que determine si un año esbisiesto.
function esBisiesto() {
    let año = document.getElementById("año").value;
    let resultado = document.getElementById("resultado1");

    año = parseInt(año)
    if((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0){
        resultado.value = true;
    }else{
        resultado.value = false;
    }
    console.log("Ejercicio 1: " +resultado.value)
}

//2.Función que convierta grados Celsiusa Fahrenheit.
function Celsiusafahrenheit(){
    let Celsius = document.getElementById("celsius").value;
    let resultado = document.getElementById("resultado2");
    Celsius = parseInt (Celsius);
    fahrenheit= Celsius*9/5+32
    
    resultado.value = fahrenheit + " grados fahrenheit"
    console.log("ejercicio 2: "+resultado.value)

}

//3.Función que devuelva el mayor de dos números.
function mayordedosnumeros(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let resultado = document.getElementById("resultado3")
    numero1 = parseInt (numero1);
    numero2 = parseInt (numero2);
    if(numero1 >numero2) {
        resultado.value = "el numero mayor es: "+numero1
       }else if(numero1<numero2){
        resultado.value = "el numero mayor es: "+numero2
       }else if(numero1 === numero2 ){
        resultado.value= "los numeros son iguales"
    }

       else
    {resultado.value=" faltan numeros"
    }      
}

//4.Función que convierta una cantidad de minutos en una cadena que indique cuántas horas y minutos corresponden.
function minutosencadenadehoras(){
    let minutos = document.getElementById("minutos").value;
    let resultado = document.getElementById("resultado4");
    minutos = parseInt (minutos);
    horas = Math.trunc(minutos/60);
    minuto = minutos % 60
    if (horas ===1) {
        resultado.value = horas+ " hora y " + minuto + " minutos"
        
    } else {
         resultado.value = horas+ " horas y " + minuto + " minutos"
        
    }
    
}

//5.Función que determine si un número está dentro de un rango dado (incluyendo los límites).
function estaEnRango(){
    let numero = document.getElementById("numero").value;
    let inicio = document.getElementById("inicio").value;
    let fin = document.getElementById("fin").value;
    let resultado= document.getElementById("resultado5");
    numero= parseInt (numero);
    inicio= parseInt(inicio);
    fin= parseInt(fin);
    if (numero>inicio && numero<fin){
        resultado.value=true
    }else{
        resultado.value=false
    }
}
//6.Función que calcule el precio final después de aplicar un porcentaje de descuento a un precio inicial.
function calcularpreciofinal(){
    let precio = document.getElementById("precio").value;
    let porcentaje = document.getElementById("resultado6");
    let descuento = precio*0.25;
    let preciofinal= precio-descuento;
    porcentaje.value="el precio final con descuento del 25% es: $"+preciofinal;
}

//7.Función que determine si una persona puede votar según su edad.
function puedevotar(){
    let edad = document.getElementById("edad").value;
    let  resultado= document.getElementById("resultado7");
    if (edad>=18){
        resultado.value = true
        
    }else{
        resultado.value = false

    }
}

//8.Función que calcule el área de un triángulo dados su base y altura.
function areatriangulo(){
let base = document.getElementById("base").value;
let altura = document.getElementById("altura").value;
let resultado = document.getElementById("resultado8");
base = parseInt(base);
altura = parseInt(altura);
area = base*altura/2;
resultado.value = "el area del triangulo es: "+ area;


console.log(base)
console.log(altura)
}

