
function randomReduce(lowValue, highValue, counts) {
	var randomArray = [];

	for(let i = 0; i < counts; i++) {
		let random = Math.random() * (highValue - lowValue) + lowValue;
		let randomInt = Math.floor(random);
		randomArray.push(randomInt);
	}
	return randomArray;
}

var randomInt = randomReduce(75, 99, 56);
console.log(randomInt);



	// randomArray.length = counts;
		// console.log(randomArray);