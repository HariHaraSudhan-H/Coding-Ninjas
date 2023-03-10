public class maxSquareMatrixWithAllZeros {
    public static int findMaxSquareWithAllZeros(int[][] input){
        
        /* Your class should be named Solution.
         * Don't write main() function.
         * Don't read input, it is passed as function argument.
         * Return output and don't print it.
         * Taking input and printing output is handled automatically.
         */
        if(input.length<=0)
            return 0;
        if(input.length==1&&input[0].length==1){
            if(input[0][0]==0)
                return 1;
            else
                return 0;
        }
        int[][] output = new int[input.length][input[0].length];
        for(int i=0;i<output.length;i++){
            if(input[i][0]==0)
                output[i][0]=1;
            else
                output[i][0]=0;
        }
        for(int i=1;i<output[0].length;i++){
            if(input[0][i]==0)
                output[0][i]=1;
            else
                output[0][i]=0;
        }
        int max=0;
        for(int i=1;i<output.length;i++){
            for(int j=1;j<output[0].length;j++){
                if(input[i][j]==0){
                    output[i][j]=Math.min(output[i-1][j-1],Math.min(output[i-1][j],output[i][j-1]))+1;
                    if(output[i][j]>max)
                        max=output[i][j];
                }else{
                    output[i][j]=0;
                }
            }
        }
        return max;
        }
}
