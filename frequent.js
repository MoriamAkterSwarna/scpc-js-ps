function mostFrequentNumber(arr) {
    let frequency = {};
    let max = 0;
    let result;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (frequency[element]) {
            frequency[element]++;
        } else {
            frequency[element] = 1;
        }
        if (frequency[element] > max) {
            max = frequency[element];
            result = element;
        }
    }
    return result;
}

console.log(mostFrequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5])); 
