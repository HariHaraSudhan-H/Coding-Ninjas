package othello;

import java.sql.Blob;

public class board {
    char[][] board;
    int size = 8;
    player Player1;
    player Player2;
    int count;
    private static final char EMPTY = ' ';
    private static final char BLACK = 'B';
    private static final char WHITE = 'W';

    public board(player player1, player player2) {
        this.Player1 = player1;
        this.Player2 = player2;
        this.board = new char[size][size];
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                board[i][j] = EMPTY;
            }
        }
        board[3][3] = WHITE;
        board[4][4] = WHITE;
        board[3][4] = BLACK;
        board[4][3] = BLACK;
        this.count = 0;
    }

}
