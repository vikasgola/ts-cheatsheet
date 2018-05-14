

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