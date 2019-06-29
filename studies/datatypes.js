/* 
*   DATA TYPES:
*
*   Data types indicate to the program whether an input value is a number, string, boolean,
*       object, etc..., so that it can perform the equivalent operation.
*
*   Simple Data Types:
*       Data Types that can only hold one value at a time
*       When assigning or passing, simple datatypes are copied from one variable to the next
*       Variables can directly store simple datatypes because they are a fixed size
*
*   0. Number
*       Number data types are used to represent positive and negative whole numbers
*/          let num1 = 2;
            let num2 = 32;
//      To represent decimal numbers
            let decNum = 3.14;
//      To represent numbers in exponential notation
            let expoNum1 = 6e+5;    // ==> 600000
            let expoNum2 = 7e-5;    // ==> 0.00007
//      To represent mathematical Infinity, -Infinity, or NaN (Not a Number)
            7/0; // => Infinity
            7/-0; // => -Infinity
            7/'M'; // => NaN
            
/* 1. String
*       String data types are series of characters written within single or double quotes
*/
            var myName = "Marc"; // double quotes
            var myNotes = 'Too many notes'; // single quotes
            var myCar = "That's my car"; // apostrophe works in double quotes
            var heSaid = 'He said "hello"'; // quotes work inside single quotation strings
            var sheSaid = "She said \"Come in\""; // quotes using backslash
            
/* 2. Boolean
*       Boolean data types are true or false comparisons
*/
            6 > 5; // => true
            6 > 7; // => false
            6 == '6'; // => true
            6 === '6'; // => false 6 does not strictly equal '6'
            6 === 6; // => true
            
/* 3. Undefined
*       Undefined data types are for variables that have been declared but have not yet 
*           been assigned value
*/
            var x;
            var y = 7;
            console.log(x); // logs undefined
            console.log(y); // logs 7
            
/* 4. Null
*         Null is equal to 'nothing'. It is the empty value of an object
*/
            var z;
            console.log(z); // logs undefined
            var z = "Hello";
            console.log(z); // logs Hello
            var z = null;
            console.log(z); // logs null

/*  Complex Data Types
*       Data types that are used as containers for other data
*       When assigning or passing, complex datatypes are copied by reference
*       Because variables can only hold up to 8 bytes of memory and complex datatypes are
*           not a fixed size, variables simply hold a reference to the actual complex data
*
*   5. Array
*       An Array is a complex data type used to store lists of multiple data types
*           within brackets []
*       Can contain data of any type: numbers, strings, booleans, functions, objects,
*           and other arrays
*       Every value in the array has a listed index position beginning at 0
*/
            [] // array literal
            var anArray = []; // array literal assigned to a variable
            var myArray = ['cats', 'dogs', 'birds'] // array literal with string data
            myArray.length // returns 3 because there are 3 elements in the array
            myArray[0] // returns 'cats' because it is at the 0 index
            // 'cats' index is [0], 'dogs' [1], 'birds' [2]
            
/*  6. Object
*       An Object is a complex data type used to store collections of data relating to a single 
*           object within braces {}
*       Can contain data of any type: numbers, strings, booleans, functions, arrays,
*           and other objects
*       Data is stored in {key: value} pairs saparated by commas
*/
            {} // object literal
            var anObject = {}; // an object literal assigned to a variable
            var myObject = {
                key1: 1,
                key2: 2,
                key3: 3
            }; // object literal with number data assigned to key1, key2, key3
            
            myObject['key2']; // Bracket notation returns 2
            myObject.key2; // Dot notation returns 2. If key has spaces or special characters, 
                           // dot notation will not work

/* 7. Functions
*       Functions are reusable objects that take in and process inputs and return new values
*       There are four parts to declaring a function
*           1 - Name
*           2 - Parameters / Arguments
*           3 - Function Body (to run code)
*           4 - Return Statement
*/
        function doEasyMath(num1, num2) { // declares function name and gives it two parameters 
                return num1 + num2; // return statement
            }

   
