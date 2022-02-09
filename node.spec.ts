import test from 'ava';
import Node from './node';

test('node sets val to value passed in', t => {
  let node: Node<number> = new Node(42, undefined);
  t.is(node.val, 42);
});

test('next is undefined', t => {
  let node: Node<number> = new Node(42, undefined);
  t.is(node.next, undefined);
})

test('next gets the value passed in', t => {
  let nextNode: Node<number> = new Node(44, undefined);
  let node: Node<number> = new Node(42, nextNode)
  t.is(node.next, nextNode);
})
