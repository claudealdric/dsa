import { LinkedList } from './singly-linked-list';

export class Queue {
  private first: LinkedList | null = null;
  private last: LinkedList | null = null;

  enqueue(val: number): number {
    const newVal = new LinkedList(val);

    if (this.first && this.last) {
      this.last.next = newVal;
    } else {
      this.first = newVal;
    }

    this.last = newVal;
    return val;
  }

  dequeue(): number | null {
    const returnVal = this.first?.val ?? null;

    this.first = this.first?.next ?? null;
    if (this.first === null) {
      this.last = null;
    }

    return returnVal;
  }
}
