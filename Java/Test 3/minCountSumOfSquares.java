public class minCountSumOfSquares{
    public static int minCount(int n){
		/* Your class should be named Solution
	 	 * Don't write main().
		 * Don't read input, it is passed as function argument.
		 * Return output and don't print it.
		 * Taking input and printing output is handled automatically.
		*/
		if(n<4)
			return n;
		int result = n;
		for(int i=1;i*i<=n;i++){
			result = Math.min(result,minCount(n-i*i));
		}

		return result+1;
	}
    public static void main(String[] args) {
        System.out.println(minCount(80));
    }
}