interface stack<T> {
  data: Array<T>;
  maxsize: number;
  top: number;
  push(x: T): void;
  pop(): T;
  traverse(): void;
  peek(): void;
}

class Stack<T> implements stack<T> {
  maxsize: number;
  data: Array<T>;
  top: number;
  constructor(maxsize: number) {
    this.maxsize = maxsize;
    this.top = -1;
    this.data = new Array();
  }
  pop(): T {
    if (this.data.length === 0) {
      console.error("cant pop, stack is already empty");
    } else {
      let x = this.data.pop();
      this.top--;
      return x;
    }
  }
  push(x: T): void {
    if (this.data.length === this.maxsize) {
      console.error("Cant push, stack size exceeded");
    } else {
      this.data.push(x);
      this.top++;
    }
  }
  peek(): void {
    if (this.data.length === -1){
      console.error("Nothing to peek!")
    }
    else{
      console.log(this.data[this.top])
    }
  }
  traverse(): void {
    if (this.data.length === 0) {
      console.error("No data to traverse!");
    }
    for (let item of this.data) {
      console.log(item);
    }
  }
}

const s1 = new Stack<string>(4);
s1.push("usman");
s1.push("noman");
s1.traverse();
// s1.pop();
// s1.traverse();

const s2 = new Stack<{ name: string; age: number }>(10);
s2.push({
  name: "usman",
  age: 20,
});
s2.push({
  name: "noman",
  age: 22,
});

s2.traverse();
s1.peek()
