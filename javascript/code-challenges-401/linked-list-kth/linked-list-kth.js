const Node = require('./node');

class LinkedList{
  constructor(){
    this.head=null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  includes(value) {
    let rslt;
    let temp = this.head;
    while (temp.next) {
      if (value === temp.value) {
        rslt = true;
        return rslt;
      } else {
        temp = temp.next;
      }
    }
    rslt = false;
    return rslt;
  }

  toString() {
    let str = '';
    let temp = this.head;
    while (temp) {
      str += `{ ${temp.value} } -> `;
      temp = temp.next;
    }
    str += `NULL`;
    return str;
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
    let temp = this.head;
    const node = new Node(newValue);
    if (temp.value === value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (temp.next) {
        if (temp.next.value === value) {
          node.next = temp.next;
          temp.next = node;
          break;
        }
        else {
          temp = temp.next;
        }
      }
    }
  }

  insertAfter(value, newValue) {
    let temp = this.head;
    const node = new Node(newValue);
    while (temp) {
      if (temp.value === value) {
        node.next = temp.next;
        temp.next = node;
        break;
      }
      temp = temp.next;
    }
  }

  kthFromEnd(k) {
    let reversed = new LinkedList();
    let temp = this.head;
    let count = 0;

    while (temp) {
      reversed.insert(temp.value);
      temp = temp.next;
    }

    let tempB = reversed.head;

    while (tempB) {
      if (k <= 0) {
        return 'insert positive value ';
      } else if (count === k) {
        return tempB.value;
      }
      count++;
      tempB = tempB.next;
    }
  }
}

module.exports = LinkedList;
