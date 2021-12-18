'use strict';

'use strict';

// Node class that has properties for the value stored in the Node, and a pointer to the next node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}



class Queue {
  constructor() {
    this.top = 0;
    this.bottom = 0;
    this.memory = {};
  }

  enqueue (value){
    let node = new Node(value);
    this.memory[this.top] = node;
    this.top++;
  }

  dequeue(){
    this.exceptEmpty();
    let deletedElement = this.memory[this.bottom];
    delete this.memory[this.bottom];
    this.bottom++;
    return deletedElement;
  }
  peek(){
    this.exceptEmpty();
    return this.memory[this.bottom];
  }
  size(){
    return this.top-this.bottom;
  }
  isEmpty(){
    return this.size ===0;
  }
  exceptEmpty(){
    if (this.isEmpty()){
      throw new Error ('Empty Queue');
    }
  }
}

module.exports = Queue;
