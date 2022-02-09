export default class Node<T> {
  val: T;
  next?: Node<T>;

  constructor(val: T, next?: Node<T>) {
    this.val = val;
    this.next = next;
  }
}
