function romanToInt(s) {
    let romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let current = romanToIntMap[s[i]];
        let next = romanToIntMap[s[i + 1]];
        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    return result;
}

console.log(romanToInt('X')); // Output: 9
console.log(romanToInt('XXII')); // Output: 21
