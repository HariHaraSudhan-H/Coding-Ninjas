package othello;

import java.util.Scanner;

public class game {
    static Scanner scan = new Scanner(System.in);
    private player player1, player2;
    private board gameBoard;
    int size;
    public void startGame(){
        player1 = takePlayerInput(1);
        player2 = takePlayerInput(2);
        gameBoard = new board(player1, player2);
    }
    private static player takePlayerInput(int num) {
        System.out.println("Enter player " + num + " name");
        String name = scan.next();
        System.out.println("Enter symbol for player " + num);
        String value = scan.next();
        player player = new player(name, value.charAt(0));
        return player;
    }
}

