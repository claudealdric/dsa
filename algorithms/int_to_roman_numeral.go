package algorithms

import (
	"maps"
	"slices"
	"strings"
)

func IntToRomanNumeral(num int) string {
	m := map[int]string{
		1_000: "M",
		900:   "CM",
		500:   "D",
		400:   "CD",
		100:   "C",
		90:    "XC",
		50:    "L",
		40:    "XL",
		10:    "X",
		9:     "IX",
		5:     "V",
		4:     "IV",
		1:     "I",
	}

	keys := slices.Collect(maps.Keys(m))
	slices.Sort(keys)
	slices.Reverse(keys)

	var sb strings.Builder
	for _, key := range keys {
		if num == 0 {
			break
		}

		val := m[key]

		if key > num {
			continue
		}

		count := 0
		for count < 3 && num >= key {
			sb.WriteString(val)
			num -= key
			count++
		}
	}

	return sb.String()
}
