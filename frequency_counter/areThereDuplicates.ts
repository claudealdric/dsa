function areThereDuplicates(...values: any) {
	const seenValues: any = {};
	for (const elem of values) {
		if (elem in seenValues) {
			return true;
		} else {
			seenValues[elem] = true;
		}
	}
	return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
