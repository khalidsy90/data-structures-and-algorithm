let array1=[42,8,15,23,42];

function insertShiftArray(arr, number) {
  let newArr=[];
  let middle=Math.ceil(arr.length/2);
  for (let i = 0; i < arr.length; i++) {
    if(middle === i){
      newArr.push(number);
    }
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log('orginal array:',array1);
console.log('shiftting array :',insertShiftArray(array1, 16));//expected output [42,8,15,16,23,42]

/*
problem domain
create function takes in an array and a value to be added, add the value to the middle and return the new array back.

visual
input [42,8,15,23,42]
                    [42]
                    [42,8]
                    [42,8,15] --> the middle
                    [42,8,15,16]--> last value from function argument
                    [42,8,15,16,23]
output [42,8,15,16,23,42]

algorithim
* create function take two parameters(array,value)
* create new array
* determin the middle index of array
* loop over original array
* push item to the new array >> if index == middle push the value form the function
* return the new array

pesudocode

Declare function(Array,Value)
Declare newArray()
Declare middle=Array/2
for (let i = 0; i < arr.length; i++)
if i == middle --> newArray.push(Value)
add the element of i

edge cases

1-if the middle is decimal

Big O

time --> o(n)
space --> 0(1)
*/


module.exports = insertShiftArray;

