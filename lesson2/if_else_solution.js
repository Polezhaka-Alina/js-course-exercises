function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(greaterNum(5, 10));
console.log(greaterNum(9, 10));


function helloWorld(lang) {
    if (lang == 'en') {
        return 'Hello';
    } else if (lang == 'es') {
        return 'Hola';
    } else {
        return 'Привет';
    }
}

console.log(helloWorld('fr'));
console.log(helloWorld('es'));
console.log(helloWorld('ru'));

function assignGrade(mark) {

    if (1<=mark && mark<=20) {
        return 1;
    }
    else if (21<=mark && mark<=40) {
        return 2;
    }
    else if (41<=mark && mark<=60){
        return 3;
    }
    else if (61<=mark && mark<=80){
        return  4;
    }
    else if (81<=mark && mark<=100){
        return 5;
    }

}
console.log(assignGrade(1));
console.log(assignGrade(2));
console.log(assignGrade(3));
console.log(assignGrade(4));
console.log(assignGrade(5));

