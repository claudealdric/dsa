export default function depthIncreaseCount(depths: number[]): number {
	let increaseCount = 0;
	let previousDepth = depths[0] as number;

	for (let i = 1; i < depths.length; i += 1) {
		const currentDepth = depths[i] as number;
		increaseCount += currentDepth > previousDepth ? 1 : 0;
		previousDepth = currentDepth;
	}

	return increaseCount;
}
