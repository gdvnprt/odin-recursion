const mergeSort = (array) => {
    //if the array is one number, return that number
    if (array.length <= 1) {
        return array;
    } else {
        //take the current array and split it in half
        let halfLength = Math.ceil(array.length / 2);

        //recursively sort each half
        let leftSide = mergeSort(array.slice(0, halfLength));
        let rightSide = mergeSort(array.slice(halfLength, array.length));

        //return the sorted array
        return merge(leftSide, rightSide);
    };
};


//merge helper
const merge = (left, right) => {
    let newArray = [];
    while (left.length && right.length) {
        //compare the first place of each array and place the lowest number first
        if (left[0] <= right[0]) {
            newArray.push(left[0]);
            left.shift();
        } else {
            newArray.push(right[0]);
            right.shift();
        };
    };
return [...newArray, ...left, ...right];
};