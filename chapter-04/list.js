function arrayToList(array) {
    list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list}
    }
    
    return list;
}

function listToArray(list) {
    let array = [];

    let node = Object.assign({}, list);

    while(node.value) {
        array.push(node.value);
        node = Object.assign({}, node.rest);
    }

    return array;
}

function prepend(value, list) {
    return {value: value, rest: list}
}

function nth(list, index) {
    if (index < 0) return undefined

    let node = list;
    for (let i = 0; i <= index; i++) {
        if (i == index) {
            return node.value;
        }

        node = node.rest;
    }
}

// Test cases:
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30, 40])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20