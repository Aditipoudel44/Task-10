//Question no:1
//Create an array of numbers and print all the elements using a loop.
const numbers = [6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Question no:2
//Given an array of numbers, find the sum of all elements.
let number= [6, 7, 8, 9, 10];
let sum=0;
for (let i=0; i < number.length; i++) {
    sum= sum +numbers[i];
}
console.log ("The sum of all elements is", sum);

//Question no:3
//Find the largest number in a given array. 
const num = [ 10, 20, 18, 30];
// Initialize max with the first element of the array
let max = num[0];
// Loop through the array to find the largest number
for (let i = 1; i < num.length; i++) {
    if (num[i] > max) {
        max = num[i]; // Update max if current number is larger
    }
}
console.log("Largest number in the array:", max); 

//Question no:4
//Count how many even numbers and odd numbers are present in an array.
let elements = [2, 8, 13, 22, 40];
let evenCount = 0;
let oddCount= 0;
for (let i=0; i< numbers.length; i++) {
    if (numbers[i] % 2 ===0) {
        evenCount = evenCount +1;
    } else {
        oddCount = oddCount +1;
    }
}
console.log ("Even numbers:", evenCount);
console.log ("Odd numbers:", oddCount);

//Question no:5
//Reverse an array without using the built-in reverse() method. 
const num1 = [9, 8, 7, 6, 5];
// Create an empty array to store the reversed elements
const reversedArray = [];
// Loop through the original array from the last element to the first
for (let i = num1.length - 1; i >= 0; i--) {
    reversedArray.push(num1[i]); // Add each element to the new array
}
console.log("Reversed Array:", reversedArray); 

//Question no:6
// Create an array of numbers
let numb = [5, 10, 20, 40, 50];
let elementToFind = 20;
let found = false;
for (let i = 0; i < numbers.length; i++) {
    if (numb[i] === elementToFind) {
        console.log("Element found at index:", i);
        found = true;
        break;
    }
}
if (!found) {
    console.log("Element not found");
}

//Question no:8
//Remove duplicate elements from an array and store the unique values in a new array. 
const digit = [6, 11, 16, 9, 19, 4, 26];
// New array to store unique values
const uniqueNumbers = [];
// Loop through the original array
for (let i = 0; i < digit.length; i++) {
    // Check if the element is not already in uniqueNumbers
    if (!uniqueNumbers.includes(digit[i])) {
        uniqueNumbers.push(digit[i]); // Add it if not present
    }
}
console.log("Unique elements:", uniqueNumbers); 

//Question no:9
//Find the second largest number in an array without sorting it.
let checkNum = [4,6, 8, 3, 19];
// Assume first two elements
let largest = checkNum[0];
let secondLargest = checkNum[1];
// Swap if first is smaller than second
if (secondLargest > largest) {
    let temp = largest;
    largest = secondLargest;
    secondLargest = temp;
}
// Loop through the rest of the array starting from index 2
for (let i = 2; i < checkNum.length; i++) {
    if (checkNum[i] > largest) {
        // Current element is new largest
        secondLargest = largest;
        largest = checkNum[i];
    } else if (checkNum[i] > secondLargest && checkNum[i] !== largest) {
        // Current element is new second largest
        secondLargest = checkNum[i];
    }
}
console.log("Second largest is", secondLargest); 

//Question no:10
//Rotate an array to the right by one position.
let arr = [1, 2, 3, 4];
// Store the last element
let lastElement = arr[arr.length - 1];
// Shift all elements one position to the right
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
// Place the last element at the first position
arr[0] = lastElement;
console.log("Array after rotation:", arr); 

//Question no:11
//Merge two arrays into one and sort the merged array in ascending order without using the sort() method.
let arr1 = [9, 4, 1];
let arr2 = [5, 6, 3];
// Merge arrays using concat
let merged = arr1.concat(arr2);
console.log("Merged array:", merged); // [5, 2, 9, 1, 7, 3]
// Sort the merged array using a simple bubble sort
for (let i = 0; i < merged.length - 1; i++) {
    for (let j = 0; j < merged.length - i - 1; j++) {
        // Swap if the current element is greater than the next
        if (merged[j] > merged[j + 1]) {
            let temp = merged[j];
            merged[j] = merged[j + 1];
            merged[j + 1] = temp;
        }
    }
}
console.log("Sorted merged array:", merged); 
