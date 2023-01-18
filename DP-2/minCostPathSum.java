public class minCostPathSum {
    public static int minCostPathHelper(int[][] input,int i,int j,int n,int m,int[][]output){
		if(i<0||j<0||i>=n||j>=m)
			return Integer.MAX_VALUE;
		if(i==n-1&&j==m-1){
			output[i][j]=input[i][j];
			return input[i][j];
		}
		if(output[i][j]==Integer.MIN_VALUE)
			output[i][j]=input[i][j]+Math.min(Math.min(minCostPathHelper(input, i, j+1, n,m, output),minCostPathHelper(input, i+1, j, n,m, output)),minCostPathHelper(input, i+1, j+1, n,m,output));
		return output[i][j];
	}
	public static int minCostPath(int[][] input) {
		//Your code goes here
		int n = input.length;
		int m= input[0].length;
		int[][] output = new int[n][m];
		for(int i=0;i<n;i++){
			for(int j=0;j<m;j++){
				output[i][j]=Integer.MIN_VALUE;
			}
		}
		minCostPathHelper(input, 0, 0, n,m, output);
		return output[0][0];
	}
	public static int minCostPathI(int[][] input){
		int n = input.length;
		int m= input[0].length;
		int[][] output = new int[n+1][m+1];
		for(int i=0;i<n+1;i++){
			output[i][m]=Integer.MAX_VALUE;
		}
		for(int i=0;i<m+1;i++){
			output[n][i]=Integer.MAX_VALUE;
		}
		for(int i=n-1;i>=0;i--){
			for(int j=m-1;j>=0;j--){
				if(i==n-1&&j==m-1){
					output[i][j]=input[i][j];
					continue;
				}
				output[i][j]=input[i][j]+Math.min(Math.min(output[i][j+1], output[i+1][j]),output[i+1][j+1]);
			}
		}
		return output[0][0];
	}
	public static void main(String[] args) {
		int[][] input = {{3,4,1,2},{2,1,8,9},{4,7,8,1}};
		System.out.println(minCostPath(input));
		System.out.println(minCostPathI(input));
	}
}