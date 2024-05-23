const mergeSort = (array) => {
    let newArray = [];
    //if the array is one number, return that number
    if (array.length == 0) {
        newArray = array;
    } else if (array.length == 1) {
        newArray = array;
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
            if (rightSide.length == 0) {
                newArray.concat(leftSide);
            } else if (leftSide[0] <= rightSide[0]) {
                newArray.unshift(leftSide[0]);
                leftSide.shift();
            } else {
                newArray.unshift(rightSide[0]);
                rightSide.shift();
            };
        };
        //if left side's length is 0, return the other array
        if (rightSide.length > 0) {
            newArray.concat(rightSide);
        };
    };
//return the sorted array
return newArray;
};