public class codingNinja {
    static int l=0;
    void solve(String[] Graph , int n, int m,int i,int j,String s,boolean[][] visited){
		if(s.length()==0){
			l++;
			return;
		}
		if(i<0||i>=n||j<0||j>=m){
			return;
		}
		if(visited[i][j])
			return;
		if(Graph[i].charAt(j)!=s.charAt(0)){
			return;
		}
		visited[i][j]=true;
		solve(Graph, n, m, i-1, j, s.substring(1), visited);
		solve(Graph, n, m, i+1, j, s.substring(1), visited);
		solve(Graph, n, m, i, j-1, s.substring(1), visited);
		solve(Graph, n, m, i, j+1, s.substring(1), visited);
		solve(Graph, n, m, i+1, j-1, s.substring(1), visited);
		solve(Graph, n, m, i-1, j+1, s.substring(1), visited);
		solve(Graph, n, m, i+1, j+1, s.substring(1), visited);
		solve(Graph, n, m, i-1, j-1, s.substring(1), visited);
		visited[i][j]=false;
	}
	int solve(String[] Graph , int n, int m)
	{
		/* Your class should be named Solution
		 * Don't write main().
		 * Don't read input, it is passed as function argument.
		 * Return output and don't print it.
	 	 * Taking input and printing output is handled automatically.
        */
		boolean visited[][] = new boolean[n][m];
		String s = "CODINGNINJA";
		for(int i=0;i<n;i++){
			for(int j=0;j<m;j++){
				if(Graph[i].charAt(j)==s.charAt(0)){
					solve(Graph, n, m, i, j, s,visited);
					if(l>0){
						return 1;
					}
				}
			}
		}
		return 0;
	}
}
