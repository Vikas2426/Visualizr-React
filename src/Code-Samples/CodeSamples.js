function NaiveAddition() {
    return `function addNumber(inputValue){ 
        var sum = 0;
        for (let i = 0; i <= inputValue; i++){
            sum += i;
        }
    }`
}

function APAddition() {
    return `function addNumber = (inputValue) => {
        let sum = inputValue * (inputValue - 1) / 2 ; 
      };`
}

function OptimizedAP() {
    return `function addNumber = (inputValue) => { 
        let sum = (inputValue / 2) * (inputValue - 1) ;
      };`
}

function LinearSearch() {
    return `function linearSearch(arr, key){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === key){
                return i
            }
        }
        return -1
    }`
}

function BinarySearch() {
    return `function binarySearch(sortedArray, key){
        let start = 0;
        let end = sortedArray.length - 1;
    
        while (start <= end) {
            let middle = Math.floor((start + end) / 2);
    
            if (sortedArray[middle] === key) {
                // found the key
                return middle;
            } else if (sortedArray[middle] < key) {
                // continue searching to the right
                start = middle + 1;
            } else {
                // search searching to the left
                end = middle - 1;
            }
        }
        // key wasn't found
        return -1;
    }`
}

function BubbleSort() {
    return `function bubbleSort(inputArr) {
        let n = inputArr.length;
        
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                // Comparing and swapping the elements
                if(inputArr[j] > inputArr[j+1]){
                    let t = inputArr[j];
                    inputArr[j] = inputArr[j+1];
                    inputArr[j+1] = t;
                }
            }
        }
        return inputArr;
    }`
}

function QuickSort() {
    return `function partition(arr, start, end){
        // Taking the last element as the pivot
        const pivotValue = arr[end];
        let pivotIndex = start; 
        for (let i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
            // Swapping elements
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            // Moving to next element
            pivotIndex++;
            }
        }
        
        // Putting the pivot value in the middle
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
        return pivotIndex;
    };
    
    function quickSortRecursive(arr, start, end) {
        // Base case or terminating case
        if (start >= end) {
            return;
        }
        
        // Returns pivotIndex
        let index = partition(arr, start, end);
        
        // Recursively apply the same logic to the left and right subarrays
        quickSort(arr, start, index - 1);
        quickSort(arr, index + 1, end);
    }`
}

function MergeSort() {
    return `function mergeSort(array) {
        const half = array.length / 2
        
        // Base case or terminating case
        if(array.length < 2){
          return array 
        }
        
        const left = array.splice(0, half)
        return merge(mergeSort(left),mergeSort(array))
      }

    function merge(left, right) {
        let arr = []
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift())  
            } else {
                arr.push(right.shift()) 
            }
        }
        
        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [ ...arr, ...left, ...right ]
    }`
}

export { NaiveAddition, APAddition, OptimizedAP, LinearSearch, BinarySearch, BubbleSort, QuickSort, MergeSort }