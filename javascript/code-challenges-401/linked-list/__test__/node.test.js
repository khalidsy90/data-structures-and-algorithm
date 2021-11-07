'use strict';

const Node = require('../src/lib/Node');

describe('node module test', () => {
  it('creat a node with value and next', () => {
    const testValue = 1;
    const node = new Node(testValue);
    expect(node.value).toBe(testValue);
    expect(node.next).toBeNull();
    expect(node).toBeInstanceOf(Node);

  });

});
