package datastructs

type ListNode[T any] struct {
	Value T
	Next  *ListNode[T]
}

func NewListNode[T any](value T) *ListNode[T] {
	return &ListNode[T]{Value: value}
}
