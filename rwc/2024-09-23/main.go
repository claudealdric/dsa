package main

import "fmt"

func main() {
	load1 := [][]string{
		{"red", "normal"},
		{"blue", "normal"},
		{"red", "delicate"},
		{"blue", "heavy"},
	}

	load2 := [][]string{
		{"white", "normal"},
		{"white", "delicate"},
		{"white", "normal"},
		{"white", "heavy"},
	}

	fmt.Println(MinLaundryLoads(load1))
	fmt.Println(MinLaundryLoads(load2))
}

func MinLaundryLoads(load [][]string) int {
	coloredNormals := make(map[string]bool)
	coloredDelicates := make(map[string]bool)
	whites := make(map[string]bool)

	for _, clothing := range load {
		color := clothing[0]
		washType := clothing[1]

		if color == "white" {
			if washType == "delicate" {
				whites[washType] = true
			} else {
				whites["normal"] = true
			}
		} else {
			if washType == "delicate" {
				coloredDelicates[color] = true
			} else {
				coloredNormals[color] = true
			}
		}
	}

	return len(coloredNormals) + len(coloredDelicates) + len(whites)
}
