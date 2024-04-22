// arrat traversal
var traverseArray = function (arg) {
    arg.forEach(function (element) {
        console.log(element);
    });
};
var strArr = ["hello", "hi", "by"];
var numArr = [3, 2, 54, 76];
var numStrArr = [23, 54, "hello", "lol", "blah"];
// traverseArray(strArr);
// traverseArray(numArr);
// traverseArray(numStrArr);
// array insertion
var insertArray = function (arg, val, index) {
    if (index < 0 || index > arg.length) {
        throw new Error("index not in range");
    }
    var args = arg;
    var i = arg.length - 1;
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
var deleteFromArray = function (arg, index) {
    var i = index;
    while (i < arg.length) {
        arg[i] = arg[i + 1];
        i++;
    }
    return arg;
};
// console.log(deleteFromArray(numArr, 1));
var searchInArray = function (arr, x) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
};
// console.log(searchInArray(numStrArr,"blah"))
// Binary search 
var binarySearch = function (arr, x) {
    var midpoint;
    var start = 0;
    var end = arr.length;
    while (arr[midpoint] !== x && start < end) {
        midpoint = Math.floor((start + end) / 2);
        if (arr[midpoint] === x) {
            return midpoint;
        }
        else if (arr[midpoint] > x) {
            end = midpoint - 1;
        }
        else if (arr[midpoint] < x) {
            start = midpoint + 1;
        }
    }
    return -1;
};
var mystrarr = ["abi", "babi", "cabi", "labi"];
// console.log(binarySearch(numArr,54));
// console.log(binarySearch(mystrarr, "zbi"));
// Bubble sort
var bubbleSort = function (arr) {
    var sortedArr = arr;
    var isSorted = true;
    for (var i = 0; i < sortedArr.length; i++) {
        for (var j = 0; j < sortedArr.length - i; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                var temp = sortedArr[j + 1];
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
var findPivot = function (arr, low, high) {
    var pivot = arr[high];
    var k = low - 1;
    for (var i = low; i <= high - 1; i++) {
        if (arr[i] < pivot) {
            k++;
            var temp_1 = arr[k];
            arr[k] = arr[i];
            arr[i] = temp_1;
        }
    }
    var temp = arr[k + 1];
    arr[k + 1] = pivot;
    arr[high] = temp;
    return k + 1;
};
var quickSort = function (arr, low, high) {
    if (low < high) {
        var pivot = findPivot(arr, low, high);
        quickSort(arr, pivot + 1, high);
        quickSort(arr, low, pivot - 1);
    }
};
var mynumArr = [3, 54, 63, 12, 6, 87, 23, 76, 96, 234, 56, 87, 23, 12];
// quickSort(mynumArr, 0, mynumArr.length -1);
 console.log(mynumArr);
