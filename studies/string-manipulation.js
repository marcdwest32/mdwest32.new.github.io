/* 
 * STRING MANIPULATION
 *	
 * 1. Manipulating strings with operators
 *    Two or more strings can be concatenated using the + Operator
*/		
        var myName = "Marc" + "West";	// "MarcWest"

//	Concatenating strings with the + operator does not add spaces. You must add spaces with " "

		var myName = "Marc" + " " + "West";

/* 
 * 2. Manipulating strings with string methods
 *	  String Methods are built in functions you can call on strings to alter them
 *
 *		1. string.concat() method takes two or more strings and combines them into one string
*/
            var greet1 = "Hi!";
            var greet2 = "How are you?"
            var greet3 = greet1.concat(" ", greet2);
            console.log(greet3);  // logs "Hi! How are you?" to the console
            
//      2. string.toUpperCase() will convert all text characters in a string to upper case

            var warCry1 = "rraaaaaahhhh!";
            var warCry2 = warCry1.toUpperCase();
            console.log(warCry2);  // logs "RRAAAAAAHHHH!" to the console
            
//      3. string.LowerCase() will convert all text characters in a string to lower case

            var whisper1 = "SHHH DONT WAKE THE DRAGON";
            var whisper2 = whisper1.toLowerCase();
            console.log(whisper2);  // logs "shhh dont wake the dragon" to the console

//      4. string.slice() returns a copy of a portion of a string as indicated by 2 parameters

            var myFullName = "Marc Dennis West";
            var midName = myFullName.slice(5, 11);
            console.log(midName);  // logs "Dennis" to the console
            
//      5. string.split() converts a string into an array of strings separated by the separator of your choosing

            var myText = "Make me an array please";
            var myArray = myText.split(" ");  // splits the string into an array at the spaces
            console.log(myArray);  // logs [ 'Make', 'me', 'an', 'array', 'please' ] to the console
            
            var alpha = "abcd"
            var alpha2 = alpha.split("");  //  empty string splits the string between the individual characters
            console.log(alpha2);  //  logs [ 'a', 'b', 'c', 'd' ] to the console

