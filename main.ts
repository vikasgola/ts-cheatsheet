

// Compile the code with command
//----------------- tsc main.ts----------------


// After compiling, a file will be generated as output
// of name main.js that will contain the js conversion of this file

// ts to js conversion process called transpilation

// tsc (ts compiler) only deals with the files .ts and .d.ts


// ts program is composed of
// --- modules
// --- Functions
// --- variables
// --- statements and expressions
// --- comments

// ts-keywords: each word below is a keyword
// --- break as any switch
// --- case if throw else
// --- var number string get
// --- module type instanceof typeof
// --- public private enum export
// --- finally for while void
// --- null super this new
// --- in return true false
// --- any extends static let
// --- package implements interface function
// --- new try yield const
// --- continue do catch finally


// semicolons are optional



// ===================Built-in Types and variables========================

var allInOne:any = "hello world!"; // any type can have any type and this type is dynamic
var allInOne2;   // equivalent to any

var num:number = 123;   // number type for integers and floats
var num2:number = 123.12;

var trueOrFalse:Boolean = true;     // boolean type
var notDefined:void;       // void type for functions which returing nothing

var notExist:null;      // not type


// undefined type that is not initialized
var notInitialized:undefined;
var notInitialized2:string;

// Type assertion
var stringToNumber = <number> allInOne;
// similarly others

// Note:-(Important) there is no auto conversion in ts like js
// once type of varibale is defined it will always be remains same.


// ======================Variable Scopes=======================

var global=12;       //global variable

class Numbers{
    numClass=13;         //class variable
    static numStatic=10;     //static field
    storeNum():void{
        var numLocal=14;       //local variable
    }
}


// ===================Operators========================

// arithmetic operators
var sum = 1 + 2;
var sub = 1 - 2;
var mul = 1 * 2;
var div = 1 / 2;
var mod = 1 % 2;
sum++;      // increment
sub--;      // decrement

var a:number = 13;
var b:number = 123;

// relational operators
a > b;      //greater than
a < b;      // less than
a >= b;     // grater than or equal
a <= b;     // less than or equal
a == b;     // check equals
a != b;     // check not equals

// logical operators
a && b;     // and
a || b;     // or
!a;         // not

// bitwise operators
a & b;      // bitwise and
a | b;      // bitwise or
a ^ b;      // bitwise xor
~ b;      // bitwise not
a << b;      // leftshift
a >> b;      // rightshift

// Assigment operators
a += b;
a -= b;
a /= b;
a *= b;
a = -b;

// string operators
var msg:string = "hello" + " world!";       // concatenation

// Conditional operator: '?'
// if num >0 then result = "positive" else result = "non-positive";
var num:number=-2;
var result= num > 0 ?"positive":"non-positive";

// Type operators: unary operator
typeof result;      // give string



// ==================Conditional Statements===================
var num:number = 12;

// if statements
if(num > 1){
    num = 0;
}

// if and else
if(num == 12){
    num = -12;
}else{
    num = 12;
}

// switch
switch(num){
    case 0: 
        console.log("zero");
        break;
    case 12:
        console.log("tweleve");
        break;
    case -12:
        console.log("minus twelve");
        break;
    default:
        console.log("different");
}


// =====================Loops===========================

// while loop
var num:number=5;
var factorial:number=1;
while(num >=1){
    factorial=factorial * num;
    num--;
}
console.log("The factorialis "+factorial);

// for loop
// for (initial_count_value; termination-condition; step){
//      statements
// } e.g.======
var num:number= 5;
var i:number;
var factorial=1;
for(i=num;i>=1;i--){
    factorial*=i;
}
console.log(factorial)

// for-in loop
// for (var val in list){
//     //statements
// }


// do-while loop
// do{
//     //statements
// }while(condition)

// break statement will exit the loop at the point of break statement immediately


// =======================functions==================

function function_name(){
// function body
}

//the function returns a string
function greet():string{
    return "hello world";
}

function test_param(n1:number,s1:string){
    // funtion body
}


