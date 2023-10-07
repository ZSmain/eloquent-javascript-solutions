function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length-1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
}

function reverseArrayInPlace(array) {
    let temp;
    for (let i = 0; i < Math.floor(array.length/2); i++) {
        temp = array[i];
        array[i] = array[array.length-i-1];
        array[array.length-i-1] = temp;
    }
}

// Test cases:
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]