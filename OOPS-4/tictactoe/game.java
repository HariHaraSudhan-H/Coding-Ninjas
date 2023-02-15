package tictactoe;

import java.util.Scanner;

public class game {
    static Scanner scan = new Scanner(System.in);
    private player player1, player2;
    private board gameBoard;
    int size;

    public static void main(String[] args) {
        game TicTacToe = new game();
        TicTacToe.startGame();
    }

    private static player takePlayerInput(int num) {
        System.out.println("Enter player " + num + " name");
        String name = scan.next();
        System.out.println("Enter symbol for player " + num);
        String value = scan.next();
        player player = new player(name, value.charAt(0));
        return player;
    }

    public void startGame() {

        player1 = takePlayerInput(1);
        player2 = takePlayerInput(2);
        gameBoard = new board(player1, player2);
        while (player1.getValue() == player2.getValue()) {
            System.out.println("Player 2 symbol already taken\nEnter symbol for player 2");
            char value = scan.next().charAt(0);
            player2.setValue(value);
        }
        int game = board.INCOMPLETE;
        int currentPlayer = 1;
        while (game == board.INCOMPLETE || game == board.INVALID_MOVE) {
            if (currentPlayer == 1) {
                System.out.println("Enter " + player1.getName() + " position");
                int x = scan.nextInt();
                int y = scan.nextInt();
                game = gameBoard.placeValue(player1, x, y);
                if (game == board.INVALID_MOVE)
                    System.out.println("Invalid Move");
                else{
                    currentPlayer = 2;
                    gameBoard.print();
                }
            } else {
                System.out.println("Enter " + player2.getName() + " position");
                int x = scan.nextInt();
                int y = scan.nextInt();
                game = gameBoard.placeValue(player2, x, y);
                if (game == board.INVALID_MOVE)
                    System.out.println("Invalid Move");
                else{
                    currentPlayer = 1;
                    gameBoard.print();
                }
            }
        }
        if (game == board.A_WINS) {
            System.out.println(player1.getName() + " wins!!");
        } else if (game == board.B_WINS) {
            System.out.println(player2.getName() + " wins!!");
        } else
            System.out.println("Game Draw!!");
    }
}
