const addition = (algorithm, inputValue) => {
    switch (algorithm) {
        case "Naive":
            return addNumber(inputValue);
        case "A.P.":
            return addNumberAP(inputValue);
        case "Optimized A.P.":
            return addNumberOptimizedAP(inputValue);
        default:
            return alert("returned");
    }
}
const addNumber = (inputValue) => {
    let n1 = new Date().getTime();
    let ans = 0;
    for (let i = 0; i <= inputValue; i++) {
        ans += i;
    }
    let n2 = new Date().getTime();
    return [(n2 - n1), ans];
};



const addNumberAP = (inputValue) => {
    let n1 = new Date().getTime();
    //eslint-disable-next-line
    let ans = (inputValue * (inputValue + 1)) / 2
    let n2 = new Date().getTime();
    return [(n2 - n1), ans];
};



const addNumberOptimizedAP = (inputValue) => {
    let n1 = new Date().getTime();
    //eslint-disable-next-line
    let ans = (inputValue / 2) * (inputValue + 1)
    let n2 = new Date().getTime();
    return [(n2 - n1), ans];
};


export default addition;