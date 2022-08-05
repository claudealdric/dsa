export class Node {
  val: number | null;
  left: Node | null;
  right: Node | null;

  constructor(val?: number, left?: Node, right?: Node) {
    this.val = val ?? null;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}
