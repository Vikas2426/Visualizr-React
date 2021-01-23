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
    for (let i = 0; i <= inputValue; i++) { }
    let n2 = new Date().getTime();
    return (n2 - n1);
};



const addNumberAP = (inputValue) => {
    let n1 = new Date().getTime();
    //eslint-disable-next-line
    let ans = (inputValue * (inputValue + 1)) / 2
    let n2 = new Date().getTime();
    return (n2 - n1);
};



const addNumberOptimizedAP = (inputValue) => {
    let n1 = new Date().getTime();
    //eslint-disable-next-line
    let ans = (inputValue / 2) * (inputValue + 1)
    let n2 = new Date().getTime();
    return (n2 - n1);
};


export default addition;