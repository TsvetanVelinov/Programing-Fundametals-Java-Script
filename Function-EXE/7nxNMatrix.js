function nxnMatrix(nXn) {


    function rowGenerator() {
        let row = "";

        for (let j = 1; j <= nXn; j++) {
            row += `${nXn} `;
        }
        return row;
    }

    for (let i = 1; i <= nXn; i++) {
        console.log(rowGenerator());
    }

}

nxnMatrix(3)