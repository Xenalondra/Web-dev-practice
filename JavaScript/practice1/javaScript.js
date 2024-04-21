console.log("page loaded successfully");
//console logging
console.log("write something here.");
console.warn("This is a warning");
console.error("This is an error");

var website = "https://codingforeverbody.com/";
var myName = "Alondra Cutie";

console.log(myName);

//const and let are local variables, while var are global

const pie = "3.14"; //final var that cannot be changed
const height = "5'0\"";

if (myName == "Alondra Cutie") {
    let apples = 5;
    var weight = "60kg";
    console.log("I have", apples, "apples");
    console.log("My height is", height);
}

console.log("My weight is", weight);

// console.log("I will be commented out");
// ctr + / for commenting out

const name = "Alondra";
let profession = "Developer";

/*
Operators
+ add
- subtract
/ divide
* multiply
++ incremment
-- decrement
% modulo
** exponent
*/

const str = "A string";
const num = 3;
const flt = 3.14;
const bool = true;
const list = ["item 1", 2, "three", 3.14]; //Array
const thing = null; //empty
const notDefined = undefined; //currently holds not value
const getAge = function () { return 31; }

const obj = {
    'name': 'Alondra',
    'profession': 'Developer'
}

//lets you take an action
//case sensitive
let instagram = "@xenalondra";

if (instagram == "@xenalondra") {
    //if the condition is true, execute this code block
    console.log("My instagram is", instagram);
} else {
    //execute this block if the condition is false
    console.log("The instagram handler is incorrect.");
}

//getting element by Id
const box = document.getElementById("box");
console.log(box);
box.innerText = "This has been replaced.";
box.innerHTML = "This has been <Strong>REPLACED</Strong>";

//Create an object
let person = {
    //key : value
    'name': 'Alondra Bio',
    'age': 24,
    'gender': 'female',
    'job': 'developer'
};
console.log(person['name']);
console.log(person);

let pet = {
    'names': ('Ccino', 'Vani'),
    'breed': 'siamese',
    'gender': ('male', 'female')
}
console.log(pet['names']);
console.log(pet);

let sampleString = "Learning JavaScript is not really hard.";
sampleString = sampleString.toLowerCase();
console.log(sampleString);
sampleString = sampleString.toUpperCase();
console.log(sampleString);
console.log(sampleString.slice());
console.log(sampleString.split(" "));

let age = 24;
//Backticks `` caret to create template literal
console.log(`My name is ${myName}. And my age is ${age}`);

//cast numbers by Numbers(var)
//Array in javaScript
lst = ["one", "two", "three", "four", "five"];
console.log(lst);
lst.push("six"); //insert an element
console.log(lst);
lst.pop(); //remove an element
console.log(lst);

mixed = ["one", 2.2, "four", []]
console.log(mixed);

//iteration statement
for (let i = 0; i < lst.length; i++) {
    const element = lst[i];
    console.log(element);
}

//Foreach function in JavaScript
lst.forEach(element => {
    console.log(element);
});

const elems = document.querySelector(".class");
console.log(elems);
console.log(typeof (elems));
const elems2 = document.querySelectorAll(".class");
console.log(elems2);

const elements = document.querySelectorAll("li");
elements.forEach(node => {
    node.innerText = "This has changed!";
});

elements.forEach((node, index) => {
    node.innerText = `Hello this is item ${index + 1}`;
});

// elements.forEach(node => {
//     node.classList.add("custom-class second-class");
// });

//DRY - Don't repeat yourself
//creating function
function addNumbers(param1, param2) {
    return `The sum is ${Number(param1) + Number(param2)}`; //casted to Number
}

function multiplyNumbers(num1, num2) {
    const product = Number(num1) * Number(num2);
    return product;
}

console.log(typeof (addNumbers)); //this will return function
console.log(typeof (addNumbers(15, 15))); //this will return string
console.log(typeof (multiplyNumbers(15, 15))); //this will return numbers

const sum1 = addNumbers(20, 15);
const sum2 = addNumbers("1", "9.123");
const product = multiplyNumbers(10, 5);

function greeting(name) {
    return `Hello ${name}!!`;
}

//rest - accept unlimited number of parameters
function sumNumbers(...numbers) {
    let total = 0;
    for (index in numbers) {
        total += numbers[index];
    }

    return total;
}

function addPetOwner(ownerName, ...petNames) {
    console.log(`Hello ${ownerName}, here's the list of your pets:`);
    petNames.forEach(pets => {
        console.log(pets);
    });
}

function findTotal(greetName, ...numbers) {
    let total = 0;
    for (index in numbers) {
        total += numbers[index];
    }
    return `${greetName}: the total is ${total}`
}

const newTotal = findTotal("ccino", 1, 4, 7, 5);

//objects with functions
const student = {
    'name': "Alondra",
    'age': 24,
    'course': 'BSIT',
    'height': "5'0\"",
    'weight': "60kg",
    'showTalent': function (talent = "Sing") { //adding default parameter "Sing"
        console.log(`${student['name']} started to ${talent}`);
    },

    talk(to = "teacher") { //object literal
        console.log(`I am talking to ${to}`);
    }
}

//accessing an object
console.log(student['name']);

//we can add to the object
student['year'] = 4;

//Access the function
student.showTalent();
student.showTalent("Draw");
student.talk();
student.talk("Sir G");