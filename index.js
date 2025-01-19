//  console.log(`Hello`);
// console.log(`I ike pizza`);

// window.alert(`An alert`);

// This is a comment

/* this is also a comment */

// document.getElementById('myH1').textContent= 'Hello';
// document.getElementById('myP').textContent = `World`;
// --------------------
// variable

// let x; // variables name should be unique
// x= 100;
// let y = 123;

// let age = 25;
// let price = 10.99;
// let gpa=2.1

// console.log(age);
// console.log(`you are ${age}`);// template literal it is easy way to create mu
// // line strings

// // a string is a series of characters

// let firstName = "Bro";

// console.log(typeof firstName);

// // booleans are true /false

// let online = true;
// console.log(typeof online);



// let fullName="Bro code";
// let age = 25;
// let student= false;

// document.getElementById("p1").textContent = fullName;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = student;
// ---------------------------------
// Arthmetic operators
// let students = 30;
//  // students = students+1;
//  students += 1;
// console.log(students);

// //How to accept user input using textbox
// let userName;
// document.getElementById("mysubmit").onclick = function() {
// userName = document.getElementById("myText").value;
// console.log(userName);
// }
// ------------------------------------------------
// type conversion: change the datatype of a variable
 // let age= window.prompt("How old");

 // console.log(age, typeof age); // This is string by default window.propt always returns string

 // age = Number(age);// use Number function

 // console.log(typeof age)// change to number
// let x = "";
// console.log(x, typeof x, 'check')
// ----------------------------------------------------------
//const
// cannot change the value of that variable
// --------------------------------------
// COUNTER PROGRAM

// const dec = document.getElementById("decre");
// const reset= document.getElementById("reset");
// const incr= document.getElementById("inc")
// const countlabel = document.getElementById("countLabel");
// let count = 0;


// incr.onclick = function(){
//     count++;
//     countlabel.textContent = count;
// }

// dec.onclick= function() {
//     count--;
//     countlabel.textContent = count;

// }

// reset.onclick= function() {
//     count = 0;
//     countlabel.textContent = count;
    
// }
// --------------------------------------------
// Checked property

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function() {
    if(myCheckBox.checked) {
        subResult.textContent = `you are subscribed`;
    }
    else {
        subResult.textContent = `you are not subscribed`;
    }
    if(visaBtn.checked) {
        payResult.textContent = `you are paying visa`;
    } else if (masterCardBtn.checked) {
        payResult.textContent = `paying with master card`
    }
    else{
        payResult.textContent = `select some thing`;
    }
}
// ------------------------------------------------------

// Ternary operator

let age= 21;

let message = age >=18 ? "you are eligible" : "you are not"
console.log(message);

// SWITCH STATEMENT

let day = 1;
switch(day) {
    case 1: 
        console.log("its monday");
        break;
    case 2:
        console.log("its tues");
        break;
        default:
            console.log("nothing");

}
// ----------------------------------------------------------

// String Methods

let userName = ' BroCode';

//userName = userName.trim(); // trims white space
//userName = userName.toUpperCase(); 
// toLowerCase,replaeAll many inbuilt string methods have in same way
console.log(userName);
// ---------------------------------
// striing slicing
// crate a sub string from the portion of another string
const fullName="Bro Code";

// let firstname = fullName.slice(0,2);
// console.log(firstname);

let firstName = fullName.slice(0, fullName.indexOf(" ")); // takes till that space
let lastName= fullName.slice(fullName.indexOf(" ") + 1);// finds first letter and gives everything after that without space
console.log(lastName);
console.log(firstName);

// -------------------------------------------------
// Method Chaining

// No Method Chaining
// Writes everything speratley like 
// const avc = userName.trim();
// with Method
// username= username.trim().charAt(0).toUpperCase() + username.trim().slice(1).tolowerCase();
// ------------------------------------------------------

// Logical operator(&& || !)

// const temp = -20;
// if(temp > 0 && temp <= 30) {
//     console.log("good");
// } else {
//     console.log("Bad");
// }

// const isSunny = true;
// if(isSunny){
//     console.log("yes");
// } else {
// console.log("no");
// }
// ------------------------------------------------------------

// String Equality

// const PI = 3.14;
 
// if(PI !== "3.14") { // only check values if === check data type as well
//     console.log("some");// !== same value but type different
// } else {
//     console.log("few");
// }
// While Loop: repeats code while some cond is true


// for Loop: Repeat some code a limited amount of times

