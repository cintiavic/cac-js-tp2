/* EJ 1
let num = 0;
num = parseInt(prompt ("👋 Ejercicio 1: Ingrese un número que le imprimo algo"));

ej1(num); */

/* EJ 2
let n1;
let n2;

n1 = parseInt(prompt ("👋 Ejercicio 2: Ingrese un número: "));
n2 = parseInt(prompt ("👋 Ejercicio 2: Ingrese otro número: "));
ej2(n1,n2); */

/* EJ 3
let n1,n2,n3;
n1 = parseInt(prompt ("👋 Ejercicio 3: Ingrese un número: "));
n2 = parseInt(prompt ("👋 Ejercicio 3: Ingrese un número: "));
n3 = parseInt(prompt ("👋 Ejercicio 3: Ingrese un número: "));
document.write("💙 El promedio entre " + n1 + ", " + n2 + ", " +  n3 + " es: " + ej3(n1,n2,n3)); */

/* EJ 4
document.write("el promedio de notas es: " + ej4()); */

/* EJ 5
let numero = parseFloat(prompt ("👋 Ejercicio 5: Ingrese un número y le calculo el doble: "));
document.write("<h2>Ejercicio 5: Doble</h2>");
document.write("<p>El doble de " +  numero + " es: " + ej5(numero) + "</p>");*/

/* EJ 6 

let numero = parseFloat(prompt ("👋 Ejercicio 6: Ingrese un número y le calculo el cuadrado: "));
document.write("<h3>Ejercicio 6: Cuadrado</h3>");
document.write("<p>💙 El cuadrado de " +  numero + " es: " + ej6(numero) + "</p>");
*/

/* EJ 7 
let numero = parseFloat(prompt ("👋 Ejercicio 7: Ingrese un número y le calculo el siguiente, el doble y el cuadrado: "));
document.write("<h3>Ejercicio 7: Siguiente, Doble y Cuadrado</h3>");
document.write("<p>💙 El siguiente de " +  numero + " es: " + ej7(numero) + "</p>");
document.write("<p>💚 El doble de " +  numero + " es: " + ej5(numero) + "</p>");
document.write("<p>💛 El cuadrado de " +  numero + " es: " + ej6(numero) + "</p>");*/


/* EJ 8
let numero = parseFloat(prompt ("👋 Ejercicio 8: Ingrese un número y le calculo el siguiente del doble:"));
document.write("<h3>Ejercicio 8: Siguiente del Doble</h3>");
document.write("<p>💙 El siguiente del doble de " +  numero + " es: " + ej7(ej5(numero)) + "</p>");
*/

/* EJ 9 
let numero = parseFloat(prompt ("👋 Ejercicio 9: Ingrese un número y le calculo el doble del siguiente al cuadrado"));
document.write("<h3>Ejercicio 9: Doble del siguiente al cuadrado</h3>");
document.write("<h4>Interpretación [2(x+1)]²</h4>");
document.write("<p>💙 [2(" + numero + "+1)]²=" +  ej6(ej5(ej7(numero))) + "</p>");
document.write("<h4>Interpretación 2(x+1)²</h4>");
document.write("<p>💙 2(" + numero + "+1)²=" + ej5(ej6(ej7(numero))) + "</p>");*/

