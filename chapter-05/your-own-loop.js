function loop(value, test, update, body) {
    if (!test(value)) {return}
    
    body(value);
    value = update(value);
    loop(value, test, update, body)
}

// Test
loop(3, n => n > 0, n => n - 1, console.log);
// -> 3
// -> 2
// -> 1