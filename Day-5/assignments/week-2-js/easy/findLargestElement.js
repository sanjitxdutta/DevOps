/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestElement = numbers[0];
    for(i=1; i<numbers.length; i++){
        if(largestElement < numbers[i]) largestElement = numbers[i];
    }

    return largestElement;
}

module.exports = findLargestElement;