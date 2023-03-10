public class editDistance {
    public static int editDistanceHelper(String s, String t,int i, int j,int[][] output) {
		if(i==s.length()){
			output[i][j]=t.length()-j;
			return output[i][j];
		}if(j==t.length()){
			output[i][j]=s.length()-i;
			return output[i][j];
		}
		if(s.charAt(i)==t.charAt(j)){
			if(output[i][j]==-1){
				output[i][j]=editDistanceHelper(s, t, i+1, j+1, output);
				return output[i][j];
			}else{
				return output[i][j];
			}
		}else{
			if(output[i][j]==-1){
				output[i][j]=1+Math.min(Math.min(editDistanceHelper(s, t, i, j + 1, output),editDistanceHelper(s, t, i+1, j, output)),editDistanceHelper(s, t, i+1, j+1, output));
				return output[i][j];
			}else
				return output[i][j];
		}
	}
	public static int editDistanceCal(String s, String t) {
		//Your code goes here
		int[][] output = new int[s.length()+1][t.length()+1];
		for(int i=0;i<output.length;i++){
			for(int j=0;j<output[0].length;j++){
				output[i][j]=-1;
			}
		}
		int ans = editDistanceHelper(s, t, 0, 0,output);
		return ans;
    }
    public static void main(String[] args) {
        System.out.println(editDistanceCal("hari", "hai"));
    }
}
