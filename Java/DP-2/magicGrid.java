public class magicGrid {
    public static int getMinimumStrength(int[][] grid) {
        
        /* Your class should be named Solution
		 * Don't write main().
		 * Don't read input, it is passed as function argument.
		 * Return output and don't print it.
	 	 * Taking input and printing output is handled automatically.
        */
        int row=grid.length;
        if(row==0)
            return row;
        int col = grid[0].length;
        if(col==0)
            return col;
        int[][] output = new int[row][col];
        output[row-1][col-1]=(grid[row-1][col-1]>0)?1:Math.abs(grid[row-1][col-1])+1;
        for(int i=row-2;i>=0;i--){
            output[i][col-1]=output[i+1][col-1]-grid[i][col-1];
        }
        for(int i=col-2;i>=0;i--){
            output[row-1][i]=output[row-1][i+1]-grid[row-1][i];
        }
        for(int i=row-2;i>=0;i--){
            for(int j=col-2;j>=0;j--){
                output[i][j]=Math.min(output[i+1][j],output[i][j+1]);
                output[i][j]=Math.max(output[i][j]-grid[i][j],1);
            }
        }
        return output[0][0];
    }
}
