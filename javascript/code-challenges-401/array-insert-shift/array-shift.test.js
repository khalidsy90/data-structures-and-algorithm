const insertShiftArray=require('./array-shift');


describe('Testing challenge',()=>{
  let array1=[42,8,15,23,42];
  test('insertShiftArray',()=>{
    expect(insertShiftArray(array1,16)).toEqual([42,8,15,16,23,42]);
  });
});
