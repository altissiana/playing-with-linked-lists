import test from 'ava';
import LinkedList from './linked-list';

test('size returns zero when list is empty', t => {
  let linkedList: LinkedList<number> = new LinkedList();
  t.is(linkedList.size, 0);
});

test('size returns size of list when not empty', t => {
  let linkedList: LinkedList<number> = new LinkedList();
  linkedList.add(42);
  t.is(linkedList.size, 1);
});

test('get last value in the list', t => {
  let linkedList: LinkedList<number> = new LinkedList();
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(7);

  t.is(linkedList.getLast(), 7);
});

test('get first value in the list', t => {
  let linkedList: LinkedList<number> = new LinkedList();
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(7);

  t.is(linkedList.getFirst(), 2);
});

test('get value at index', t => {
  let linkedList: LinkedList<number> = new LinkedList();
  linkedList.add(2);
  linkedList.add(4);
  linkedList.add(7);

  t.is(linkedList.get(1), 4);
});

test('get index zero', t => {
  let linkedList: LinkedList<number> = new LinkedList();
  linkedList.add(9);
  t.is(linkedList.get(0), 9);
})
