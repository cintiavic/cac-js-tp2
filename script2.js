function ej1(x){
    let i;
    for ( i = 1 ; i <= x ; i++){
        document.write ("Bienvenidos al curso Full Stack");
        document.write("<br>");
    }
}

function ej2 (n1, n2) {
    if (n1 < n2) {
        document.write ("El mayor es " + n2)
    }
    else if (n1 > n2) {
        document.write ("El mayor es " + n1)
    }
    else {
        document.write ("Los números son iguales")
    }
}

let ej3 = (n1, n2, n3) => (n1+n2+n3)/3;

function ej4 () {
    let acumulador = 0;
    let nota;
    let cantNotas = 1;
    let promedio;

    nota = parseInt(prompt("ingrese nota: "));

    while (nota != -1){
        acumulador += nota;
        cantNotas++;
        nota = parseInt(prompt("ingrese nota: "));
    }

    promedio = acumulador / (cantNotas-1);
    return (promedio);
}

let ej5 = n => 2*n;

let ej6 = n => n*n;

let ej7 = n => n+1;

// El ejercicio 8 no lleva función
// El ejercicio 9 tampoco

let ej10 = n => n*4;

// El ejercicio 11 no lleva función

let ej12 = r => 2 * r * Math.PI;

let ej13 = r => Math.PI * ej6(r);

function ej14 (m) {
    //calcula cantidad de dias del mes m
    if ((m==1) || (m==3) || (m==5) || (m==7) || (m==8) || (m==10) || (m==12)) {
        return 31;
    } else if (m == 2) {
        return 28;
    } else {
        return 30;
    }
    
}

// función auxiliar Divisible
// retorna si X es divisible por Y

let divisible = (x,y) => x % y == 0;

let bisiesto = (a) => ( (divisible(a,4)) && (!divisible(a,100)) ) || (divisible(a,400));