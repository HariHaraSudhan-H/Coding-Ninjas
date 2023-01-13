public class ratInMaze{
    public static boolean ratInAMazeHelper(int maze[][],int path[][],int i,int j){
		if(i<0||j<0||i>=maze.length||j>=maze.length||path[i][j]==1||maze[i][j]==0)
			return false;
            path[i][j]=1;
		if(i==maze.length-1&&j==maze.length-1){
			return true;
		}
		if(ratInAMazeHelper(maze,path,i-1,j)){
			return true;
		}
		else if(ratInAMazeHelper(maze,path,i,j+1)){
			return true;
		}
		else if(ratInAMazeHelper(maze,path,i,j-1)){
			return true;
		}
		else if(ratInAMazeHelper(maze,path,i+1,j)){
			return true;
		}
		return false;
	}
	public static boolean ratInAMaze(int maze[][]){

		/*Your class should be named Solution. 
		*Don't write main().
	 	*Don't take input, it is passed as function argument.
	 	*Don't print output.
	 	*Taking input and printing output is handled automatically.
		*/ 
        int[][] path = new int[maze.length][maze[0].length];
        boolean output = ratInAMazeHelper(maze,path,0,0);
		return output;
	}
    public static void main(String[] args) {
        int[][] maze = {{1,1},{1,1}};
        System.out.println(ratInAMaze(maze));
    }
}