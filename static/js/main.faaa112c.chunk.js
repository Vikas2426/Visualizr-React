(this.webpackJsonpvizualizr=this.webpackJsonpvizualizr||[]).push([[0],{12:function(e,t,n){e.exports=n(27)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){e.exports=n.p+"static/media/v-logo.4697a594.png"},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(3),l=n.n(i),o=n(1),c=n(4),u=(n(22),n(23),n(24),function(e){return{type:"CHANGE_PROBLEM",payload:e}}),m=function(e){return{type:"CHANGE_ALGORITHM",payload:e}};var s=function(){var e=Object(o.c)((function(e){return e.problem})),t=Object(o.b)();return"add Numbers"===e?a.a.createElement("div",{className:"algo-btn-div"},a.a.createElement("button",{onClick:function(e){return t(m(e.target.textContent))}},"Naive"),a.a.createElement("button",{onClick:function(e){return t(m(e.target.textContent))}},"A.P."),a.a.createElement("button",{onClick:function(e){return t(m(e.target.textContent))}},"Optimized A.P.")):"searching"===e?a.a.createElement("div",{className:"algo-btn-div"},a.a.createElement("button",{onClick:function(e){return t(m(e.target.textContent))}},"Linear Search"),a.a.createElement("button",{onClick:function(e){return t(m(e.target.textContent))}},"Binary Search")):"sorting"===e?a.a.createElement("div",{className:"algo-btn-div"},a.a.createElement("button",{onClick:function(e){return t(m(e.target.textContent))}},"Bubble Sort"),a.a.createElement("button",{onClick:function(e){return t(m(e.target.textContent))}},"Quick Sort"),a.a.createElement("button",{onClick:function(e){return t(m(e.target.textContent))}},"Merge Sort")):""===e?a.a.createElement("div",{className:"algo-btn-div"},"Algorithm options appear hear."):void 0};var d=function(){return a.a.createElement("div",{className:"chart-container"},a.a.createElement("canvas",{id:"chart"}))},f=(n(25),n(11)),p=n.n(f);var g=function(){var e=Object(o.c)((function(e){return e.algorithm})),t="";return t="Naive"===e?"function addNumber(inputValue){ \n    var sum = 0;\n    for (let i = 0; i <= inputValue; i++){\n        sum += i;\n    }\n}":"A.P."===e?"function addNumber = (inputValue) => {\n        let sum = inputValue * (inputValue - 1) / 2 ; \n      };":"Optimized A.P."===e?"function addNumber = (inputValue) => { \n        let sum = (inputValue / 2) * (inputValue - 1) ;\n      };":"Linear Search"===e?"function linearSearch(arr, key){\n        for(let i = 0; i < arr.length; i++){\n            if(arr[i] === key){\n                return i\n            }\n        }\n        return -1\n    }":"Binary Search"===e?"function binarySearch(sortedArray, key){\n        let start = 0;\n        let end = sortedArray.length - 1;\n    \n        while (start <= end) {\n            let middle = Math.floor((start + end) / 2);\n    \n            if (sortedArray[middle] === key) {\n                // found the key\n                return middle;\n            } else if (sortedArray[middle] < key) {\n                // continue searching to the right\n                start = middle + 1;\n            } else {\n                // search searching to the left\n                end = middle - 1;\n            }\n        }\n        // key wasn't found\n        return -1;\n    }":"Bubble Sort"===e?"function bubbleSort(inputArr) {\n        let n = inputArr.length;\n        \n        for(let i = 0; i < n; i++) {\n            for(let j = 0; j < n; j++) {\n                // Comparing and swapping the elements\n                if(inputArr[j] > inputArr[j+1]){\n                    let t = inputArr[j];\n                    inputArr[j] = inputArr[j+1];\n                    inputArr[j+1] = t;\n                }\n            }\n        }\n        return inputArr;\n    }":"Quick Sort"===e?"function partition(arr, start, end){\n        // Taking the last element as the pivot\n        const pivotValue = arr[end];\n        let pivotIndex = start; \n        for (let i = start; i < end; i++) {\n            if (arr[i] < pivotValue) {\n            // Swapping elements\n            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];\n            // Moving to next element\n            pivotIndex++;\n            }\n        }\n        \n        // Putting the pivot value in the middle\n        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] \n        return pivotIndex;\n    };":"Merge Sort"===e?"\n    function mergeSort(array) {\n        const half = array.length / 2\n        \n        // Base case or terminating case\n        if(array.length < 2){\n          return array \n        }\n        \n        const left = array.splice(0, half)\n        return merge(mergeSort(left),mergeSort(array))\n      }\n\n    function merge(left, right) {\n        let arr = []\n        // Break out of loop if any one of the array gets empty\n        while (left.length && right.length) {\n            // Pick the smaller among the smallest element of left and right sub arrays \n            if (left[0] < right[0]) {\n                arr.push(left.shift())  \n            } else {\n                arr.push(right.shift()) \n            }\n        }\n        \n        // Concatenating the leftover elements\n        // (in case we didn't go through the entire left or right array)\n        return [ ...arr, ...left, ...right ]\n    }":"",Object(r.useEffect)((function(){p.a.highlightAll()})),a.a.createElement("div",{id:"algoDiv"},a.a.createElement("pre",{id:"algorithm"},a.a.createElement("code",{className:"language-javascript",id:"code-content"},t)))};var h=function(){return a.a.createElement("div",{className:"code-container"},a.a.createElement(g,null))};var b=function(){var e=Object(o.c)((function(e){return e.inputValue})),t=Object(o.b)();return a.a.createElement("div",{className:"form-container input-Form"},a.a.createElement("form",{className:"form-inline"},a.a.createElement("input",{type:"text",className:"form-input",id:"inlineFormInputName2",autoComplete:"off",autoFocus:!0,value:e,onChange:function(e){return t({type:"CHANGE_INPUT_VALUE",payload:e.target.value})}}),a.a.createElement("button",{onClick:function(e){e.preventDefault()},type:"submit",className:"form-btn body-btn",id:"submit"},"Submit")))};var v=function(){var e=Object(o.b)();return a.a.createElement("nav",{className:"navbar"},a.a.createElement("a",{className:"navbar-brand",href:"/"},a.a.createElement("img",{src:n(26),alt:"logo"}),"izualizr"),a.a.createElement("div",{className:"options"},a.a.createElement("button",{className:"addNumbersBtn",onClick:function(){e(u("add Numbers"))}},"Add Upto"),a.a.createElement("button",{className:"searchingBtn",onClick:function(){e(u("searching"))}},"Searching"),a.a.createElement("button",{className:"sortingBtn",onClick:function(){e(u("sorting"))}},"Sorting")))};var E=function(){var e=(new Date).getFullYear();return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"App"},a.a.createElement(v,null),a.a.createElement(b,null),a.a.createElement(s,null),a.a.createElement("div",{className:"my-container"},a.a.createElement(d,null),a.a.createElement(h,null))),a.a.createElement("footer",null,"Copyright @ Vikas Choubey, India, ",e))},y=n(2),N={problem:"",inputValue:[],algorithm:""},C=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_PROBLEM":return Object(y.a)(Object(y.a)({},e),{},{problem:t.payload});case"CHANGE_ALGORITHM":return Object(y.a)(Object(y.a)({},e),{},{algorithm:t.payload});case"CHANGE_INPUT_VALUE":return Object(y.a)(Object(y.a)({},e),{},{inputValue:t.payload});default:return e}}));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o.a,{store:C},a.a.createElement(E,null))),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.faaa112c.chunk.js.map