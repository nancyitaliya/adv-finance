/**
 * Question 1
 * Create an empty array and store it in a variable named code.
 */

 // Your code here

var code =[]

 /**
  * Question 2
  * Add the following characters to the end of the code array:
  * 'x', 'u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n',
  * 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r',
  * 'o', 'm', 'c'
  */

// Your code here

code = ['x','u', 's', 'a', 'e', 'l', 'p', 'e', 'e', 'n', 'i', 't', 'l', 'a', 'v', 'o', 'x', 'e', 'r','o', 'm', 'c']
	console.log (code)

/**
 * Question 3
 * Remove the first and last elements of the array.
 * Hint: You may need to look up a method we haven't talked about.
 */

// Your code here

//last element
code.pop(code)

code.reverse(code)

//first element
code.pop(code)

/**
 * Question 4
 * Reverse the array.
 */

// Your code here

code.reverse(code)

/**
 * Question 5
 * Replace the last element in the array with an 'e'.
 * Hint: Use length
 */

// Your code here

code[code.length]==='e'

/**
 * Question 6
 * Replace the 5th element and 14th element with space characters.
 * Hint: remember indexes start at 0!
 */

// Your code here

code[5] = ' '

code[14] = ' '

/**
 * Question 7
 * Join the array with an empty String in between each character and log the
 * result to the console.
 */

 // Your code here

 code.join('')