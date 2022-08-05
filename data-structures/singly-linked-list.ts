export class LinkedList {
	val: number | null;
	next: LinkedList | null;

	constructor(val?: number, next?: LinkedList) {
		this.val = val ?? null;
		this.next = next ?? null;
	}
}
