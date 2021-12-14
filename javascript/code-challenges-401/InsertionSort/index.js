/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

'use strict';

function insertionSort(arr) {
  if (arr.length === 0) {
   return 'empty array'
  } else {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {        
        if (arr[j] < arr[i]) {
          min = j;
          let temp = arr[min];
          arr[min] = arr[i];
          arr[i] = temp;

        }
      }
    }
  }
  return arr;
}

insertionSort([8,4,23,42,16,15])
module.exports =insertionSort
/*
#Problem Domain 

Insertion Sort is a sorting algorithm that traverses the array. For each passthrough, the current value at index i is repeatedly compared to the value at the previous index and swapped until the previous value is smaller than the current value. The array is sorted in place.

#Edge Cases
1- Empty array

#visual
[8,4,23,42,16,15]
                 [4] < [8] --> true --> SWAP
                 [4,8,23,42,16,15]
                 [23] < [4] --> false
                 [42] < [4] --> false
                 [16] < [4] --> false
                 [15] < [4] --> false
                 i++
[4,8,23,42,16,15]
                [23] < [8] --> false
                [42] < [8] --> false
                [16] < [8] --> false
                [15] < [8] --> false
                i++
[4,8,23,42,16,15]
                [42] < [23] --> false
                [16] < [23] --> true --> SWAP 
                [ 4, 8, 16, 42, 23, 15 ]
                [15] < [16] --> true --> SWAP               
                [ 4, 8, 15, 42, 23, 16 ]
                i++
[4,8,15,42,23,16]
                [23] < [42] --> true --> SWAP
                [ 4, 8, 15, 23, 42, 16 ]
                [16] < [23] --> true --> SWAP
                [ 4, 8, 15, 16, 42, 23 ]
                i++
[4,8,15,16,42,23]
                [23] < [42] --> true --> SWAP
                [ 4, 8, 15, 16, 23, 42 ]
                i++
[4,8,15,16,23,42] --> END


Big o 
time o(n2) 
space o(1)                                                                     

#Algorithm
1- create function take int argument 
2- create loop itreat to len of argument arr
3- create variable refer to i at loop 
3- create second loop inside main loop
4- check if the first elemnt less than the second element
    * if true do swap and continue

#pesudo

function insertionSort(int[] arr)
for i=0 to arr.length
Declare min=i
    for j=i+1 to arr.length
               if (arr[j] < arr[min])
                min <-- j;
        DECLARE temp <-- arr[min];
        arr[min] <-- arr[i];
        arr[i] <-- temp;
#Code

function insertionSort(arr) {
  if (arr.length === 0) {
   return 'empty array'
  } else {
    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {        
        if (arr[j] < arr[i]) {
          min = j;
          let temp = arr[min];
          arr[min] = arr[i];
          arr[i] = temp;

        }
      }
    }
  }
  return arr;
}

#Verification

*/
