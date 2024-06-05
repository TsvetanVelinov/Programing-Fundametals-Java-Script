function memoryGame(input) {

    let board = input.shift().split(' ');

    let command = input.shift();
    let turn = 1;

    while (command !== "end" && board.length > 0) {

        let [first, second] = command.split(' ').map(Number);

        if ((first < 0 || first >= board.length) ||
            (second < 0 || second >= board.length) || (first === second)) {

            console.log("Invalid input! Adding additional elements to the board");

            let middleIndex = board.length / 2;
            let fill = `-${turn}a`;
            board.splice(middleIndex, 0, fill, fill);
        } else {
            if (board[first] === board[second]) {
                console.log(`Congrats! You have found matching elements - ${board[first]}!`);

                if (first > second) {
                    board.splice(first, 1);
                    board.splice(second, 1);
                } else {
                    board.splice(second, 1);
                    board.splice(first, 1);
                }
            } else {
                console.log(`Try again!`);
            }
        }

        if (board.length === 0) {
            console.log(`You have won in ${turn} turns!`);
        }

        command = input.shift()
        turn++;

    }
    if (board.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(board.join(" "));
    }
}



memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"])

memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"])