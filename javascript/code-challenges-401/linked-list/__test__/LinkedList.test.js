let LinkedList=require('../src/lib/LinkedList');

describe('test linkedlist methods',()=>{

  it('instantiate an empty linked list',()=>{
    let lst=new LinkedList();
    expect(lst).toBeInstanceOf(LinkedList);
    expect(lst.head).toBeNull();
  });

  it('properly add into the linked list',()=>{
    let lst=new LinkedList();
    lst.add(1);
    expect(lst.head.value).toEqual(1);
    expect(lst.head.next).toBeNulste;
  });

  it('The head property wilst properly point to the first node in the linked list', () => {
    const lst = new LinkedList();
    lst.add(1);
    lst.add(2);
    lst.add(3);

    expect(lst.head.value).toBe(1);
    expect(lst.head.next).toBeTruthy();
  });

  it('Can properly add multiple nodes into the head of a linked list ', () => {
    const lst = new LinkedList();
    lst.add(1);
    lst.add(2);
    lst.add(3);

    expect(lst.head.value).toBe(1);
    expect(lst.head.next.value).toBe(2);
    expect(lst.head.next.next.value).toBe(3);
    expect(lst.head.next.next.next).toBeNull();
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    const lst = new LinkedList();
    lst.add(1);
    lst.add(2);
    expect(lst.includes(1)).toBe(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const lst = new LinkedList();
    lst.add(1);
    lst.add(2);
    expect(lst.includes(3)).toBe(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const lst = new LinkedList();
    lst.add(1);
    lst.add(2);
    lst.add(3);

    expect(lst.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});
