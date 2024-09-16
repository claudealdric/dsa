package main

import (
	"fmt"
	"testing"
)

func TestWaysToScore(t *testing.T) {
	for _, test := range Cases {
		t.Run(fmt.Sprintf("WaysToScore(%d)", test.input), func(t *testing.T) {
			got := WaysToScore(test.input)
			want := test.want
			if got != want {
				t.Errorf("got %d, want %d", got, want)
			}
		})
	}
}
