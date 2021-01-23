(this.webpackJsonpvizualizr=this.webpackJsonpvizualizr||[]).push([[0],{16:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t){},29:function(e,t,n){e.exports=n.p+"static/media/v-logo.4697a594.png"},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),l=n.n(i),o=n(1),c=n(4),u=(n(25),n(26),function(e){return{type:"CHANGE_PROBLEM",payload:e}}),s=function(e){return{type:"CHANGE_INPUT_VALUE",payload:e}};var m=function(){var e=Object(o.c)((function(e){return e.problem})),t=Object(o.b)(),n=function(e){t({type:"CHANGE_ALGORITHM",payload:e.target.textContent})};return"add Numbers"===e?r.a.createElement("div",{className:"algo-btn-div"},r.a.createElement("button",{onClick:n},"Naive"),r.a.createElement("button",{onClick:n},"A.P."),r.a.createElement("button",{onClick:n},"Optimized A.P.")):"searching"===e?r.a.createElement("div",{className:"algo-btn-div"},r.a.createElement("button",{onClick:n},"Linear Search"),r.a.createElement("button",{onClick:n},"Binary Search")):"sorting"===e?r.a.createElement("div",{className:"algo-btn-div"},r.a.createElement("button",{onClick:n},"Bubble Sort"),r.a.createElement("button",{onClick:n},"Quick Sort"),r.a.createElement("button",{onClick:n},"Merge Sort")):""===e?r.a.createElement("div",{className:"algo-btn-div"},"Algorithm options appear hear."):void 0},d=n(12);var f=function(){var e=Object(o.c)((function(e){return e.data}));return r.a.createElement("div",{className:"chart-container"},r.a.createElement(d.a,{width:"100%",height:"100%",chartType:"LineChart",loader:r.a.createElement("div",null,"Loading Chart"),data:e,options:{hAxis:{title:"Input"},vAxis:{title:"Execution Time (ms)"}},rootProps:{"data-testid":"1"},animation:{duration:20}}))},p=(n(27),n(14)),g=n.n(p);var h=function(){var e=Object(o.c)((function(e){return e.algorithm}));return Object(a.useEffect)((function(){g.a.highlightAll()})),r.a.createElement("div",{id:"algoDiv"},r.a.createElement("pre",{id:"algorithm"},r.a.createElement("code",{className:"language-javascript",id:"code-content"},function(e){return"Naive"===e?"function addNumber(inputValue){ \n        var sum = 0;\n        for (let i = 0; i <= inputValue; i++){\n            sum += i;\n        }\n    }":"A.P."===e?"function addNumber = (inputValue) => {\n        let sum = inputValue * (inputValue - 1) / 2 ; \n      };":"Optimized A.P."===e?"function addNumber = (inputValue) => { \n        let sum = (inputValue / 2) * (inputValue - 1) ;\n      };":"Linear Search"===e?"function linearSearch(arr, key){\n        for(let i = 0; i < arr.length; i++){\n            if(arr[i] === key){\n                return i\n            }\n        }\n        return -1\n    }":"Binary Search"===e?"function binarySearch(sortedArray, key){\n        let start = 0;\n        let end = sortedArray.length - 1;\n    \n        while (start <= end) {\n            let middle = Math.floor((start + end) / 2);\n    \n            if (sortedArray[middle] === key) {\n                // found the key\n                return middle;\n            } else if (sortedArray[middle] < key) {\n                // continue searching to the right\n                start = middle + 1;\n            } else {\n                // search searching to the left\n                end = middle - 1;\n            }\n        }\n        // key wasn't found\n        return -1;\n    }":"Bubble Sort"===e?"function bubbleSort(inputArr) {\n        let n = inputArr.length;\n        \n        for(let i = 0; i < n; i++) {\n            for(let j = 0; j < n; j++) {\n                // Comparing and swapping the elements\n                if(inputArr[j] > inputArr[j+1]){\n                    let t = inputArr[j];\n                    inputArr[j] = inputArr[j+1];\n                    inputArr[j+1] = t;\n                }\n            }\n        }\n        return inputArr;\n    }":"Quick Sort"===e?"function partition(arr, start, end){\n        // Taking the last element as the pivot\n        const pivotValue = arr[end];\n        let pivotIndex = start; \n        for (let i = start; i < end; i++) {\n            if (arr[i] < pivotValue) {\n            // Swapping elements\n            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];\n            // Moving to next element\n            pivotIndex++;\n            }\n        }\n        \n        // Putting the pivot value in the middle\n        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] \n        return pivotIndex;\n    };\n    \n    function quickSortRecursive(arr, start, end) {\n        // Base case or terminating case\n        if (start >= end) {\n            return;\n        }\n        \n        // Returns pivotIndex\n        let index = partition(arr, start, end);\n        \n        // Recursively apply the same logic to the left and right subarrays\n        quickSort(arr, start, index - 1);\n        quickSort(arr, index + 1, end);\n    }":"Merge Sort"===e?"function mergeSort(array) {\n        const half = array.length / 2\n        \n        // Base case or terminating case\n        if(array.length < 2){\n          return array \n        }\n        \n        const left = array.splice(0, half)\n        return merge(mergeSort(left),mergeSort(array))\n      }\n\n    function merge(left, right) {\n        let arr = []\n        // Break out of loop if any one of the array gets empty\n        while (left.length && right.length) {\n            // Pick the smaller among the smallest element of left and right sub arrays \n            if (left[0] < right[0]) {\n                arr.push(left.shift())  \n            } else {\n                arr.push(right.shift()) \n            }\n        }\n        \n        // Concatenating the leftover elements\n        // (in case we didn't go through the entire left or right array)\n        return [ ...arr, ...left, ...right ]\n    }":""}(e))))};var b=function(){return r.a.createElement("div",{className:"code-container"},r.a.createElement(h,null))},v=function(e){for(var t=(new Date).getTime(),n=0;n<=e;n++);return(new Date).getTime()-t},E=function(e){var t=(new Date).getTime();return(new Date).getTime()-t},y=function(e){var t=(new Date).getTime();return(new Date).getTime()-t},N=function(e,t){switch(e){case"Naive":return v(t);case"A.P.":return E(t);case"Optimized A.P.":return y(t);default:return alert("returned")}},A=function(e,t){e=e.map((function(e){return parseInt(e)}));for(var n=(new Date).getTime(),a=0;a<e.length;a++)if(e[a]===t){var r=(new Date).getTime();return console.log(a),r-n}return(new Date).getTime()-n},j=function(e,t){(e=e.map((function(e){return parseInt(e)}))).sort();for(var n=(new Date).getTime(),a=0,r=e.length-1;a<=r;){var i=Math.floor((a+r)/2);if(e[i]===t)return(new Date).getTime()-n;e[i]<t?a=i+1:r=i-1}return(new Date).getTime()-n},C=function(e,t,n){switch(e){case"Linear Search":return A(t,n);case"Binary Search":return j(t,n);default:return alert("returned")}};n(28);var k=function(){var e=Object(o.c)((function(e){return e.problem})),t=Object(o.c)((function(e){return e.inputValue})),n=Object(o.c)((function(e){return e.algorithm})),a=Object(o.c)((function(e){return e.num})),i=Object(o.b)(),l=0;return r.a.createElement("div",{className:"form-container input-Form"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{type:"text",className:"form-input",id:"inlineFormInputName2",autoComplete:"off",value:t,onChange:function(t){return function(t){if("add Numbers"===e)i(s(t.target.value));else if("searching"===e||"sorting"===e){var n=t.target.value.split(",");i(s(n))}}(t)},placeholder:"add Numbers"===e?"any number":"searching"===e||"sorting"===e?"comma separated integer (n1,n2,n3)":""}),"searching"===e&&r.a.createElement("input",{type:"text",className:"form-input num",id:"inlineFormInputName2",autoComplete:"off",value:a,onChange:function(e){return i({type:"CHANGE_NUM",payload:e.target.value})},placeholder:"search for"}),r.a.createElement("button",{onClick:function(r){r.preventDefault(),""===n?alert("Please select an algorithm."):("add Numbers"===e?l=N(n,t):"searching"===e&&(l=C(n,t,a)),i({type:"CHANGE_DATA",payload:[t,l]}))},type:"submit",className:"form-btn body-btn",id:"submit"},"Submit")))};var O=function(){var e=Object(o.b)();return r.a.createElement("nav",{className:"navbar"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:n(29),alt:"logo"}),"izualizr"),r.a.createElement("div",{className:"options"},r.a.createElement("button",{className:"addNumbersBtn",onClick:function(){e(u("add Numbers"))}},"Add Upto"),r.a.createElement("button",{className:"searchingBtn",onClick:function(){e(u("searching"))}},"Searching"),r.a.createElement("button",{className:"sortingBtn",onClick:function(){e(u("sorting"))}},"Sorting")))};var S=function(){var e=(new Date).getFullYear();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(k,null),r.a.createElement(m,null),r.a.createElement("div",{className:"my-container"},r.a.createElement(f,null),r.a.createElement(b,null))),r.a.createElement("footer",null,"Copyright @ Vikas Choubey, India, ",e))},w=n(15),T=n(2),x={problem:"",inputValue:[],algorithm:"",data:[["Input","Time"],[0,0]],num:""},I=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_PROBLEM":return Object(T.a)(Object(T.a)({},x),{},{problem:t.payload});case"CHANGE_ALGORITHM":return Object(T.a)(Object(T.a)({},e),{},{algorithm:t.payload});case"CHANGE_INPUT_VALUE":return Object(T.a)(Object(T.a)({},e),{},{inputValue:t.payload});case"CHANGE_DATA":return Object(T.a)(Object(T.a)({},e),{},{data:[].concat(Object(w.a)(e.data),[t.payload])});case"CHANGE_NUM":return Object(T.a)(Object(T.a)({},e),{},{num:t.payload});default:return e}}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:I},r.a.createElement(S,null))),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.41b05fad.chunk.js.map