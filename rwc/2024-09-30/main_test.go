package main

import (
	"reflect"
	"strings"
	"testing"
)

func TestSplit(t *testing.T) {
	tests := []struct {
		str string
		sep string
	}{
		{
			str: "This is so, so silly!",
			sep: " ",
		},
		{
			str: "This is so, so silly!",
			sep: "",
		},
		{
			str: "I  have  two  spaces  for  each  word",
			sep: "  ",
		},
		{
			str: "What   about   three?",
			sep: "   ",
		},
		{
			str: "These    have    four    spaces",
			sep: "  ",
		},
	}

	for _, test := range tests {
		got := Split(test.str, test.sep)
		want := strings.Split(test.str, test.sep)
		if !reflect.DeepEqual(got, want) {
			t.Errorf("got %q, want %q", got, want)
		}
	}

}
