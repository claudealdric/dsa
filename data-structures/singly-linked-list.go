package data_structures

type ListNode[T any] struct {
	Val  T
	Next *ListNode[T]
}

func NewListNode[T any](val T) *ListNode[T] {
	return &ListNode[T]{Val: val}
}
