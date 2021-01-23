// import { BubbleSort } from "../Code-Samples/CodeSamples";

// const sorting = (algorithm, inputValue) => {
//     switch (algorithm) {
//         case "Bubble Sort":
//             return bubbleSort(inputValue);
//         case "Merge Sort":
//             return mergeSort(inputValue);
//         case "Quick Sort":
//             return quickSort(inputValue);
//         default:
//             return alert("returned");
//     }
// }
// function bubbleSort(inputArr) {
//     let n1 = new Date().getTime();

//     let n = inputArr.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             // Comparing and swapping the elements
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let t = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = t;
//             }
//         }
//     }
//     let n2 = new Date().getTime();
//     return (n2 - n1);
// }

// function partition(arr, start, end) {
//     // Taking the last element as the pivot
//     const pivotValue = arr[end];
//     let pivotIndex = start;
//     for (let i = start; i < end; i++) {
//         if (arr[i] < pivotValue) {
//             // Swapping elements
//             [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
//             // Moving to next element
//             pivotIndex++;
//         }
//     }

//     // Putting the pivot value in the middle
//     [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
//     return pivotIndex;
// };

// function quickSortRecursive(arr, start, end) {
//     // Base case or terminating case
//     if (start >= end) {
//         return;
//     }

//     // Returns pivotIndex
//     let index = partition(arr, start, end);

//     // Recursively apply the same logic to the left and right subarrays
//     quickSort(arr, start, index - 1);
//     quickSort(arr, index + 1, end);
// }



// function mergeSort(array) {
//     const half = array.length / 2

//     // Base case or terminating case
//     if (array.length < 2) {
//         return array
//     }

//     const left = array.splice(0, half)
//     return merge(mergeSort(left), mergeSort(array))
// }

// function merge(left, right) {
//     let arr = []
//     // Break out of loop if any one of the array gets empty
//     while (left.length && right.length) {
//         // Pick the smaller among the smallest element of left and right sub arrays 
//         if (left[0] < right[0]) {
//             arr.push(left.shift())
//         } else {
//             arr.push(right.shift())
//         }
//     }

//     // Concatenating the leftover elements
//     // (in case we didn't go through the entire left or right array)
//     return [...arr, ...left, ...right]
// }






// export default sorting;