public class NQueen {
    private static boolean isSafe(int[][] board,int row,int col,int n){
		if(row==0)
			return true;
		
		for(int i=0;i<row;i++){
			if(board[i][col]==1){
				return false;
			}
		}
		int i=1;
		while(row-i>=0&&col-i>=0){
			if(board[row-i][col-i]==1)
				return false;
			i++;
		}
		i=1;
		while(row-i>=0&&row-i<n&&col+i<n){
			if(board[row-i][col+i]==1)
				return false;
			i++;
		}
		return true;
	}
	public static void placeQueens(int[][] board,int n,int row){
		if(row==n){
			printBoard(board);
			System.out.println();
			return;
		}
		for(int col=0;col<n;col++){
			if(isSafe(board,row,col,n)){
				board[row][col]=1;
				placeQueens(board,n,row+1);
				board[row][col]=0;
			}
		}
		
	}
		
	public static void placeNQueens(int n){
		
	/* Your class should be named Solution.
	 * Don't write main() function.
	 * Don't read input, it is passed as function argument.
	 * Print output as specified in the question
	 */
	int[][] board = new int[n][n];
	placeQueens(board,n,0);

	}
	public static void printBoard(int[][] board){
		for (int[] i : board) {
			for (int j : i) {
				System.out.print(j + " ");
			}
		}
	}
    public static void main(String[] args) {
        placeNQueens(5);
    }
}
