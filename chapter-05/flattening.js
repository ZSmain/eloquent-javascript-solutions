let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce((a, b) => {
    return a.concat(b);
});

console.log(flattenedArray);
// → [1, 2, 3, 4, 5, 6]