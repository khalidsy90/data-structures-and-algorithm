'use strict';

const LinkedList = require('../linked-list-kth');

describe('linked-list insertion ', () => {
  it('returns the value of a given index from the end of alinked list', () => {
    const lst = new LinkedList();

    lst.insert(0);
    lst.insert(1);
    lst.insert(2);
    lst.insert(3);
    lst.insert(4);
    lst.insert(5);
    lst.insert(6);

    expect(lst.kthFromEnd(3)).toEqual(3);
    expect(lst.kthFromEnd(5)).toEqual(5);

    expect(lst.kthFromEnd(-5)).toEqual('insert positive value ');
  });
});
