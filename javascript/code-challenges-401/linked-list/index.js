'use strict';

const LinkedList=require('./src/lib/LinkedList');


let lst =new LinkedList();

lst.add(1);
lst.add(2);
lst.add(3);
lst.add(4);



console.log(lst);
console.log(lst.includes(5));
console.log(lst.toString());
