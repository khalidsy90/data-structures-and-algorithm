let binarySearch=(arr,value)=>{
  let low=0;
  let high=arr.length - 1;
  while(low <= high){
    let middle=Math.floor((low+high) / 2);
    if(arr[middle]===value){
      return middle;
    }else if(arr[middle] < value ){
      low=middle + 1;
    }else{
      high=middle - 1;
    }
  }
  return -1;
};
console.log(binarySearch([0, 1, 2, 3, 4, 5],15)); //--> 2
