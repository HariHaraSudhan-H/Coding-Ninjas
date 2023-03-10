public class waysToMakeCoinChange {
    // public static int countWaysToMakeChangeHelper(int denominations[], int value,int i,int[][] output){
	// 	if(value==0){
	// 		output[i][value]=1;
	// 		return output[i][value];
	// 	}
	// 	if(value<0 || i >= denominations.length){
	// 		output[i][value]=0;
	// 		return output[i][value];
	// 	}
	// 	if(output[i][value]==Integer.MIN_VALUE){
	// 		output[i][value]=countWaysToMakeChangeHelper(denominations, value-denominations[i], i, output);
	// 		output[i][value]+=countWaysToMakeChangeHelper(denominations, value, i+1, output);
	// 		return output[i][value];
	// 	}
	// 	return output[i][value];
	// }
	
	public static int countWaysToMakeChange(int denominations[], int value){
        // Write your code here
		int[] output = new int[value+1];
		for(int i=0;i<output.length;i++){
			output[i]=0;
		}
		output[0]=1;
		for(int i=0;i<denominations.length;i++){
			for(int j=denominations[i];j<=value;j++){
				output[j]+=output[j-denominations[i]];
			}
		}
		return output[value];
	}
}
