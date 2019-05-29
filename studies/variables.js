/*
 * VARIABLES:
 *
 * 1. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 2. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 3. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* DECLARATIONS
 * Variables are declared differently depending on scope (where they are available)
 * 1. var
 * 2. let
 * 3. const
*/

/* 1. var - Global scope when declared outside of a function
 *          Local scope when declared inside of a function
 *          var is problematic if a variable with the same name has already been defined and you are unaware
*/
var something = "chair";

    function doSomething() {
        var somethingElse = "table";
    } 
    console.log(something); // logs "chair"
   // console.log(somethingElse); // error: somethingElse is not defined

/* 2. let - Block scoped
 *          A block of code is code contained within braces {} 
 *          let can only be used within the block {} it is in
*/
   var num1 = 10;

   if (num1 > 0) {
        let answer = "greater than";
        console.log(answer); // "greater than"
    }
   // console.log(answer); // answer is not defined
   
// let can be updated within its scope but not redeclared within its scope
    let pet = "cat";
    pet = "dog";
    console.log(pet); // logs "dog"

    /* let food = "tacos";
     * let food = "pizza";
     *
     * console.log(food); error: food has already been declared
    */
    
    let food = "tacos";
    if (true) {
        let food = "pizza";
        console.log(food); // "pizza"
    }
    console.log(food); // "tacos"
    // works because both instances of food are declared in different scopes
    
/* 3. const - Block scoped
 *            Only accessible within its block {} of code
 *            maintains a constant value
 *            CAN NOT BE RE-DECLARED OR UPDATED
*/

    const message = "not going anywhere";
//  message = "go away"; // TypeError: Assignment to constant variable. 
//  const message = "go away"; // TypeError: Assignment to constant variable.

/* HOISTING
 * variable declarations and function declarations are taken to the top of their local scope if declared inside function
 *                                                                or to top of global scope if declared outside function
 * different types are hoisted differently
 *      variable - only name is hoisted
*/
                    console.log(drink); /* returns 'undefined' instead of reference error because variable name is hoisted. 
                                        Does not log 'coffee' because value is not hoisted. */
                    var drink = 'coffee';

//      functions - name and function body are hoisted
                   
                   addNums(4, 4); // returns 8 because function name and body are hoisted

                    function addNums(num1, num2) {
                        return num1 + num2;
                    }
         
