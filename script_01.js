
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole :
*/

let a, b, calculator;

// a = Number(prompt("Erste Zahl eingeben: "));
// calculator = prompt("Rechenart auswählen: +, -, *, /");
// b = Number(prompt("Zweite Zahl eingeben: "));

a = getNumber1();
calculator = prompt("Rechenart auswählen: +, -, *, /");
b = getNumber2();
calculate(a,b,calculator);

function calculate(a, b, OP){
    switch (OP) {
        case "+":
            print(plus(a, b));
            break;
        
        case "-":
            print(minus(a, b));
            break;
    
        case "*":
            print(mal(a, b));
            break;
    
        case "/":
            print(durch(a, b));
            break;
    
        default:
            console.log("Ungültige Rechenart!");
            break;
    }
}

function getNumber1(){
    do {
       a = Number(prompt("Erste Zahl eingeben: "));
    } while (isNaN(a));
    return a;
}

function getNumber2(){
    do {
       b = Number(prompt("Zweite Zahl eingeben: "));
    } while (isNaN(b));
    return b;
}

function plus(a, b){
    return a + b;       // keine neue Variable deklarieren, gleich in den Return schreiben.
}

function minus(a, b){
    return a - b;
}

function mal(a, b){
    return a *b;
}

function durch(a, b){
    if (b == 0){
        return "ungültig. Du kannst nicht durch 0 teilen!";
    }
        return a / b;           // return bricht die Funktion ab
}

function print(c){
    console.log("Das Ergebnis ist", c);
}