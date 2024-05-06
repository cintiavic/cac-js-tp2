

function maximo(n1, n2) {
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

let promedio3 = (n1, n2, n3) => (n1+n2+n3)/3;

function promedioNotas () {
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

let doble = n => 2*n;

let cuadrado = n => n*n;

let siguiente = n => n+1;

// El ejercicio 8 no lleva función
// El ejercicio 9 tampoco

let perimetroCuadrado = n => n*4;

// El ejercicio 11 no lleva función

let perimetroCirculo = r => 2 * r * Math.PI;

let areaCirculo = r => Math.PI * ej6(r);

function cantidadDiasDeMes (m) {
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

let divisible = (x,y) => x % y == 0;

let bisiesto = (a) => ( (divisible(a,4)) && (!divisible(a,100)) ) || (divisible(a,400));

// El ejercicio 16 no lleva función poruqe se usa la ej14 desde el main2

function diaAnterior (a,m,d){
    let anio = a;
    let mes = m;
    let dia = d;

    if (d!=1) { //si no es el primer día del mes
        dia = d-1;
    }
    else{ //si es el primer día del mes
        if (m==0) { //y el mes es Enero
            dia = 31;
            mes = 11;
            anio = a-1;
        }
        else { //y el mes no es Enero
            mes = m-1;
            dia = cantidadDiasDeMes(m);
        }
    }

    return (new Date(anio,mes,dia));
}

// Ej 18
function obtenerDiaSemana (fecha){
    let diaSem = fecha.getDay();
    switch  (diaSem) {
        case 0: return "Domingo"; break;
        case 1: return "Lunes"; break;
        case 2: return "Martes"; break;
        case 3: return "Miércoles"; break;
        case 4: return "Jueves"; break;
        case 5: return "Viernes"; break;
        case 6: return "Sábado"; break;
    }
}