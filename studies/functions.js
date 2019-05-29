/*
 *  FUNCTIONS:
 *
 *  Functions are blocks of code designed to perform specific tasks
 *  Functions may be reused as many times as needed
 *
 *      1. Defining / Declaring
 *          Functions can be declared by using the keyword 'function' followed by a 
 *          function name and parentheses ()
*/
                function myName(str1, str2) {       //  Declare a function named myName
                    return str1 + ' ' + str2;       //  Code Body the function performs
                }                                   //  Close the function
                
//          Functions may also be declared using a function expression

/*              var myName = function(str1, str2) { //  Declare a function variable myName
 *                  return str1 + ' ' + str2;       //  Code Body
 *              }
*/

/*
 *      2. Executing / Invoking / Calling
 *          Functions are used by keying in the name of the function followed by arguments 
 *          (if necessary) inside parentheses ()
*/
                myName('Marc', 'West');             //  Returns 'Marc West'
                
/*      
 *      3. Parameters
 *          Functions may use parameters as placeholders for the data we want to pass
 *          into the code body        
*/
                function addNums(num1, num2) {      //  has two parameters, num1 and num2,
                    return num1 + num2;             //  clearly named so we know what data type
                }                                   //  the function requires
/*
 *      4. Arguments
 *          When invoking functions we pass data known as Arguments to the code body
 *          to get a result
*/
                addNums(3, 5);                      // Arguments 3 and 5
/*
 *          Functions do not always require parameters and arguments
 *          If a function is created without inputs or outputs it will return 'undefined'
*/
                function myFunction() {             //  Function with no parameters             

                }

                myFunction();                       //  Returns 'undefined'
                
/*      
 *      5. Scope
 *          Scope defines where variables and functions are accessible
 *            
 *              1. Global Scope - all code outside of a function body
 *                  Functions have access to all variables in the Global Scope
*/
                    var pet = 'dog';                //  Global variable

                    function myPet() {
                        return pet;                 //  Accesses global variable
                    }

                    myPet();                        //  Returns 'dog
/*
 *              2. Local / Function Scope - all code within the body of a function
 *                  Locally declared variables and functions are  only accessible within that function
*/
                    function myCar() {
                        var car = 'Hyundai';
                        return car;
                    }
                    
                    myCar();                        // Returns 'Hyundai'
                    
//                  console.log(car);               // ReferenceError: car is not defined

/*
 *                  Sometimes functions are declared within other functions
 *                  Child Functions can access parent scopes
*/
                    function nameStuff() {          // Parent Function 'nameStuff'
                        var you = 'John';           // Parent Scope variable 'you' declared
                        function reNameStuff() {    // Child Function 'reNameStuff'
                            you = 'Steve';          // Child Function has access to Parent Scope variable 'you'
                        }
                        reNameStuff();
                        console.log(you);           
                        }
                    
                    nameStuff();                    // Invoking function logs 'Steve' to the console
 
 //                 Parent Functions can NOT access Child Scope
 
                    function nameYou() {            // Parent Function 'nameYou'
                        function reNameYou() {      // Child Function 'reNameYou'
                            var you = 'Zack';       // Child Scope variable 'you' declared
                        }
                        reNameYou();
//                      console.log(you);           // 'you' is not defined outside the Child Scope
                    }
                    
                    nameYou();                      // Invoking function throws ReferenceError: you is not defined
/*                    
 *      6. Closures
 *          A Child Function with access to the Parent Scope, even after the Parent Function has closed, using Parent Variables
 *          Has three scope chains
 *              Can access its own Scope
 *              Can access Parent Scope
 *              Can access Global Scope
*/

                function greeting(place) {
                    var welcome = "Welcome to";     // Child Function has access to Parent Function variables and parameters
                    function makeGreeting () {        
                        return welcome + " " + place;    
                    }
                    return makeGreeting();
                }

                greeting("New Orleans");            // Returns "Welcome to New Orleans"
                greeting("Atlanta");                // Returns "Welcome to Atlanta"
                greeting("Portland");                // Returns "Welcome to Portland"
                
//              This allows us to restrict access to  the variable 'welcome' to only the function 'greeting'

//              console.log(welcome);               // Logs 'undefined'
                var welcome = "hello";              // Declaring a new global variable with the same name 'welcome' 
                console.log(welcome);               // Logs 'hello' to the console

                console.log(greeting('the end'));   // Logs "Welcome to the end" because our closure variable still functions
         

