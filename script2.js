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