function mergeIntervals(intervals) {
	const mergedIntervals = [];
	let prevInterval;

	const isLastIndex = (index) => index === intervals.length - 1;
	const intervalsOverlap = (prevInterval, currInterval) => {
		const prevMax = prevInterval[1];
		const currMin = currInterval[0];
		return currMin <= prevMax;
	};

	for (let i = 0; i < intervals.length; i += 1) {
		const currInterval = intervals[i];

		if (!prevInterval) {
			prevInterval = currInterval;
			continue;
		}
		
		if (intervalsOverlap(prevInterval, currInterval)) { 
			const [prevMin, prevMax] = prevInterval;
			const [currMin, currMax] = currInterval;

			const newMin = Math.min(prevMin, currMin);
			const newMax = Math.max(prevMax, currMax);
			prevInterval = [newMin, newMax];
		} else {
			mergedIntervals.push(prevInterval);
			prevInterval = currInterval;
		}

		if (isLastIndex(i)) mergedIntervals.push(prevInterval);		
	}

	return mergedIntervals;
}
