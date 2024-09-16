package data_structures

type ListNode[T any] struct {
	Val  T
	Next *ListNode[T]
}
