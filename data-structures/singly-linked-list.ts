export class LinkedList<T> {
	val: T | null;
	next: LinkedList<T> | null;

	constructor(val?: T, next?: LinkedList<T>) {
		this.val = val ?? null;
		this.next = next ?? null;
	}
}
