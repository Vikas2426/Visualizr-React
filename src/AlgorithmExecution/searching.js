const searching = (algorithm, inputValue, num) => {
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
    arr = arr.map(value => parseInt(value));
    let n1 = new Date().getTime();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            let n2 = new Date().getTime();
            console.log(i)
            return (n2 - n1);
        }
    }
    let n2 = new Date().getTime();
    return (n2 - n1);
}


const binarySearch = (sortedArray, key) => {
    sortedArray = sortedArray.map(value => parseInt(value));
    sortedArray.sort();
    let n1 = new Date().getTime();
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            let n2 = new Date().getTime();
            return (n2 - n1);
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
    return (n2 - n1);
}





export default searching;