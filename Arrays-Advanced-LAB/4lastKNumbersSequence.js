function lastKNumberSequence(length, k) {

    let sequence = [1];

    while (length > sequence.length) {
        let newK = sequence.slice(-k);
        let sum = 0;
        for (let i = 0; i < newK.length; i++) {
            sum += newK[i];
        }
        sequence.push(sum)
    }

    console.log(sequence.join(" "));
}

lastKNumberSequence(6, 3)