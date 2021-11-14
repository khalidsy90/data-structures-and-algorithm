'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  includes(value) {
    let result;
    let currentNode = this.head;
    while (currentNode.next) {
      if (value === currentNode.value) {
        result = true;
        return result;
      } else {
        currentNode = currentNode.next;
      }
    }
    result = false;
    return result;
  }

  toString() {
    let string = '';
    let currentNode = this.head;
    while (currentNode) {
      string += `[${currentNode.value}] -> `;
      currentNode = currentNode.next;
    }
    string += `X`;
    return string;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  insertBefore(value, newValue) {
    let currentNode = this.head;
    const node = new Node(newValue);
    if (currentNode.value === value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          node.next = currentNode.next;
          currentNode.next = node;
          break;
        } 
        else {
          currentNode = currentNode.next;
        }
      }
    }
  }

  insertAfter(value, newValue) {
    let currentNode = this.head;
    const node = new Node(newValue);
    while (currentNode) {
      if (currentNode.value === value) {
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      currentNode = currentNode.next;
    }
  }

  kthFromEnd(k) {
    let currentNode = this.head;
    let tempArray = [];

    while (currentNode) {
      tempArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    if (k <= 0) {
      return 'insert positive value ';
    } else if (k >= tempArray.length) {
      return 'k is larger than the lenth of the linked list';
    } else {
      let tempK = tempArray.length - k;
      let result = tempArray[tempK - 1];
      return result;
    }
  }

  zipLists(list1, list2) {
    let result = new LinkedList();

    let currentNode1 = list1.head;
    let currentNode2 = list2.head;

    while (currentNode1 || currentNode2) {
      if (currentNode1) {
        result.append(currentNode1.value);
        currentNode1 = currentNode1.next;
      }
      if (currentNode2) {
        result.append(currentNode2.value);
        currentNode2 = currentNode2.next;
      }
    }

    return `head -> ${result.toString()}`;
  }
}

module.exports = LinkedList;
