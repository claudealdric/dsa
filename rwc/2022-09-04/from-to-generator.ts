export default function fromTo(
	start: number,
	end: number
): () => number | undefined {
	if (start > end) {
		throw new Error(
			'The end number must be greater than or equal to the start number'
		);
	}

	let count = start;

	return () => {
		if (count <= end) {
			count += 1;
			return count - 1;
		}

		return undefined;
	};
}