// Optional parameters: adding ? to end of variable name
function disp_details(id:number,name:string,mail_id?:string){
    console.log("ID:", id);
    console.log("Name",name);
    if(mail_id!=undefined)
        console.log("Email Id",mail_id);
}

// Rest parameters
function addNumbers(...nums:number[]){
    // function body
    // rest parameters has to be of same type
}

// Default parameters
function calculate_discount(price:number,rate:number = 0.50){
    // function body
    // in case of only one parameter. rate will be 0.5
}

// Anonymous function
var Anonymous = function(parameters){
    return "hello world";
}

// Function Constructor
var myFunction = new Function("a", "b", "return a * b");

// Lambda expression
// ( [param1, parma2,...param n] )=>statement;
var lambda=(x:number)=>10+x;


// ===================Numbers======================

var num:number = 123456789;

// Properties
Number.MAX_VALUE;
Number.MIN_VALUE;
Number.NaN;
Number.NEGATIVE_INFINITY;
Number.POSITIVE_INFINITY;
Number.prototype;

// Methods
num.toExponential(1);
num.toFixed(2);         // to 2 decimal points
num.toLocaleString();   // to strings
num.toPrecision(3);     // 3 digits
num.toString(2);        // to base 2
num.valueOf();


// ===================Strings==========================

var str:string = "Hello world!";

// Properties
str.length;
str.constructor;

// Methods
str.charAt(1);          // e
str.charCodeAt(2);      // 108
str.concat(" added");   // Hello world! added
str.indexOf("added");   // -1           we didn't saved the concat result
str.lastIndexOf("d");   // 10
str.localeCompare("hello world!");
str.match("hello world!");      // null
str.replace("added" , "");      // Hello world!
str.search(" ");          // 5
str.slice(1,4);         // ell
str.split("",6);        // ["H","e","l","l","o"," "]
str.substr(1,4);        // ello
str.substring(1,4);     // ell
str.toLowerCase();      // hello world!
str.toUpperCase();      // HELLO WORLD!


// =========================Arrays==============================

// all array elements has to be of same type
var numArray:number[];      // similarly string, bool arrays can be created
var names:string[]=new Array("Mary","Tom","Jack","Jill");           // another way to define
numArray = [1,23,1,6];
var multi:number[][]=[[1,2,3],[23,24,25]]

// Methods
numArray.concat([1,3,6]);           //[1,23,1,6,1,3,6]  note that it will give a new array
numArray.every(function(a){ return a>0});   // true
numArray.filter(function(a){ return a%3 == 0});     // [6]
numArray.forEach(function(a){ console.log(a)});     
numArray.indexOf(1);            // 0
numArray.lastIndexOf(1);        //  2
numArray.map(function(a){ return a%3 == 0});    // [false, false, false, true]
numArray.pop();             // [1,23,1]     note that it will give a new array
numArray.push(6);           //  [1,23,1,6,6]
numArray.reduce(function(a,b){ return a-b;});   // -9
numArray.reverse();     // [6,1,23,1]
numArray.shift();       // 6
numArray.sort();        // [1,1,6,23]
numArray.some(function(a){ return a%3 == 0});    // true


// ==================Tuples======================

// Tuples are mostly the arrays in which is made of different types
// e.g. you can make a array of integers and floats and strings

// ==================Unions=======================
var val:string|number;
var valArray:string[]|number[];

// ===================Interfaces================
interface IPerson{
    firstName:string,
    lastName:string,
    saySomeThing: ()=>string
}

// use of interface
var customer:IPerson = { 
    firstName:"Hello",lastName:"World",
    saySomeThing: ():string =>{return "Hi there"}
}
customer.firstName;

// interface and arrays
interface namelist{
    [index:number]:string
}
var namesList:namelist=["John","Bran"];

interface ages{
    [index:string]:number
}
var agelist:ages;
agelist["John"]=15;

// interface and inheritance
interface Person{
    age:number
    name:string
}
// Musician have access to all property of person interface
interface Dancer extends Person{
    danceStyle:string
}
var dancer:Dancer;
dancer.name = "Prince";
dancer.age=27;
dancer.danceStyle = "contemporary";