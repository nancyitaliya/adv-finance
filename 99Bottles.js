for (var i = 99; i >= 0; i--) {
	if (i <= 99 && i > 2) {
	console.log (i + ' bottles of beer on the wall,' + i + ' bottles of beer')
	console.log ('Take one down and pass it around,' + (i-1) + ' bottles of beer on the wall.')
	console.log ('')

	} else if ( i === 2) {
		console.log (i + ' bottles of beer on the wall,' + i + ' bottles of beer')
		console.log ('Take one down and pass it around,' + (i-1) + ' bottle of beer on the wall')
		console.log ('')

	} else if ( i === 1) {
		console.log (i + ' bottle of beer on the wall,' + i + ' bottles of beer')
		console.log ('Take one down and pass it around, no more bottles of beer on the wall.')
		console.log ('')
		console.log ('No more bottles of beer on the wall, no more bottles of beer.')
		console.log ('Go to the store and buy some more, 99 bottles of beer on the wall.') 
	}
}