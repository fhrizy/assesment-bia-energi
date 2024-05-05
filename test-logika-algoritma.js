// character count
let text =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

console.log(text.length)

// bilangan yang dikalikan dengan dirinya sendiri
function handleA(n) {
	var sequence = []
	for (var i = 0; i < n; i++) {
		sequence.push(i * i)
	}
	return sequence.join(', ')
}
console.log(handleA(10))

// bilangan yang dikalikan dengan dirinya sendiri ditambah 1
function handleB(n) {
	var sequence = []
	for (var i = 0; i < n; i++) {
		sequence.push(i * i + 1)
	}
	return sequence.join(', ')
}

console.log(handleB(10))

// bilangan fibonacci
function handleC(n) {
	var sequence = [0, 1]
	for (var i = 2; i < n; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2])
	}
	return sequence.join(', ')
}

console.log(handleC(10))

// bilangan fibonacci ditambah 1
function handleD(n) {
	var sequence = [0, 0]
	for (var i = 2; i < n; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2] + 1)
	}
	return sequence.join(', ')
}

console.log(handleD(10))
