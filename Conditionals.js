 /* Grading scale:
 * - An "A" is between [90 and 100]
 * - A "B" is between [80 and 90)
 * - A "C" is between [70 and 79)
 * - A "D" is between [60 and 69)
 - An "F" is between [0 and 60)
*/

var testscore1 = 85

if (90 < testscore1 && testscore1 < 100) {
	console.log ('A')
}

if (80 < testscore1 && testscore1 < 90) {
	console.log ('B')
}

if (70 < testscore1 && testscore1 < 79) {
	console.log ('C')
}

if (60 < testscore1 && testscore1 < 69) {
	console.log ('D')
}

if (0 < testscore1 && testscore1 < 60) {
	console.log ('F')
}