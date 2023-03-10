public class returnSubsetsSumK {
    public static int[][] subsetsSumK(int input[], int k) {
		// Write your code here
		if(input.length==0){
			if(k==0){
				return new int[1][0];
			}else{
				return new int[0][0];
			}
		}
		int[] newInput = new int[input.length-1];
		for(int i=1;i<input.length;i++){
			newInput[i-1]=input[i];
		}
		int[][] x=subsetsSumK(newInput,k-input[0]);
		int[][] y=subsetsSumK(newInput,k);
		int[][] output = new int[x.length+y.length][input.length];
		for(int i=0;i<y.length;i++){
			output[i]=y[i];
		}
		for(int i=0;i<x.length;i++){
			int[] newArray = new int[x[i].length+1];
			newArray[0]=input[0];
			for(int j=0;j<x[i].length;j++){
				newArray[j+1]=x[i][j];
			}
			output[y.length+i]=newArray;
		}
		return output;
	}
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};
        int[][] output = subsetsSumK(arr, 5);
        for(int[] i:output){
            for(int j:i){
                System.out.print(j+" ");
            }
            System.out.println();
        }
    }
}
