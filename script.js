//NUMBER ONE

function bitwiseAND(n1, n2) {
    return n1 & n2;
}

function bitwiseOR(n1, n2) {
    return n1 | n2;
}

function bitwiseXOR(n1, n2) {
    return n1 ^ n2;
}

// NUMBER TWO

function triArea(base, height) {
    return (base * height) / 2;
}

// NUMBER THREE
function cubes(a) {
	return a ** 3;
}
// NUMBER FOUR
function remainder(x, y) {
    return x % y;
}

// NUMBER FIVE
function nextEdge(side1, side2) {
    return side1 + side2 - 1;
}

//NUMBER SIX
function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}

//NUMBER SEVEN
function hello() {
    return "hello edabit.com";
}

// NUMBER EIGHT
function circuitPower(voltage, current) {
    return voltage * current;
}

// NUMBER NINE
function redundant(str) {
    return function() {
        return str;
    }
}