// for(let i=0; i<=2; i++) {
// // console.log("hello"); // gives hello 3 times
// console.log(i);// gives 0, 1 ,2
// }

// for(let i=2; i<=10; i+=2) {
// // console.log("hello"); // gives hello 3 times
// console.log(i);// 2, 4, 6, 8,10
// }

for(let i=10; i > 0; i--) {
// console.log("hello"); // gives hello 3 times
console.log(i);
}

for(let i=1; i<=20; i++) {
    if(i ==13){
    continue; // dont give 13th iteration if its break then it will cut after 12
    } else {
    console.log(i);
    }
}
// --------------------------------------------------
// Function= section of reusable code

function happyBirthday(user) {// parameters
    console.log(`${user}`);
    console.log("bbd");
}
happyBirthday("vh");// arguments
happyBirthday("hgvhgvyjhgv")

// function add(x,y) {
//     //let result = x+y; // return it to get the result;
//     return x+y;
// }
// console.log(add(2,4));

// function isEven(number){
//     if(number %2 === 0) {
//  return true;
//     }
//     return false; // here we can use terary operator as well
// }
// console.log(isEven(10));

function isValidEmail(email){
if(email.includes("ok")) {
    return true;
}
return false;
}
console.log(isValidEmail("Bro@fake.com"));
// ------------------------------------------------------
// Variable Scope: local vs global

function function1() {
    let x=1;
    console.log(x);
}

function function2() {
    let x=2;
    console.log(x);
}
//-----------------------------------------------------------

// Array: which holds more than 1 value

let fruits = ["apple","banana"];

// // fruits[0] = "coconut"
// //fruits.push("pineapple")
// fruits.pop() // removes last element
// console.log(fruits);
// // adding element to array

// // to check the length
// let numOfFruits = fruits.length;
// console.log(numOfFruits);
// let index = fruits.indexOf("apple");// gets index
// console.log(index);

// for looping use for loop

// for (i=1; i<fruits.length;i++) {
// console.log(fruits[i]);
// }
for (let fruit of fruits) {
    console.log(fruit);
}
fruits.sort();
// --------------------------------------------------------
//Spread Operator: iterable such as an array or string to be expanded to separate
//elements
let numbers = [1,2,3,4,5];
//let maximum= Math.max(numbers);// This wont give you the max number as it is array
let maximum= Math.max(...numbers);// spreading array to different elements

console.log(maximum);
let userName1 = "Bro Code"
//let letter = [...userName1];//spreads individua characteres of string into array
// Insert characters between the elements use join method
let letter = [...userName1].join("-");
console.log(letter);

let fruits1 = ['apple', 'orange','banana'];
let newFruits = [...fruits1];
console.log(newFruits);
// ------------------------------------------------
// Rest Parameter: bundles seperate elements to an array
function open(...foods) {
console.log(foods);
console.log(...foods);// spread operator
}
const food1 = "pizza";
const food2= 'sushi';
open(food1,food2);


function sum(...numbers) {// using rest operator
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1,2,3,9);
console.log(total);
// ------------------------------------------------------------
// Callback: passed as an argument to another function.
hello(goodBye); // passing goodbye function as an argument to another function
function hello(Callback1) { // any parameter
console.log("Hello")
Callback1();// invoke nothing but calling, here calling it
}

function goodBye() {
    console.log("GodBye!");
}
// sum(displaypage,9,1)
// function sum(callback11, x,y) {
//     let result = x+y;
//     callback1(result);
// }
// function displayResult(result) { //not working
// console.log(result);
// }
// function displaypage(result) {
//     document.getElementById("myH1").textContent = result
// }
//-------------------------------------------------------------------
// For Each: iterates over the elements

let digits = [1,2,3,4,5];
digits.forEach(display)
digits.forEach(double);
 function display(element){
    console.log(element);
 }
 function double(element, index, array) {
    array[index] = element * 2;
    console.log(array[index]);
 }

 let fruit = ["orage", "banana"];
 fruit.forEach(upperCase)
  fruit.forEach(display)
function display(element) {
    console.log(element);
}
function upperCase(element,index,array) {
    array[index] = element.toUpperCase();
}
//---------------------------------------------
//.map(): creates a new array by applying function to each element

const num = [1,2,3,4];
const squares =num.map(square);
console.log(squares);
function square(element) {
    return Math.pow(element,2);
}
//---------------------------------------------
//Filter Method: creates a new array by filtering the elements


let no = [1,2,3,4,5,6,7];

