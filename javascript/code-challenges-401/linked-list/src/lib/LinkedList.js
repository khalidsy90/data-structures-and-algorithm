// eslint-disable-next-line no-unused-vars
const Node = require('./Node');

class LinkedList{
  constructor(){
    this.head=null;
  }

  includes(value) {
    let rslt = false;
    let tempNode = this.head;
    while (tempNode) {
      if (tempNode.value === value) {
        rslt=true;
        return rslt;
      }
      tempNode = tempNode.next;
    }
    return rslt;
  }

  add(value){
    let newNode =new Node(value);

    if(!this.head){
      this.head=newNode;
      return this;
    }

    let currentNode=this.head;

    while(currentNode.next){
      currentNode=currentNode.next;
    }

    currentNode.next=newNode;
    return this;
  }

  toString() {
    let str = '';
    let tempNode = this.head;
    while (tempNode) {
      str += `{ ${tempNode.value} } -> `;
      tempNode = tempNode.next;
    }
    str += `NULL`;
    return str;
  }
}

module.exports=LinkedList;
