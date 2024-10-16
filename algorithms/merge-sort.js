function merge(arr1, arr2) {
	const combined = [];
	let i1 = 0;
	let i2 = 0;

	// While arr1 and arr2 have elements
	while (i1 < arr1.length && i2 < arr2.length) {
		const e1 = arr1[i1];
		const e2 = arr2[i2];

		if (e1 < e2) {
			combined.push(e1);
			i1 += 1;
		} else {
			combined.push(e2);
			i2 += 1;
		}
	}

	// At this point, one array has no elements left
	while (i1 < arr1.length) {
		combined.push(arr1[i1]);
		i1 += 1;
	}

	while (i2 < arr2.length) {
		combined.push(arr2[i2]);
		i2 += 1;
	}

	return combined;
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	let left = [];
	let right = [];
	for (let i = 0; i < arr.length; i += 1) {
		const element = arr[i];
		if (i < mid) {
			left.push(element);
		} else {
			right.push(element);
		}
	}

	left = mergeSort(left);
	right = mergeSort(right);

	return merge(left, right);
}

function main() {
	let arr = [3, 5, 2, 1, 7, 6, 8];
	arr = mergeSort(arr);
	console.log(arr);
}

main();
