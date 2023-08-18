interface queue<T> {
  data: T[];
  head: number;
  tail: number;
  size: number;
  push(x: T): void;
  pop(): T;
  peek(): T;
  traverse(): void;
}

class CircularQueue<T> implements queue<T> {
  data: T[];
  head: number;
  tail: number;
  size: number;
  constructor(size: number) {
    this.size = size;
    this.data = new Array(size);
    this.tail = -1;
    this.head = -1;
  }

  push(x: T): void {
    if (
      (this.head === 0 && this.tail === this.size - 1) ||
      this.head === this.tail + 1
    ) {
      console.error("Queue is full! ");
      return;
    } else if (this.head === -1 && this.tail === -1) {
      this.head = 0;
      this.tail = 0;
      this.data[0] = x;
      //   this.qlength++;
      return;
    } else if (this.tail === this.size - 1) {
      this.tail = 0;
      this.data[this.tail] = x;
      //   this.qlength++;
      return;
    } else {
      this.tail++;
      this.data[this.tail] = x;
      //   this.qlength++;
      return;
    }
  }
  pop(): T {
    if (this.head === -1 || this.tail === -1) {
      console.error("Queue is already empty! ");
      return;
    } else if (this.head === this.tail) {
      const x: T = this.data[this.head];
      this.head = -1;
      this.tail = -1;
      return x;
    } else if (this.head === this.size - 1) {
      const x: T = this.data[this.head];
      this.head = 0;
      return x;
    } else {
      const x: T = this.data[this.head];
      this.head++;
      return x;
    }
  }
  peek(): T {
    if (this.head === -1 || this.tail === -1) {
      console.error("Queue is empty! ");
      return;
    } else {
      return this.data[this.head];
    }
  }
  traverse(): void {
    if (this.head === -1 || this.tail === -1) {
      console.error("Queue is empty! ");
      return;
    } else {
      let i: number = this.head;
      console.log(this.data[this.head])
      do {
          i = ++i % this.size;
          console.log(this.data[i]);
      } while (i !== this.tail);
    }
  }
}

const cq1 = new CircularQueue<number>(4);
cq1.push(1)
cq1.push(2)
cq1.push(3)
cq1.push(4)
cq1.push(5)
cq1.traverse()
console.log("\n")
cq1.pop();
cq1.pop();
cq1.traverse();
cq1.push(5)
console.log("\n")
cq1.traverse()




