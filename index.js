// Find the last element of the following arrays.
let arr1 = [3,7,34,90,12];
let lastEleme = arr1[arr1.length-1];
console.log({lastEleme});

let arr2 = [true, "green", "where",12,56];
let lastElement = arr2[arr2.length-1];
console.log({lastElement});

// Write a JS program that will join the following array elements into a string.
 let myPets = ["Cow", "Bird", "Snake", "Dog"];
 let string = myPets.toString()
 console.log({string});

//  or

let newstring = myPets.join()
console.log({newstring});

// Write a JS script to sort the following array items. 
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var sortedarray = arr3.sort()
console.log({sortedarray});

// Write a program to remove duplicates from the following array. 
let arr = ["boy", "man", "girl",  "school", "girl", "woman"];
let newArray = [];
arr.forEach(element=>{
    if(!newArray.includes(element)) {
        newArray.push(element);
    }
});
console.log({newArray});

let dupli = arr.filter((value, index) => 
    arr.indexOf(value) !== index && arr.lastIndexOf(value) === index);

console.log({dupli});

// "food"If the word is present, return it else return "the search word was not found".
 let arr5 = ["the", "way", "x", 4];
 let newarr5 = arr5.includes("food") ? "food" : "the search word was not found"
 console.log({newarr5});

//  Write a JS script to sort the following string
 
let word = "renniw"
let newword = Array.from(word).sort().join('');
console.log({newword});

// Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
const fruits = ["Apple", "Orange", "banana", "Pineapple", "Passion" ];
fruits.splice(5,0 ,"Tomato");
console.log({fruits});



 





 

