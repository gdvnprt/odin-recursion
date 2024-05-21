const fibs = (x) => {
    //create an array starting with 0 and 1
    let fibArr = [0, 1];
    //for x - 2 times loop
    for (let i = 0; i < x-2; i++) {
        //find the last position in the array
        let arrPos = fibArr.length - 1;
        //add the last number in the array to the number before it in the array
        //push the result to the end of the array
        fibArr.push(fibArr[arrPos] + fibArr[arrPos - 1]);
    };
    //return the resulting array
    return fibArr;
};

const fibsRec = (y) => {
    //if 0, shift 0 to the array and return the array
    if (y == 0) {
        return [0];
    } else if (y == 1) {
        return [0, 1];
    } else {
    //add fibs of the last position to fibs of the position before that
    //shift the result to the array
    const fibsRecArr = fibsRec(y - 1);
    return [...fibsRecArr, fibsRecArr[y - 1] + fibsRecArr[y - 2]]
    };
};