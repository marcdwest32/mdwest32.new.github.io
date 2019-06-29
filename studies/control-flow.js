/*
 * CONTROL-FLOW:
 *
 * Control-Flow is the order in which the computer executes code
 * Code runs in order from the first line to the last line unleess interrupted by conditional statements
 * Conditional Statements test values based on true or false conditions and determine if any further actions are performed
 *
 *  0. If Stetements 
 *
 *      If Statements execute a block of code only if the given condition is true
*/
            let num1 = 10;
            
            if (num1 > 5) {
                console.log('greater than'); // logs "greater than" to the console
            }
            
/*  1. If / Else Statements
 *
 *      If / Else Statements execute one block of code if a given condition is true
 *      or another block of code if the condition is false
*/      
            function ageChecker(age) {  
              if (age >= 18) {              // evaluates whether age is greater than or equal to 18
                console.log('Entry');       // logs 'Entry' if true, if false, code continues to run
              } else {                      // if false code continues to run
                console.log('No Entry');    // logs 'No Entry' if false
              }
              }
            ageChecker(17);

/*  2. If / Else If / Else Statements
 *
 *      Used to check multiple If / Else statements against various conditions
*/
            function dailyPlanner(time) {
                if (time < 12) {
                    console.log('cereal and cartoons');      // evaluates to false
                } else if (time < 18) {                     // does not log
                    console.log('contribute nothing to society');    // false
                } else if (time < 21) {
                    console.log('school time');              // false
                } else {                                    // if no other conditions are true
                    console.log('sleep and weep');           // logs default 'sleep and weep'
                }
            }
            
            dailyPlanner(22);
            
/*  3.  Switch Statements
 *
 *      Used to check multiple If / Else If statements
 *      Use when multiple if statements merit the same result
 *      Matches an expression value to a case and executes statements matching that case
 *      Only tests for strict equivalency
 *      Break statements should end cases to avoid unintentionally executing code
*/
            
            var pet = 'raccoon';

            switch (pet) {
              case 'cat':
              case 'dog':
                console.log('yes');          // false
                break;
              case 'iguana':
              case 'parrot':
                console.log('no');           // false
                break;
              case 'fish':
              case 'chicken':
              case 'cow':
                console.log('food');       // false
                break;
              default:
                console.log('Wild Animal');     // defaults if nothing is true
            }

