package tictactoe;

import java.util.Scanner;

public class board {
    static Scanner scan = new Scanner(System.in);
    char[][] board;
    int count;
    int size;
    player player1;
    player player2;
    private static final char EMPTY = ' ';
    public static final int A_WINS=1;
    public static final int B_WINS=2;
    public static final int DRAW=3;
    public static final int INCOMPLETE=4;
    public static final int INVALID_MOVE=5;

    public board(player player1, player player2) {
        this.board=new char[3][3];
        for(int i=0;i<board.length;i++){
            for(int j=0;j<board[0].length;j++){
                board[i][j]=EMPTY;
            }
        }
        this.count=0;
        this.player1 = player1;
        this.player2 = player2;
        this.size=3;
    }
    public int checkWin(player Player,int x,int y) {
        if(board[x][0]==board[x][1]&&board[x][0]==board[x][2]){
            return Player.getValue()==player1.getValue()?A_WINS:B_WINS;
        }
        if(board[0][y]==board[1][y]&&board[0][y]==board[2][y]){
            return Player.getValue()==player1.getValue()?A_WINS:B_WINS;
        }
        if(board[0][0]!=EMPTY&& board[1][1]==board[0][0]&&board[2][2]==board[1][1]){
            return Player.getValue()==player1.getValue()?A_WINS:B_WINS;
        }
        if(board[0][2]!=EMPTY&&board[1][1]==board[0][2]&&board[1][1]==board[2][0]){
            return Player.getValue()==player1.getValue()?A_WINS:B_WINS;
        }
        if(count==size*size)
            return DRAW;
        else
            return INCOMPLETE;
    }
    public int placeValue(player Player,int x,int y){
        if(x<0||x>=size||y<0||y>=size||board[x][y]!=EMPTY)
            return INVALID_MOVE;
        board[x][y]=Player.getValue();
        count++;
        return checkWin(Player,x,y);
    }
    public void print(){
        for(int i=0;i<size;i++){
            for(int j=0;j<size;j++){
                System.out.print("|"+board[i][j]+"|");
            }
            System.out.println();
        }
    }
    public int getCount() {
        return count;
    }
    
}
