//Question no:1
const greetUser = (name) => `Hello ${name}! Welcome to JavaScript.`;
console.log(greetUser("Aditi"));

//Question no:2
const calculateArea = (length, width) => {
  return length * width;
};
console.log(calculateArea(5, 8));

//Question no:3
// Arrow function that checks whether a number is even or odd
const isEven = (number) => {
  // If the number is divisible by 2, it is even
  return number % 2 === 0;
};
// Testing the function
console.log(isEven(3)); 
console.log(isEven(6)); 

//Question no:4
const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32;
};
console.log(celsiusToFahrenheit(30)); 

//Question no:5
const findMax = (numbers) => {
  // Initialize max with the first element of the array
  let max = numbers[0];
  // Loop through the array starting from the second element
  for (let i = 1; i < numbers.length; i++) {
    // Update max if a larger number is found
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  // Return the largest number
  return max;
};
// Testing the function
console.log(findMax([3, 7, 2, 9, 1])); 

//Question no:6
const reverseString = (text) => {
    // Variable to store the reversed string
    let reversed = "";
    // Loop starts from the last character of the string
    for (let i = text.length - 1; i >= 0; i--) {
        // Add each character to the reversed string
        reversed += text[i];
    }
    // Return the reversed string
    return reversed;
};
console.log(reverseString("hello")); 

//Question no:7
const createUsername = (firstName, lastName = "User") => {
    // Combine firstName and lastName with underscore and convert to lowercase
    return `${firstName}_${lastName}`.toLowerCase();
};
console.log(createUsername("Aditi", "Poudel")); 
console.log(createUsername("Aditi")); 

//Question no:8
const applyOperation = (num1, num2, operation) => {
    // Call the callback function with num1 and num2 and return the result
    return operation(num1, num2);
};
const add = (a, b) => a + b;
console.log(applyOperation(2, 6, add));      

//Question no:9
const filterAdults = (ages) => {
    // Use filter method to keep only ages >= 18
    return ages.filter(age => age >= 18);
};
const ageArray = [15, 18, 10, 32, 24, 28];
console.log(filterAdults(ageArray)); 

//Question no:10
const calculateGrade= (score) => {
    if (score >=90) return "A";
    else if (score >=80) return "B";
    else if (score >=70) return "C";
    else if (score >=60) return "D";
    else return "F";
};
console.log ("Grade is", calculateGrade(64));

//Question no:11
const isPalindrome = (str) => {
    // Remove spaces and convert to lowercase
    const cleanedStr = str.replace(/\s+/g, "").toLowerCase();
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split("").reverse().join("");
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
};
console.log(isPalindrome("Hello"));  
console.log(isPalindrome("Madam")); 

