package main

import "testing"

func TestMinLaundryLoads(t *testing.T) {
	tests := []struct {
		load [][]string
		want int
	}{
		{
			load: [][]string{
				{"red", "normal"},
				{"blue", "normal"},
				{"red", "delicate"},
				{"blue", "heavy"},
			},
			want: 3,
		},
		{
			load: [][]string{
				{"white", "normal"},
				{"white", "delicate"},
				{"white", "normal"},
				{"white", "heavy"},
			},
			want: 2,
		},
		{
			load: [][]string{
				{"red", "normal"},
				{"blue", "normal"},
				{"red", "delicate"},
				{"blue", "heavy"},
				{"white", "normal"},
				{"white", "delicate"},
				{"white", "normal"},
				{"white", "heavy"},
			},
			want: 5,
		},
		{
			load: [][]string{
				{"purple", "heavy"},
				{"purple", "delicate"},
				{"purple", "normal"},
				{"red", "normal"},
				{"blue", "normal"},
				{"red", "delicate"},
				{"blue", "heavy"},
				{"white", "normal"},
				{"white", "delicate"},
				{"white", "normal"},
				{"white", "heavy"},
			},
			want: 7,
		},
		{
			load: [][]string{
				{"red", "normal"},
			},
			want: 1,
		},
	}

	for _, test := range tests {
		got := MinLaundryLoads(test.load)
		if got != test.want {
			t.Errorf("got %d, want %d", got, test.want)
		}
	}

}
