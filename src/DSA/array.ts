// arrat traversal
const traverseArray = <T>(arg: T[]): void => {
  arg.forEach((element) => {
    console.log(element);
  });
};
let strArr: string[] = ["hello", "hi", "by"];
let numArr: number[] = [3, 2, 54, 76];
let numStrArr: (number | string)[] = [23, 54, "hello", "lol", "blah"];

// traverseArray(strArr);
// traverseArray(numArr);
// traverseArray(numStrArr);

// array insertion
const insertArray = <T, U>(
  arg: T[] | U[],
  val: T | U,
  index: number
): T[] | U[] => {
  if (index < 0 || index > arg.length) {
    throw new Error("index not in range");
  }
  let args: T[] | U[] = arg;
  let i = arg.length - 1;
  while (i >= index) {
    args[i + 1] = args[i];
    i--;
  }
  args[index] = val;
  return args;
};

// console.log(insertArray<number, string>(numArr, "lol", numArr.length));
// console.log(insertArray<string, number>(strArr, 22, 3));
// console.log(insertArray<string | number, boolean>(numStrArr, true, 3));

// Array deletion

const deleteFromArray = <T>(arg: T[], index: number): T[] => {
  let i = index;
  while (i < arg.length) {
    arg[i] = arg[i + 1];
    i++;
  }
  return arg;
};

// console.log(deleteFromArray(numArr, 1));

const searchInArray = <T>(arr: T[], x: T): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
};

// console.log(searchInArray(numStrArr,"blah"))

// Binary search 

const binarySearch = <T>(arr: T[], x: T): number => {
  let midpoint: number;
  let start: number = 0;
  let end: number = arr.length;
  while (arr[midpoint] !== x && start < end) {
    midpoint = Math.floor((start + end) / 2);

    if (arr[midpoint] === x) {
      return midpoint;
    } else if (arr[midpoint] > x) {
      end = midpoint - 1;
    } else if (arr[midpoint] < x) {
      start = midpoint + 1;
    }
  }
  return -1;
};

let mystrarr: string[] = ["abi", "babi", "cabi", "labi"];

// console.log(binarySearch(numArr,54));
// console.log(binarySearch(mystrarr, "zbi"));

// Bubble sort

const bubbleSort = <T>(arr: T[]): T[] => {
  let sortedArr: T[] = arr;
  let isSorted: boolean = true;
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length - i; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        let temp: T = sortedArr[j + 1];
        sortedArr[j + 1] = sortedArr[j];
        sortedArr[j] = temp;
        isSorted = false;
      }
    }
    if (isSorted) {
      return sortedArr;
    }
  }

  return sortedArr;
};

// console.log(bubbleSort(numStrArr));

// Quick sort

const findPivot = <T>(arr: T[], low: number, high: number): number => {
  const pivot: T = arr[high];

  let k = low - 1;
  for (let i = low; i <= high - 1; i++) {
    if (arr[i] < pivot) {
      k++;
      let temp: T = arr[k];
      arr[k] = arr[i];
      arr[i] = temp;
    }
  }
  const temp: T = arr[k + 1];
  arr[k + 1] = pivot;
  arr[high] = temp;

  return k + 1;
};

const quickSort = <T>(arr: T[], low: number, high: number): void => {
   
  if (low < high) {
    const pivot: number = findPivot(arr, low, high);
   
    quickSort(arr, pivot + 1, high);
    quickSort(arr, low, pivot - 1);
  }
};


let mynumArr : number[] = [3,54,63,12,6,87,23,76,96,234,56,87,23,12];
// quickSort(mynumArr, 0, mynumArr.length -1);
// console.log(mynumArr);
