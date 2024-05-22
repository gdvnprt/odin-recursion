const mergeSort = (array) => {
    //if the array is one number, return that number
    let newArray = [];
    if (array.length == 1) {
        newArray.unshift(array[0]);
    } else {
        //take the current array and split it in half
        let halfLength = Math.ceil(array.length / 2);
        let leftSide = array.slice(0, halfLength);
        let rightSide = array.slice(halfLength, array.length);
        //recursively sort each half
        mergeSort(leftSide);
        mergeSort(rightSide);
        //compare the first place of each array and place the lowest number first
        while (leftSide.length > 0) {
            if (leftSide[0] < rightSide[0]) {
                newArray.unshift(leftSide[0]);
                leftSide.shift()
            } else {
                newArray.unshift(rightSide[0]);
                rightSide.shift();
            };
        };
    };
    return newArray;
};