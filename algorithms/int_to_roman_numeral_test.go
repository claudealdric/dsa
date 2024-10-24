package algorithms

import "testing"

func TestIntToRomanNumeral(t *testing.T) {
	tests := []struct {
		input int
		want  string
	}{
		{input: 1, want: "I"},
		{input: 2, want: "II"},
		{input: 3, want: "III"},
		{input: 4, want: "IV"},
		{input: 5, want: "V"},
		{input: 6, want: "VI"},
		{input: 7, want: "VII"},
		{input: 8, want: "VIII"},
		{input: 9, want: "IX"},
		{input: 10, want: "X"},
		{input: 39, want: "XXXIX"},
		{input: 40, want: "XL"},
		{input: 48, want: "XLVIII"},
		{input: 50, want: "L"},
		{input: 87, want: "LXXXVII"},
		{input: 90, want: "XC"},
		{input: 95, want: "XCV"},
		{input: 100, want: "C"},
		{input: 399, want: "CCCXCIX"},
		{input: 400, want: "CD"},
		{input: 499, want: "CDXCIX"},
		{input: 500, want: "D"},
		{input: 899, want: "DCCCXCIX"},
		{input: 900, want: "CM"},
		{input: 999, want: "CMXCIX"},
		{input: 1_000, want: "M"},
	}

	for _, test := range tests {
		got := IntToRomanNumeral(test.input)
		if got != test.want {
			t.Errorf("input: %d; got %s, want %s", test.input, got, test.want)
		}
	}
}
