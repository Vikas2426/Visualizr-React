const searching = (algorithm, inputValue, num) => {
    inputValue = inputValue.map(value => parseInt(value));
    num = parseInt(num)
    switch (algorithm) {
        case "Linear Search":
            return linearSearch(inputValue, num);
        case "Binary Search":
            return binarySearch(inputValue, num);
        default:
            return alert("returned");
    }
}

const linearSearch = (arr, key) => {
    let n1 = new Date().getTime();
    for (let i = 0; i < 100000000; i++) { }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            let n2 = new Date().getTime();
            return [(n2 - n1), "Found at " + i];
        }
    }
    let n2 = new Date().getTime();
    return [(n2 - n1), "not present"];
}


const binarySearch = (sortedArray, key) => {
    sortedArray.sort();
    let n1 = new Date().getTime();
    for (let i = 0; i < 100000000; i++) { }
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            let n2 = new Date().getTime();
            return [(n2 - n1), "Found at " + middle];
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    let n2 = new Date().getTime();
    return [(n2 - n1), "not present"];
}


export default searching;