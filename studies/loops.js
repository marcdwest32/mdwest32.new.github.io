/*
 *  LOOPS:
 *
 *  Loops are used when you need to run the same block of code multiple times
 *  to produce different values
 *
 *      1. While Loops
 *
 *          Loops through a block of code while the one givven condition is true
 *          It is important to make sure the variable increments toward the stop condition
 *          otherwise it will crash the browser
 *
*/              var num = 1;
                while (num < 10) {     // while the number is less than 10
                    console.log(num);  // block of code to be run
                    num++;             // increment up toward 10
                }

/*                var num1 = 1;
 *                while (num1 < 10) {     // without properly incrementing    
 *                    console.log(num1);  // the while loop will run forever 
 *                }                      // causing the browser to crash
 *
 *  
 *      2. Do / While Loops
 *
 *          Like the while loop except the code will always be executed at least once
 *          even if the condition is false
 *          Always make sure to increment toward the stop condition to avoid crashing
 *
*/              var num2 = 13;
                do {
                    console.log(num2);   // block of code to run
                    num2++;              
                } while (num2 < 5);      // statement is false but code runs once and logs 13
/*
 *      3. For Loops
 *
 *          For Loops are designed for looping forward or backward over arrays,
 *          or for when you need to do something a set number of times
 *          For Loops take three statements
 *              1. Statement 1 - var index = 0;        <== starting point
 *              2. Statement 2 - index < array.length; <== stopping point
 *              3. Statement 3 - index++;              <== increment counter
*/                  
                    var myArray = [1, 2, 3, 4, 5,];
                    
                    for (var i = 0; i < myArray.length; i++) {      // For Loop forward over an array
                        console.log(myArray[i]);
                    }
                    
                    for (var i = myArray.length-1; i > -1; i--) {   // For Loop backward over an array
                        console.log(myArray[i]);
                    }
/*
 *      4. For / In Loops
 *
 *          For / In Loops are used for looping over objects
 *          For / In Loops take only one statement which declares a variable 'key'
 *          and specifies which object to loop over
*/
                let myPets = {
                    dog: 'Butters',
                    cat1: 'Mr Mee',
                    cat2: 'Monster',
                    cat3: 'Lydia'
                };
                
                for (let key in myPets) {
                    console.log(myPets[key]);   // logs the value at each key
                }                               // bracket[] notation must be used to access object values
                
                for (let key in myPets) {
                    console.log(key);           // logs each key name in the object
                }
                

