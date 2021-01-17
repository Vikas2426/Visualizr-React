import React, { useEffect } from "react";
import "./prism.css";
import Prism from "prismjs";
import { useSelector } from 'react-redux';

const getAlgoToDisplay = (algorithm) => {

    let algo = "";
    if (algorithm === "Naive") {
        algo = `function addNumber(inputValue){ 
    var sum = 0;
    for (let i = 0; i <= inputValue; i++){
        sum += i;
    }
}`
    }

    else if (algorithm === "A.P.") {
        algo = `function addNumber = (inputValue) => {
        let sum = inputValue * (inputValue - 1) / 2 ; 
      };`
    }
    else if (algorithm === "Optimized A.P.") {
        algo = `function addNumber = (inputValue) => { 
        let sum = (inputValue / 2) * (inputValue - 1) ;
      };` }
    else if (algorithm === "Linear Search") {
        algo = `function linearSearch(arr, key){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === key){
                return i
            }
        }
        return -1
    }` }
    else if (algorithm === "Binary Search") {
        algo = `function binarySearch(sortedArray, key){
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
    }` }
    else if (algorithm === "Bubble Sort") {
        algo = `function bubbleSort(inputArr) {
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
    }` }
    else if (algorithm === "Quick Sort") {
        algo = `function partition(arr, start, end){
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
    }` }
    else if (algorithm === "Merge Sort") {
        algo = `function mergeSort(array) {
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
    }` }
    else { algo = ""; }

    return algo;

}


function Code() {
    const algorithm = useSelector(state => state.algorithm);

    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <div id='algoDiv'>
            <pre id="algorithm">
                <code className="language-javascript" id='code-content'>{getAlgoToDisplay(algorithm)}</code>
            </pre>
        </div>
    );
}

export default Code;