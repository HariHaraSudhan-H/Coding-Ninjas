public class smallestSuperSequence {
    public static int smallestSuperSequenceOperation(String str1, String str2) {

        /* Your class should be named Solution
		 * Don't write main().
		 * Don't read input, it is passed as function argument.
		 * Return output and don't print it.
	 	 * Taking input and printing output is handled automatically.
        */
        if(str1.length()==0)
			return str2.length();
		if(str2.length()==0)
			return str1.length();
		int[][] output = new int[str1.length()+1][str2.length()+1];
		for(int i=0;i<output[0].length;i++){
			output[0][i]=i;
		}
		for(int i=1;i<output.length;i++){
			output[i][0]=i;
		}
		for(int i=1;i<output.length;i++){
			for(int j=1;j<output[0].length;j++){
				if(str1.charAt(i-1)==str2.charAt(j-1)){
					output[i][j]=1+output[i-1][j-1];
				}else{
					output[i][j]=1+Math.min(output[i-1][j],output[i][j-1]);
				}
			}
		}
		return output[str1.length()][str2.length()];
	}
}
