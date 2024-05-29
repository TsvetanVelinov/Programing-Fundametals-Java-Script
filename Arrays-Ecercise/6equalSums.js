function equalSums(array) {

    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;

    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length; j++) {

            if (index !== j) {
                let num = array[j]
                if (j < index) {
                    leftSum += num;
                } else {
                    rightSum += num;
                }
            }
            if (index === 0) {
                leftSum = 0;
            } else if (index === array.length - 1) {
                rightSum = 0;
            }
        }
        if (leftSum === rightSum) {
            console.log(index);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }

    if (!isEqual) {
        console.log(`no`);
    }

}

equalSums([1, 2, 3, 3])