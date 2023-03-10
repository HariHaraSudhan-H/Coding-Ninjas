public class returnSubsetArray {
    public static int[][] subsets(int input[]) {
		// Write your code here
		if(input.length==0){
			int[][] output ={{}};
			return output;
		}
		int[] newInput = new int[input.length-1];
		for(int i=1;i<input.length;i++){
			newInput[i-1]=input[i];
		}
		int[][] output = subsets(newInput);
		int[][] newOutput = new int[output.length*2][input.length];
		for(int i=0;i<output.length;i++){
			newOutput[i]=output[i];
		}
		for (int i = 0; i < output.length; i++) {
			int[] newArray = new int[output[i].length+1];
			newArray[0]=input[0];
			for(int j=1;j<=output[i].length;j++){
				newArray[j]=output[i][j-1];
			}
			newOutput[output.length+i]=newArray;
		}
		return newOutput;
	}
    public static void main(String[] args) {
        int[] arr = {20,10,25};
        int[][] output=subsets(arr);
        for(int i=0;i<output.length;i++){
            for(int j=0;j<output[i].length;j++){
                System.out.print(output[i][j]+" ");
            }
            System.out.println();
        }
    }
}
