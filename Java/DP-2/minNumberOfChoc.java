public class minNumberOfChoc {
    public static int getMin(int arr[], int N){
        
        /* Your class should be named Solution
		 * Don't write main().
		 * Don't read input, it is passed as function argument.
		 * Return output and don't print it.
	 	 * Taking input and printing output is handled automatically.
        */
        if(arr.length<=1)
			return arr.length;
		int[] output = new int[N];
		for(int i=0;i<output.length;i++){
			output[i]=1;
		}
		for(int i=1;i<output.length;i++){
			if(arr[i]>arr[i-1])
				output[i]=output[i-1]+1;
		}
		int sum =output[N-1];
		for(int i=N-2;i>=0;i--){
			if(arr[i]>arr[i+1])
				output[i]=Math.max(output[i],output[i+1]+1);
			sum+=output[i];
		}
		return sum;
    }
}
