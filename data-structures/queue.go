package data_structures

type Queue[T any] struct {
	head *ListNode[T]
	tail *ListNode[T]
	Size int
}

func NewQueue[T any]() *Queue[T] {
	return &Queue[T]{}
}

func (q *Queue[T]) IsEmpty() bool {
	return q.Size == 0
}

func (q *Queue[T]) Peek() (T, bool) {
	var zeroVal T
	if q.head == nil {
		return zeroVal, false
	}
	return q.head.Val, true
}

func (q *Queue[T]) Enqueue(val T) T {
	n := NewListNode(val)
	if q.Size == 0 {
		q.head = n
		q.tail = q.head
	} else {
		q.tail.Next = n
		q.tail = n
	}
	q.Size++
	return val
}

func (q *Queue[T]) Dequeue() (T, bool) {
	if q.Size == 0 {
		var zeroVal T
		return zeroVal, false
	}
	val := q.head.Val
	q.head = q.head.Next
	q.Size--
	return val, true
}