const filtering = no.filter(isEven);
console.log(filtering)
function isEven(element) {
    return element % 2 === 0;// here checks and gives true or false
}
//------------------------------------------------
// Static
//keyword that defines properties or methods to a class itself rather than
// objects created from that class
// class own anything in static

class MathUtil {
   static PI = 3.14
}
console.log(MathUtil.PI);

 class User {
     static userCount = 0;

     constructor(username) {
        this.username = username;
        User.userCount++;
     }
 }

 const user1 = new User("spongebob");// object
 const user2 = new User("Patrick")
 console.log(user1.username);
 console.log(User.userCount);
 //----------------------------------------------------------------
 // Inheritance: allows a new class to inherit properties or methods from an 
 // existing class(parent -> child) helps with code reusability
// This is parent
class Animal {
    alive = true;

    eat() {
        console.log(`${this.name}`);
    }
    sleep() {
        console.log(`${this.name}`);
    }
}
//This is child
class Rabbit extends Animal {// use extends keyword get properties /methods from parent class
    name="Rabbit";
}
class Fish extends Animal {
    name="starFish";
}

const rabbit = new Rabbit();// creating an object
const fish = new Fish();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
//------------------------------------------------
// super: It is a keyword used  in classes to call the constructor or access the
// properties and methods of a parent
// this= this object
// super = the parent
//-------------------------------------------------------------\
//gettres & Setters

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property


class Rectangle {
    constructor(width,height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if(newWidth > 0) {
            this._width = newWidth;
        } 
        else {
            console.error("width")
        }
    }
    get width() {
        return this._width;
    }
}

const rectangle = new Rectangle(3,4);

console.log(rectangle.width,rectangle.height);
//--------------------------------------------
// destructing = extract values from array and objects then assign them to/
// variables in convinent way
// []: array destructing
//{}: object destructing


// swap the values of 2 variables array
let a = 1;
let b = 2;

[a,b] = [b,a];
console.log(a);
console.log(b);

const colors =["red", "green", "blue"];
[colors[0], colors[2]] = [colors[2],colors[0]]// swapping

console.log(colors);

// extract values from objects

const person2 = {
    firstName:"bjhn",
    age:30,
}
const person3 = {
    firstName:"bjhnss",
    age:90,
}

//const {firstName, age} = person2;
//------------------------------------------
// nested objects: objects inside of other objects

const person = {
    fullName: "spongebob",
    age:30,
    hobbies:["karate","jellyfish","cooking"],
    address: {
        street:"124 const st",
    }
}

console.log(person.fullName);
// Array of objects

//.reduce()

const prices = [5,30,10,25,15,20];

const total1 = prices.reduce(sum);
console.log(total1);

function sum(previous,next) {
 return previous + next;
}
//------------------------------------------------
// function declaration,
//  function hello(){
//     console.log("hello");
// }
//  function expression

// const hello = function(){
//     console.log("hello");
// }
//hello();

//setTimeout(hello, 3000);// after 3 sec hello will written

setTimeout(function(){
    console.log("hello");
},3000);
//------------------------------------------------------
// Arrow functions:
const hell = (name) =>{
    console.log(`${name}`);

}
hell('bro');

// setTimeout(hey, 3000);

// function hey() {
//     console.log('hey');
// }

//another way

setTimeout(function(){
    console.log("hello");
},3000
)
// another example
const nums = [1,2,34];

const squares1 = nums.map((element => Math.pow(element,2)));
// used arrow function to need to have return if only one line
console.log(squares1);
//---------------------------------------
// objects: a collection of related properties


const person1 = {
    name: "bob",
    lastname: "man",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi")}
}
// const person2 = { // couldn't have the same object names take it differently
//  name: "bob"
// }
//console.log(person.name);
console.log(person1.sayHello()
)
//--------------------------------------------------
//this keyword: reference to the object

const per = {
    name:"chinni",
    sayHello: function(){console.log(`${this.name}`)}// use this keywordto access that property
}

per.sayHello();
//---------------------------------------------------------
// Constructor

function car(make,model,year) {
this.make= make,
this.model=model,
this.year = year
this.drive = function(){console.log(`${this.model}`)}
}

const car1 = new car("some","ford", "2024");// creating the instance using new 
// and here car is the constructor
console.log(car1.make);
car1.drive();
//----------------------------------------------------

//Class: ES6 Feature provides a more structured way to work with objects
class product{
    constructor(name,price){
        this.name= name;
        this.price = price;
    }
    displayProduct(){
        console.log(`${this.name}`);
    }
}
const product1 = new product("shirt", 20);
product1.displayProduct();
//------------------------------------------------------

