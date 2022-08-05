export default function threeDepthsSum(depths: number[]): number[] {
	const sums: number[] = [];
	let sum = <number>depths[0] + <number>depths[1] + <number>depths[2];
	sums.push(sum);

	for (let i = 3; i < depths.length; i += 1) {
		sum += <number>depths[i] - <number>depths[i - 3];
		sums.push(sum);
	}

	return sums;
}
