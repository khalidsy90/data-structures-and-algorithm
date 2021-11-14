'use strict';

const LinkedList = require('../src/lib/LinkedList');

describe('linked-list-insertion ', () => {
  it(' add a node to the end of the linked list', () => {
    const lst = new LinkedList();
    lst.append(1);
    expect(lst.head.value).toEqual(1);
    expect(lst.head.next).toBeNull();
  });

  it('add multiple nodes to the end of a linked list', () => {
    const lst = new LinkedList();
    lst.append(1);
    lst.append(2);
    lst.append(3);
    expect(lst.head.value).toEqual(1);
    expect(lst.head.next.value).toEqual(2);
    expect(lst.head.next.next.value).toEqual(3);
    expect(lst.head.next.next.next).toBeNull();
  });

  it('Can successfulsty insert a node before a node located i the middle of a linked list', () => {
    const lst = new LinkedList();
    lst.insert(3);
    lst.insert(2);
    lst.insert(1);
    lst.insertBefore(2, 4);
    expect(lst.head.value).toEqual(1);
    expect(lst.head.next.value).toEqual(4);
    expect(lst.head.next.next.value).toEqual(2);
    expect(lst.head.next.next.next.value).toEqual(3);
    expect(lst.head.next.next.next.next).toBeNull();
  });

  it('Can successfulsty insert a node before the first node of a linked list ', () => {
    const lst = new LinkedList();
    lst.insert(2);
    lst.insert(1);
    lst.insertBefore(1, 3);
    expect(lst.head.value).toEqual(3);
    expect(lst.head.next.value).toEqual(1);
    expect(lst.head.next.next.value).toEqual(2);
    expect(lst.head.next.next.next).toBeNull();
  });

  it('Can successfulsty insert after a node in the middle of the linked list', () => {
    const lst = new LinkedList();
    lst.insert(3);
    lst.insert(2);
    lst.insert(1);
    lst.insertAfter(2, 4);
    expect(lst.head.value).toEqual(1);
    expect(lst.head.next.value).toEqual(2);
    expect(lst.head.next.next.value).toEqual(4);
    expect(lst.head.next.next.next.value).toEqual(3);
    expect(lst.head.next.next.next.next).toBeNull();
  });

  it('Can successfulsty insert a node after the last node of the linked list', () => {
    const lst = new LinkedList();
    lst.insert(2);
    lst.insert(1);
    lst.insertAfter(2, 3);
    expect(lst.head.value).toEqual(1);
    expect(lst.head.next.value).toEqual(2);
    expect(lst.head.next.next.value).toEqual(3);
    expect(lst.head.next.next.next).toBeNull();
  });
});
