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
        sortedArray.sort();
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
    return `function quickSortIterative(arr) {
        // Creating an array that we'll use as a stack, using the push() and pop() functions
        stack = [];
        
        // Adding the entire initial array as an "unsorted subarray"
        stack.push(0);
        stack.push(arr.length - 1);
        
        // There isn't an explicit peek() function
        // The loop repeats as long as we have unsorted subarrays
        while(stack[stack.length - 1] >= 0){
            
            // Extracting the top unsorted subarray
            end = stack.pop();
            start = stack.pop();
            
            pivotIndex = partition(arr, start, end);
            
            // If there are unsorted elements to the "left" of the pivot,
            // we add that subarray to the stack so we can sort it later
            if (pivotIndex - 1 > start){
                stack.push(start);
                stack.push(pivotIndex - 1);
            }
            
            // If there are unsorted elements to the "right" of the pivot,
            // we add that subarray to the stack so we can sort it later
            if (pivotIndex + 1 < end){
                stack.push(pivotIndex + 1);
                stack.push(end);
            }
        }
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