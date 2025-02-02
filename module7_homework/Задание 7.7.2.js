const calculator = function(a, b, operation){
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'subtract') {
        return a - b;
    } else if (operation === 'multiply') {
        return a * b;
    }

    return 0;
}
const result = calculator.apply(null, [2, 3, 'add']);