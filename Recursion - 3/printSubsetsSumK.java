public class printSubsetsSumK {
    public static void printSubsetsSumTokHelper(int input[], int k,int[] output, int startIndex) {
		if(startIndex==input.length){
			if(k==0){
				for(int j=0;j<output.length;j++){
					System.out.print(output[j]+" ");
				}
				System.out.println();
			}
			return;
		}
		int[] newOutput = new int[output.length+1];
		for(int i=0;i<output.length;i++){
			newOutput[i]=output[i];
		}
		newOutput[newOutput.length-1]=input[startIndex];
		printSubsetsSumTokHelper(input,k-input[startIndex],newOutput,startIndex+1);
		printSubsetsSumTokHelper(input,k,output,startIndex+1);

	}
	public static void printSubsetsSumTok(int input[], int k) {
		// Write your code here
		printSubsetsSumTokHelper(input,k,new int[0],0);
	}
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        printSubsetsSumTok(arr, 5);
    }
}
