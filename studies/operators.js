/*
 *  OPERATORS:
 *
 *  Operators assign values, compare values, perform arithmetic operations, etc...
 *
 *  1.  Assignment Operators
 *
 *      1. The Assignment Operator = is used to assign and reassign values to variables
*/
            let myVar = "A";    // assigns string value "A" to myVar
            myVar = 5;      // reassigns myVar to numeric value 5 
            
//      2. += Operator adds the variable and the value on the right and assigns the sum to the variable

            var sumVar = 2;  // value of 2 assigned to sumVar
            sumVar += 3;     // sumVar value now 5
            
//      3. -= Operator subtracts the value on the right from the variable and assigns the difference to the variable

            var diffVar = 10; // assigned 10
            diffVar -= 3;     // diffVar value now 7
            
//      4. *= Operator multiplies the variable by the value on the right and assigns the product to the variable

            var prodVar = 5;
            prodVar *= 4;     // prodVar value now 20
            
//      5. /= Operator divides the variable by the value on the right and assigns the quotient to the variable
            
            var quotVar = 21;
            quotVar /= 3;     // quotVar value now 7
            
//      6. %= Operator assigns the remainder of dividing the variable value by the value on the the right to the variable

            var remainVar = 18;
            remainVar %= 3;     // remainVar now 0
            var remainVar2 = 9;
            remainVar2 %= 2;    // remainVar2 now 1
  
/*
 *  2. Arithmatic Operators
 *      Operators that perform matheamtical operations on numbers
 *  
 *      1. + Operator produces the sum of two values
*/
            var add = 6 + 4;  // add will be 10
            
//      2. - Operator produces the difference of two values

            var sub = 6 - 2;  // sub will be 4
            
//      3. * Operator multiplies two values

            var mult = 6 * 6;   // mult will be 36
            
//      4. / Operator divides two values

            var div = 12 / 2;   // div will be 6
            
//      5. % Operator produces the remainder of two values

            var remain = 6 % 4; // remain will be 2
            
/* 
 *  3. Comparison Operators
 *       Operators that are used to test if a statement is true or false
 *
 *      1. == Operator tests for equal value regardless of type
*/          7 == 7;  // true
            7 == "7";  // true
            7 == 5;  // false
            
//      2. === Operator tests for strict equality based on value and type
            8 === 8;  // true
            8 === "8";  // false
            
//      3. != Operator tests whether two values are not equal
            8 !=  5;  // true
            8 != "8";  // false
            8 != 8;  // false
            
//      4. !== Operator tests whether two values are not equal in type or value
            5 !== 5;  // false
            5 !== "5";  // true
            5 !== 6;  // true
            
//      5. > Operator tests whether one value is greater than the other
            12 > 7;  // true
            12 > 23;  // false
            
//      6. < Operator tests whether one value is less than the other
            1 < 4;  // true
            10 < 4;  // false
            
//      7. >= Operator tests whether one value is greater than or equal to another
            7 >= 5;  // true
            7 >= 7;  // true
            7 >= 9;  // false
            
//      8. <= Operator tests whether one value is less than or equal to another
            5 <= 8;  // true
            5 <= 5;  // true
            5 <= 4;  // false
            
/* 
 *  4. Logical Operators
 *       Logical Operators test the logic between variables or values
 *
 *      1. && Operator tests two expressions and if both are true it returns true
*/          (5 > 4 && 6 < 7);  // true
            (5 > 4 && 6 > 7);  // false
            
//      2. || Operator tests two expressions and if either one are true it return true
            (7 > 8 || 8 > 7);  // true
            (7 > 8 || 8 < 7);  // false
            
/* 
 *  5. Unary Operators
 *        Operators that take only one condition
 *
 *      1. ! Operator tests an expression and returns the opposite
*/          !(5 === 5);  // false
            !(5 === 6);  // true
            
//      2. typeof Operator checks the data type of a variable, expression, function, or object
//            typeof will not work on arrays or dates, as it defines them as objects
            typeof "Marc";  // string
            typeof true;  // boolean
            typeof 12;  // number
            typeof ['a', 'b', 'c'];  // object
            typeof {key1: 1, key2: 2};  // object
            
/* 
 *  6. Ternary Operator
 *     The Ternary Operator ? tests two conditions much like an If Statement.
 *     If the first condition is true it executes the first expression
 *     If the first condition is false it executes the second expression
*/          (5 === 6) ? console.log('Equal') : console.log('Unequal');  // logs the second expression 'Unequal'
 

