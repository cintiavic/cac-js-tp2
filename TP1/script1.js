/* 


21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos.
22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número
23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
22
333
4444
55555
666666
…….
24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1
25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
123
4 (Múltiplo de 4)
5
————————————————————
67
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 */


/* //1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.

window.alert("Hola Mundo"); */

//---------------------------------------------------------------------------------------------------------------------

/* //2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

document.write("<h2>Hello World</h2>"); */

//---------------------------------------------------------------------------------------------------------------------

/* // 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. 
document.write(3+5)
*/

//---------------------------------------------------------------------------------------------------------------------

/* //4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

let nombreUsr;
nombreUsr = window.prompt("Por favor, escriba su nombre");
window.alert("Hola "+ nombreUsr); */

//---------------------------------------------------------------------------------------------------------------------

/* // 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

let num1;
let num2;

num1=parseInt(window.prompt("Ingrese un número:"));
num2=parseInt(window.prompt("Ingrese otro número"));
num3=num1+num2;
window.alert("Sus números suman " + num3); */

/* //6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let num1;

let num2;

num1 = parseInt(window.prompt("Ingrese un número:"));
num2 = parseInt(window.prompt("Ingrese otro número"));

if ((num1-num2) == 0) {
    window.alert("Los números son iguales");
}
else {
    if ((num1-num2) < 0) {
        window.alert("El mayor es " + num2);
    }
    else {
        window.alert("El mayor es " + num1);
  
    }
}; */


/* // 7. Escribe un program que pida 3 números y escriba cuál es el mayor.

let num1;
let num2;
let num3;

num1 = parseInt(window.prompt("Ingrese un número:"));
num2 = parseInt(window.prompt("Ingrese otro número"));
num3 = parseInt(window.prompt("Ingrese otro número más"));

if ((num1 > num2) && (num1 > num3)) {
    window.alert("El mayor es " + num1);
}
else {
    if ((num2>num1) && (num2>num3)) {
        window.alert("El mayor es " + num2);
    }
    else {
        window.alert("El mayor es " + num3);
    }
}
   */

/* //8. Escribe un programa que pida un número y diga si es divisible por 2


let num1;
let esPar;



num1 = parseInt(window.prompt("Ingrese un número:"));

if ((num1%2)==0){
    window.alert("Ese es un número par");
}
else{
    window.alert("Ese es un número impar");
}
 */


/* //9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a


let cantA = 0;
let frase = "";
let i = 0;
let longitudFrase = 0;

frase = window.prompt("ingrese una frase y le digo cuántas A tiene");
document.write("length: " + frase.length);

for (i=0;i<frase.length; i++){
   
    if (frase[i] == "a"){
        cantA++;
    }
}

document.write("La frase " + frase + " contiene " + cantA + " letras A"); */


 //10. Escribe un programa que pida una frase y escriba las vocales que aparecen

function esVocal (letra) {
       
    return ((letra =="a")||(letra == "e")||(letra == "i")||(letra == "o")||(letra == "u")||
            (letra =="á")||(letra == "é")||(letra == "í")||(letra == "ó")||(letra == "ú"));
}


let cantVocales = 0;

frase = window.prompt("Ingrese una frase y le digo cuántas vocales tiene");
frase = frase.toLowerCase();
console.log(frase);

for (i=0; i<frase.length; i++){
   if (esVocal(frase[i])){
    cantVocales++;
   }
   
}

document.write("<p>La frase " + frase + " contiene " + cantVocales + " vocales</p>"); 
 


