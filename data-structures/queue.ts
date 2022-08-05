import { LinkedList } from './singly-linked-list';

export class Queue<T> {
	private first: LinkedList<T> | null = null;
	private last: LinkedList<T> | null = null;

	enqueue(val: T): T {
		const newVal = new LinkedList<T>(val);

		if (this.first && this.last) {
			this.last.next = newVal;
		} else {
			this.first = newVal;
		}

		this.last = newVal;
		return val;
	}

	dequeue(): T | null {
		const returnVal = this.first?.val ?? null;

		this.first = this.first?.next ?? null;
		if (this.first === null) {
			this.last = null;
		}

		return returnVal;
	}
}
