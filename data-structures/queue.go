package datastructs

type Queue[T any] struct {
	front *ListNode[T]
	rear  *ListNode[T]
	size  int
}

func NewQueue[T any]() *Queue[T] {
	return &Queue[T]{}
}

// Enqueue adds an element to the end of the Queue
func (q *Queue[T]) Enqueue(value T) T {
	newNode := NewListNode(value)
	if q.IsEmpty() {
		q.front = newNode
		q.rear = newNode
	} else {
		q.rear.Next = newNode
		q.rear = newNode
	}
	q.size++
	return value
}

// Dequeue removes the first element from the Queue
func (q *Queue[T]) Dequeue() (T, bool) {
	if q.IsEmpty() {
		var zeroVal T
		return zeroVal, false
	}
	value := q.front.Value
	q.front = q.front.Next
	q.size--
	if q.IsEmpty() {
		q.rear = nil // If the queue is now empty, update the rear
	}
	return value, true
}

// Peek returns the first element of the Queue without removing it
func (q *Queue[T]) Peek() (T, bool) {
	if q.IsEmpty() {
		var zeroVal T
		return zeroVal, false
	}
	return q.front.Value, true
}

// IsEmpty returns true if the Queue is empty
func (q *Queue[T]) IsEmpty() bool {
	return q.size == 0
}

// Size returns the number of elements in the Queue
func (q *Queue[T]) Size() int {
	return q.size
}
