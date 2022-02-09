import Node from './node';

export default class LinkedList<T> {

  size: number = 0;
  head?: Node<T>;

  add(value: T) {
    let node: Node<T> = new Node(value, undefined);

    if (this.head == undefined) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  getLast(): T | undefined {
    let current = this.head;

    if(current) {
      while(current.next) {
        current = current.next;
      }

      return current.val;
    }

    return;
  }

  getFirst(): T | undefined {
    if (this.head) {
      return this.head.val;
    }

    return;
  }

  get(index: number): T | undefined {

    let counter: number = 0;
    let current = this.head;

    while(counter < index && current) {
      current = current.next;
      counter++;
    }

    return current?.val;
  }



}


