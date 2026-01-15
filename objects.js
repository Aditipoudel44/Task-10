//Question no: 1
//Create an object that stores a person’s name, age, and city, then print all the properties. 
let person={
    name:"Aditi",
    age: 20,
    city:"Kathmandu"
}
console.log(person);

//Question no:2
//Access and print the value of a specific property from an object.
const property = {
    name: "Aditi",
    age: 20,
    city: "Kathmandu"
};
console.log("Name:", property.name); 

//Question no:3
//Add a new property to an existing object and update the value of an existing property.
const persons = {
    name: "Aditi",
    age: 20,
    city: "Kathmandu"
};
persons.profession = "Student";
persons.age = 21;
console.log(persons);

//Question no:4
//Delete a property from an object and print the updated object.
const people = {
    name: "Aditi",
    age: 20,
    city: "Kathmandu",
    profession: "Student"
};
delete people.profession;
console.log(people);

//Question no:5
//Loop through all properties of an object and print each key and value.
const peoples = {
    name: "Aditi",
    age: 20,
    city: "Kathmandu",
    profession: "Student"
};
for (let key in peoples) {
    console.log(key + ":", peoples[key]);
}

//Question no:6
//Check whether a given property exists in an object. 
const properties = {
    name: "Aditi",
    age: 20,
    city: "Kathmandu"
};
// Arrow function to check if a property exists
const hasProperty = (obj, prop) => obj.hasOwnProperty(prop);
console.log(hasProperty(properties, "age"));     
console.log(hasProperty(properties, "profession")); 

//Question no:7
//Count the total number of properties in an object. 
const fruits = {
    apple: 5,
    banana: 8,
    mango: 10,
    orange: 9
};
// Count the total number of properties using Object.keys()
const totalProperties = Object.keys(fruits).length;
console.log("Total number of properties in fruits:", totalProperties); 

//Question no:8
//Convert an object into an array of keys and an array of values. 
const fruit = {
    apple: 10,
    banana: 5,
    mango: 8,
    orange: 12
};
// Get an array of keys
const keysArray = Object.keys(fruits);
// Get an array of values
const valuesArray = Object.values(fruits);
console.log("Keys:", keysArray);     
console.log("Values:", valuesArray); 

//Question no:9
//Given an object with numeric values, find the property with the highest value.
let marks = {
    math: 55,
    science: 78,
    english: 83
};
let highestKey = "";
let highestValue = -Infinity;

for (let key in marks) {
    if (marks[key] > highestValue) {
        highestValue = marks[key];
        highestKey = key;
    }
}
console.log("Highest:", highestKey, highestValue);

//Question no:10
// Merge two objects into a single object without using built-in merging methods.
// First object
const obj1 = {
    name: "Aditi",
    age: 20
};
// Second object
const obj2 = {
    city: "Kathmandu",
    profession: "Student"
};
// Create a new empty object to store merged properties
const mergedObj = {};
// Add properties from the first object
for (let key in obj1) {
    mergedObj[key] = obj1[key];
}
// Add properties from the second object
for (let key in obj2) {
    mergedObj[key] = obj2[key];
}
console.log("Merged Object:", mergedObj);
