public class KnapSack {
    public static int knapsackHelper(int[] weights, int[] values, int n, int maxWeight,int i,int[][] output){
		if(i==n){
			output[maxWeight][i]=0;
			return output[maxWeight][i];
		}
		if(weights[i]<=maxWeight){
			if(output[maxWeight][i]!=-1)
				return output[maxWeight][i];
			output[maxWeight][i]=Math.max(knapsackHelper(weights, values, n, maxWeight-weights[i], i+1,output)+values[i],knapsackHelper(weights, values, n, maxWeight, i+1,output));
			return output[maxWeight][i];
		}
		if (output[maxWeight][i] != -1)
			return output[maxWeight][i];
		output[maxWeight][i]=knapsackHelper(weights, values, n, maxWeight, i+1,output);
		return output[maxWeight][i];
	}
	public static int knapsack(int[] weights, int[] values, int n, int maxWeight) {
		//Your code goes here
		int[][] output = new int[maxWeight+1][n+1];
		for(int i=0;i<output.length;i++){
			for(int j=0;j<output[0].length;j++){
				output[i][j]=-1;
			}
		}
		return knapsackHelper(weights, values, n, maxWeight, 0,output);
	}
    public static int knapsackI(int[] weights, int[] values, int n, int maxWeight) {
		//Your code goes here
		int[][] output = new int[n+1][maxWeight+1];
		for(int i=n-1;i>=0;i--){
			for(int j=0;j<=maxWeight;j++){
				if(weights[i]<=j){
                    output[i][j]=Math.max((output[i+1][j-weights[i]]+values[i]), output[i+1][j]);
                }else
                    output[i][j]=output[i+1][j];
			}
		}
        // for(int i=0;i<output.length;i++){
		// 	for(int j=0;j<output[0].length;j++){
		// 		System.out.print( output[i][j]+" ");
		// 	}
        //     System.out.println();
		// }
		return output[0][maxWeight];
	}
    public static void main(String[] args) {
        int[] weights = {1,2,4,5};
        int[] values = {5,4,8,6};
        System.out.println(knapsack(weights, values, weights.length, 5));
        
        System.out.println(knapsackI(weights, values, weights.length, 5));

    }
}
