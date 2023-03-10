public class printRatMaze {
    public static void ratInAMazeHelper(int maze[][], int path[][], int i, int j) {
		if (i < 0 || j < 0 || i >= maze.length || j >= maze.length || path[i][j] == 1 || maze[i][j] == 0)
			return;
		path[i][j] = 1;
		if (i == maze.length - 1 && j == maze.length - 1) {
			printPath(path);
			System.out.println();
			path[i][j] = 0;
			return;
		}
		ratInAMazeHelper(maze, path, i - 1, j);
		ratInAMazeHelper(maze, path, i, j + 1);
		ratInAMazeHelper(maze, path, i, j - 1);
		ratInAMazeHelper(maze, path, i + 1, j);
        path[i][j]=0;
	}
	public static void printPath(int[][] path) {
		for (int[] i : path) {
			for (int j : i) {
				System.out.print(j + " ");
			}
		}
	}
	static void ratInAMaze(int maze[][], int n) {
		/* 
			* Your class should be named Solution.
			* Write your code here
		 */
		ratInAMazeHelper(maze, new int[maze.length][maze[0].length], 0, 0);
	}
    public static void main(String[] args) {
        int[][] maze = {{1,1},{1,1}};
        ratInAMaze(maze,maze.length);
    }
}
