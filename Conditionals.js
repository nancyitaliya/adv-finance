 /* Question 1
 * Create a program that will grade a random test score between 0 and 100.
 *
 * Grading scale:
 * - An "A" is between [90 and 100]
 * - A "B" is between [80 and 90)
 * - A "C" is between [70 and 79)
 * - A "D" is between [60 and 69)
 - An "F" is between [0 and 60)
*/

var testscore = 10

console.log ('First Test Score ' + testscore)

if (90 <= testscore && testscore < 100) {
	console.log ('A')
}

if (80 <= testscore && testscore < 90) {
	console.log ('B')
}

if (70 <= testscore && testscore < 70) {
	console.log ('C')
}

if (60 <= testscore && testscore < 60) {
	console.log ('D')
}

if (0 < testscore && testscore < 60) {
	console.log ('F')
}

/**
 * Question 2
 * Create a second random test score between 0 and 100. Calculate the average of the two test scores.
 * If the average is a "B" or better, log to the console "Well done!" else log "Better luck next time".
 *
 */

 // Grading for Second 

var testscore2 = 85

console.log ('First Test Score ' + testscore2)

if (90 <= testscore2 && testscore2 < 100) {
	console.log ('A')
}

if (80 <= testscore2 && testscore2 < 90) {
	console.log ('B')
}

if (70 <= testscore2 && testscore2 < 80) {
	console.log ('C')
}

if (60 <= testscore2 && testscore2 < 70) {
	console.log ('D')
}

if (0 < testscore2 && testscore2 < 60) {
	console.log ('F')
}

// Average Score

 var average = ((testscore+testscore2)/2)
 console.log ('Average = ' + average)

if (80 < average && testscore < 100) {
	console.log ('Well Done!')
}
	
if (average < 79){
	console.log ('Better Luck next time')
}



