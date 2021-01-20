import React, { useEffect } from "react";
import "./prism.css";
import Prism from "prismjs";
import { useSelector } from 'react-redux';
import { APAddition, BinarySearch, BubbleSort, LinearSearch, MergeSort, NaiveAddition, OptimizedAP, QuickSort } from "../Code-Samples/CodeSamples";

const getAlgoToDisplay = (algorithm) => {

    let algo = "";
    if (algorithm === "Naive") {
        algo = NaiveAddition();
    }

    else if (algorithm === "A.P.") {
        algo = APAddition();
    }
    else if (algorithm === "Optimized A.P.") {
        algo = OptimizedAP();
    }
    else if (algorithm === "Linear Search") {
        algo = LinearSearch();
    }
    else if (algorithm === "Binary Search") {
        algo = BinarySearch();
    }
    else if (algorithm === "Bubble Sort") {
        algo = BubbleSort();
    }
    else if (algorithm === "Quick Sort") {
        algo = QuickSort();
    }
    else if (algorithm === "Merge Sort") {
        algo = MergeSort()
    }
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