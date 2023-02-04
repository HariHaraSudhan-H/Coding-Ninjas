public class subsetSum {
    static boolean isSubsetPresent(int[] arr, int n, int sum) {

        /* Your class should be named Solution
		 * Don't write main().
		 * Don't read input, it is passed as function argument.
		 * Return output and don't print it.
	 	 * Taking input and printing output is handled automatically.
        */
        boolean[][] output = new boolean[n+1][sum+1];
        for(int i=1;i<sum+1;i++){
            output[0][i]=false;
        }
        for (int i = 0; i < n + 1; i++) {
            output[i][0] = true;
        }
        for (int i = 1; i < n+1; i++) {
            for(int j=1;j<sum+1;j++){
                output[i][j]=output[i-1][j];
                if(j>=arr[i-1]){
                    output[i][j]=output[i][j]||output[i-1][j-arr[i-1]];
                }
            }
        }
        return output[n][sum];
    }
}
