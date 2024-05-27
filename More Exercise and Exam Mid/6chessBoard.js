function chessBoard(param) {
    let buff = '<div class="chessboard">\n';
    
    for (let row = 0; row < param; row++) {
        buff += '\t<div>\n';
        for (let col = 0; col < param; col++) {
            if ((row + col) % 2 === 0) {
                buff += '\t\t<span class="black"></span>\n';
            } else {
                buff += '\t\t<span class="white"></span>\n';
            }
        }
        buff += '\t</div>\n';
    }

    buff += '</div>';
    console.log(buff);
}

chessBoard(3);