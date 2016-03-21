function numberGenerator() {
    for (var i = 0; i <= 4; i++) {
        var min = 1, max = 20, rand, result;
        rand = Math.floor(min + Math.random() * (max + 1 - min));
        rand = Math.round(rand);
        if (rand % 2 === 0) {
            result = ' четное';
        } else {
            result = ' нечетное';
        }
        console.log(rand + result);
    }
}
numberGenerator();


function multiplicationTable() {
    for (var multiplier = 1; multiplier <= 10; multiplier++) {
        for (var i = 1; i <= 10; i++) {
            var result = multiplier * i;
            console.log(multiplier + ' * ' + i + ' = ' + result);
        }
    }
}
console.log(multiplicationTable());

function checkAssignGrade() {
    for (var i = 80; i <= 100; i++) {
        console.log("Для i="+i  + " оценка " + assignGrade(i));
    }
}
console.log(checkAssignGrade());