//  Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumbers(array) {
    let sum = 0;
    for (let number of array) {
      if (number > 0) {
        sum =sum + number;
      }
    }
    return sum;
  }
  

  const inputArray = [2, -5, 10, -3, 7, 11];
  const result = sumOfPositiveNumbers(inputArray);
  console.log(result); 