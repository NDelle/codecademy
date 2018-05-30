let board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
];

const printBoard = board => {
    console.log('Current Board:');
    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));
};

printBoard(board);

//set '1' to the first nested array and second element
board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);