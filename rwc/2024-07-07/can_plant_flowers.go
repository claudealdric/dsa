package main

func CanPlantFlowers(plantedFlowers []int, count int) bool {
	maxFlowerCount := 0

	for i := 0; i < len(plantedFlowers); i += 1 {
		if plantedFlowers[i] == 1 {
			continue
		}

		shouldCheckLeft := i > 0
		shouldCheckRight := i < len(plantedFlowers)-1

		if (!shouldCheckLeft || plantedFlowers[i-1] == 0) &&
			(!shouldCheckRight || plantedFlowers[i+1] == 0) {
			maxFlowerCount += 1
			plantedFlowers[i] = 1
		}
	}

	return maxFlowerCount >= count
}
