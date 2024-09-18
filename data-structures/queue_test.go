package data_structures

import "testing"

func TestQueue(t *testing.T) {
	t.Run("initializing an empty queue", func(t *testing.T) {
		t.Run("returns empty on the `IsEmpty` method", func(t *testing.T) {
			q := NewQueue[int]()
			got := q.IsEmpty()
			want := true
			AssertEquals(t, got, want)
		})

		t.Run("returns nil on peek", func(t *testing.T) {
			q := NewQueue[int]()
			got, ok := q.Peek()
			AssertEquals(t, got, 0)
			AssertEquals(t, ok, false)

		})
	})

	t.Run("non-empty queue", func(t *testing.T) {
		var got, headVal int
		var peekOk, dequeueOk bool

		q := NewQueue[int]()

		// [] -> [1]
		got = q.Enqueue(1)
		headVal, peekOk = q.Peek()
		AssertEquals(t, got, 1)
		AssertEquals(t, q.IsEmpty(), false)
		AssertEquals(t, q.Size, 1)
		AssertEquals(t, headVal, 1)
		AssertEquals(t, peekOk, true)

		// [1] -> [1, 2]
		got = q.Enqueue(2)
		headVal, peekOk = q.Peek()
		AssertEquals(t, got, 2)
		AssertEquals(t, q.IsEmpty(), false)
		AssertEquals(t, q.Size, 2)
		AssertEquals(t, headVal, 1)
		AssertEquals(t, peekOk, true)

		// [1, 2] -> [2]
		got, dequeueOk = q.Dequeue()
		headVal, peekOk = q.Peek()
		AssertEquals(t, got, 1)
		AssertEquals(t, q.IsEmpty(), false)
		AssertEquals(t, q.Size, 1)
		AssertEquals(t, headVal, 2)
		AssertEquals(t, peekOk, true)
		AssertEquals(t, dequeueOk, true)

		// [2] -> []
		got, dequeueOk = q.Dequeue()
		headVal, peekOk = q.Peek()
		AssertEquals(t, got, 2)
		AssertEquals(t, q.IsEmpty(), true)
		AssertEquals(t, q.Size, 0)
		AssertEquals(t, headVal, 0)
		AssertEquals(t, peekOk, false)
		AssertEquals(t, dequeueOk, true)

		// [] -> [] (dequeue; noop)
		got, dequeueOk = q.Dequeue()
		headVal, peekOk = q.Peek()
		AssertEquals(t, got, 0)
		AssertEquals(t, q.IsEmpty(), true)
		AssertEquals(t, q.Size, 0)
		AssertEquals(t, headVal, 0)
		AssertEquals(t, peekOk, false)
		AssertEquals(t, dequeueOk, false)
	})
}

func AssertEquals[T comparable](t testing.TB, got, want T) {
	t.Helper()
	if got != want {
		t.Errorf("got %v, want %v", got, want)
	}
}