/* //12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

function esVocal (letra) {
       return ((letra =="a")||(letra == "e")||(letra == "i")||(letra == "o")||(letra == "u")|| (letra =="á")||(letra == "é")||(letra == "í")||(letra == "ó")||(letra == "ú"));
}


let i = 0;
let cantA = 0;
let cantE = 0;
let cantI = 0;
let cantO = 0;
let cantU = 0;

let frase = window.prompt("ingrese una frase y le digo cuántas veces se repite cada vocal en la frase");
frase = frase.toLowerCase();
for (i=0;i<frase.length; i++){
    if (esVocal(frase[i])){
        switch (frase[i]){
            case "a": cantA++;break;
            case "e": cantE++;break;
            case "i": cantI++;break;
            case "o": cantO++;break;
            case "u": cantU++;break;
            case "A": cantA++;break;
            case "E": cantE++;break;
            case "I": cantI++;break;
            case "O": cantO++;break;
            case "U": cantU++;break;
            case "á": cantA++;break;
            case "é": cantE++;break;
            case "í": cantI++;break;
            case "ó": cantO++;break;
            case "ú": cantU++;break;
            case "Á": cantA++;break;
            case "É": cantE++;break;
            case "Í": cantI++;break;
            case "Ó": cantO++;break;
            case "Ú": cantU++;break;
        }
    }
 }

 document.write("<p>La frase " + frase + " contiene: </p>"); 
 document.write("- " + cantA + " letras A </p>");
 document.write("- " + cantE + " letras E </p>");
 document.write("- " + cantI + " letras I </p>");
 document.write("- " + cantO + " letras O </p>");
 document.write("- " + cantU + " letras U </p>") */


 //Ej 16: divisores comunes
/* 
 
 let comunes = "";
 let n1;
 let n2;

 function esDivisor (d,n){
    return (n%d == 0);
 }

function divisoresComunes(n1,n2){
let i = 0;
 while((i<=n1)&&(i<=n2)) {
    if ((esDivisor(i,n1))&&(esDivisor(i,n2))){
        comunes = comunes + " - " + i;
    }
    i++;
 }
 return comunes;
}

n1 = parseInt(window.prompt("Ingrese un número:"));
n2 = parseInt(window.prompt("Ingrese otro número:"));
document.write("<h2>Los divisores comunes entre " + n1 + " y " + n2 + " son: </h2>");
document.write(divisoresComunes(n1,n2)); */

//17. Es primo

/* 
 function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero%i == 0) {
            return false;
        }
    }

    return true;
 }

let n;

n = parseInt(window.prompt("Ingrese un número:"));
if (esPrimo(n)){
    document.write("El número " + n + " es primo.");
}
else{
    document.write("El número " + n + " no es primo.");
} */

//20. Concatenar cadenas que ingresa el usuario hasta q cancela

/* let cadenas = [];
let cadena;

do {
    cadena = window.prompt("Ingrese una cadena de texto (o pulse 'cancelar' para salir):");
    
    if (cadena !== null) {
        cadenas.push(cadena);
    }
} while (cadena !== null);


// Concatenar las cadenas con un guión
let cadenaConcatenada = cadenas.join('-');

// Mostrar la cadena concatenada
if (cadenaConcatenada !== '') {
    document.write(`Cadenas concatenadas: ${cadenaConcatenada}`);
} else {
    document.write("No se ingresaron cadenas.");
} 

 */

/* 
21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos. */


//Pirámide de  números
/* console.log("voy a empezar");
for (let fila=1;fila <=30;fila++){
    console.log("entro al bucle mas afuera");
    for(let columna = 1;columna<=fila;columna++){
        console.log("entro al bucle mas adentro");
        document.write(fila + " ");
    }
    document.write("<br>");
}
console.log("salí"); */

//Pirámide invertida con número ingresado por el usuario

/* let numero = parseInt(prompt("ingrese un número"));
for (i = numero; i >= 1 ; i--){
    for (j = 1; j <=i; j++) {
        document.write (i);
    }
    document.write ("<br>")
} */
/* 
25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
123
4 (Múltiplo de 4)
5
————————————————————
67
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 */

/* let i;

for ( i=1 ; i <= 500 ; i++ ) {
    document.write (i);
    if  ((i%4)== 0)  {
            document.write ("(multiplo de 4) ");
        }
    if ((i%9)==0) {
            document.write ("(multiplo de 9) ");
        }
    document.write ("<br>");
} */