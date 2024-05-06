

/* EJ 2
let n1;
let n2;

n1 = parseInt(prompt ("👋 Ejercicio 2: Ingrese un número: "));
n2 = parseInt(prompt ("👋 Ejercicio 2: Ingrese otro número: "));
maximo(n1,n2); */

/* EJ 3
let n1,n2,n3;
n1 = parseInt(prompt ("👋 Ejercicio 3: Ingrese un número: "));
n2 = parseInt(prompt ("👋 Ejercicio 3: Ingrese un número: "));
n3 = parseInt(prompt ("👋 Ejercicio 3: Ingrese un número: "));
document.write("💙 El promedio entre " + n1 + ", " + n2 + ", " +  n3 + " es: " + promedio3(n1,n2,n3)); */

/* EJ 4
document.write("el promedio de notas es: " + promedioNotas()); */

/* EJ 5
let numero = parseFloat(prompt ("👋 Ejercicio 5: Ingrese un número y le calculo el doble: "));
document.write("<h2>Ejercicio 5: Doble</h2>");
document.write("<p>El doble de " +  numero + " es: " + doble(numero) + "</p>");*/

/* EJ 6 

let numero = parseFloat(prompt ("👋 Ejercicio 6: Ingrese un número y le calculo el cuadrado: "));
document.write("<h3>Ejercicio 6: Cuadrado</h3>");
document.write("<p>💙 El cuadrado de " +  numero + " es: " + cuadrado(numero) + "</p>");
*/

/* EJ 7 
let numero = parseFloat(prompt ("👋 Ejercicio 7: Ingrese un número y le calculo el siguiente, el doble y el cuadrado: "));
document.write("<h3>Ejercicio 7: Siguiente, Doble y Cuadrado</h3>");
document.write("<p>💙 El siguiente de " +  numero + " es: " + siguiente(numero) + "</p>");
document.write("<p>💚 El doble de " +  numero + " es: " + doble(numero) + "</p>");
document.write("<p>💛 El cuadrado de " +  numero + " es: " + cuadrado(numero) + "</p>");*/

/* EJ 8
let numero = parseFloat(prompt ("👋 Ejercicio 8: Ingrese un número y le calculo el siguiente del doble:"));
document.write("<h3>Ejercicio 8: Siguiente del Doble</h3>");
document.write("<p>💙 El siguiente del doble de " +  numero + " es: " + siguiente(doble(numero)) + "</p>");
*/

/* EJ 9 
let numero = parseFloat(prompt ("👋 Ejercicio 9: Ingrese un número y le calculo el doble del siguiente al cuadrado"));
document.write("<h3>Ejercicio 9: Doble del siguiente al cuadrado</h3>");
document.write("<h4>Interpretación [2(x+1)]²</h4>");
document.write("<p>💙 [2(" + numero + "+1)]²=" +  cuadrado(doble(siguiente(numero))) + "</p>");
document.write("<h4>Interpretación 2(x+1)²</h4>");
document.write("<p>💙 2(" + numero + "+1)²=" + doble(cuadrado(siguiente(numero))) + "</p>");*/

 /* EJ 10
 let numero = parseFloat(prompt ("👋 Ejercicio 10: Ingrese la longitud del lado de un cuadrado y le calculo el perímetro:"));
 document.write("<h3>Ejercicio 10: Perímetro de un cuadrado</h3>");
 document.write("<h4>El perímetro de un 🟥 de lado " + numero + " es: " + perimetroCuadrado(numero) +" </h4>"); 
 */

  /* EJ 11 
 let numero = parseFloat(prompt ("👋 Ejercicio 11: Ingrese la longitud del lado de un cuadrado y le calculo el área:"));
 document.write("<h3>Ejercicio 11: Área de un cuadrado</h3>");
 document.write("<h4>El área de un 🟥 de lado " + numero + " es: " + cuadrado(numero) +" </h4>"); 
*/

 /* EJ 12 
 let radio = parseFloat(prompt ("👋 Ejercicio 12: Ingrese el radio de un círculo y le calculo el perímetro:"));
 document.write("<h3>Ejercicio 12: Perímetro de un círculo</h3>");
 document.write("<h4>El perímetro de un 🟠 de radio " + radio + " es: " + perimetroCirculo(radio) +" </h4>"); 
*/

 /* EJ 13
 let radio = parseFloat(prompt ("👋 Ejercicio 13: Ingrese el radio de un círculo y le calculo el área:"));
 document.write("<h3>Ejercicio 13: Área de un círculo</h3>");
 document.write("<h4>El área de un 🟠 de radio " + radio + " es: " + areaCirculo(radio) +" </h4>"); 

 /* EJ 14 
 let mes;
 let salir = false;
 do {
    mes = parseInt (prompt ("👋 Ejercicio 14: Ingrese un número de mes y le digo cuántos días tiene:"));
    if ((mes < 1) || (mes > 12)) {
        window.alert("Ese mes no existe, vuelva a intentar");
    }
    else{
        salir = true;
    }
} while (!salir);

 document.write("<h3>Ejercicio 14: Días de un mes </h3>");
 document.write("<h4>📅 El mes " + mes + " tiene " + cantidadDiasDeMes(mes) +" días</h4>"); 
*/

/* EJ 15
//Un año es bisiesto si es divisible por 4 y no por 100, salvo que sea divisible por 400
let anio = parseInt (prompt ("👋 Ejercicio 15: Ingrese un año y le cuento si es bisiesto:"))
document.write("<h3>Ejercicio 15: Año bisiesto </h3>");

if (bisiesto(anio)) {
     document.write("<h4>📅 El año " + anio + " es bisiesto</h4>"); 
}
else {
    document.write("<h4>📅 El año " + anio + " no es bisiesto</h4>"); 
}
*/

/* EJ 16 

let anio = parseInt (prompt ("👋 Ejercicio 16: Ingrese año:"));
let mes = parseInt (prompt ("👋 Ejercicio 16: Ingrese mes:"));
let dia = parseInt (prompt ("👋 Ejercicio 16: Ingrese dia:"));
document.write("<h3>Ejercicio 16: Días de un mes </h3>");
document.write("<h4>📅 El mes " + mes + " tiene " + cantidadDiasDeMes(mes) +" días</h4>");  */

/* EJ 17
let anio = parseInt (prompt ("👋 Ejercicio 17: Ingrese año:"));
let mes = parseInt (prompt ("👋 Ejercicio 17: Ingrese mes:"));
let dia = parseInt (prompt ("👋 Ejercicio 17: Ingrese dia:"));

let fecha = new Date(anio,mes-1,dia);
let fechaAnterior = diaAnterior(anio,mes-1,dia);

document.write("<h3>Ejercicio 17: Día anterior </h3>");
document.write("<h4>📅 El día anterior a " + fecha + " es " + fechaAnterior);
*/

/* EJ 18
Mi interpretación: Pide qué día de la semana cae el último día del mes.*/
/* 
let anio = parseInt (prompt ("👋 Ejercicio 18: Ingrese año:"));
let mes = parseInt (prompt ("👋 Ejercicio 18: Ingrese mes:"));
let dia = parseInt (prompt ("👋 Ejercicio 18: Ingrese dia:"));

let fecha = new Date(anio,mes-1,dia);
let diaSemana = obtenerDiaSemana(fecha);

document.write("<h3>Ejercicio 18: Qué día de la semana cae? </h3>");
document.write("<h4>📅 El " + dia + "/" + mes + "/" + anio + " cae " + diaSemana); */

