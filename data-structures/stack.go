package data_structures

type Stack[T any] []T

func (s *Stack[T]) Push(v T) {
	*s = append(*s, v)
}

func (s *Stack[T]) Pop() (T, bool) {
	var val T
	if len(*s) == 0 {
		return val, false
	}
	lastIndex := len(*s) - 1
	val = (*s)[lastIndex]
	*s = (*s)[:lastIndex]
	return val, true
}

func (s *Stack[T]) Peek() (T, bool) {
	var val T
	if len(*s) == 0 {
		return val, false
	}
	lastIndex := len(*s) - 1
	val = (*s)[lastIndex]
	return val, true
}
