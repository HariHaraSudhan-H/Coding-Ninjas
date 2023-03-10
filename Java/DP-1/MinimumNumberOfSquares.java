public class MinimumNumberOfSquares {
    public static int minCountHelper(int n,int[] ans){
		if(n<4)
			return n;
		int result = n;
		for(int i=1;i*i<=n;i++){
			if(ans[n-i*i]==-1)
				result = Math.min(result,minCountHelper(n-i*i,ans));
			else
				result = Math.min(result,ans[n-i*i]);
		}
		ans[n]=result+1;
		return result+1;
	}
	public static int minCount(int n) {
		//Your code goes here
		if(n<4)
			return n;
		int[] ans = new int[n+1];
		ans[0]=0;
		ans[1]=1;
		ans[2]=2;
		ans[3]=3;
		for(int i=4;i<ans.length;i++){
			ans[i]=-1;
		}
		minCountHelper(n, ans);
		return ans[n];
	}
    public static int minCountIterative(int n){
        if(n<4)
			return n;
		int[] ans = new int[n+1];
		ans[0]=0;
		ans[1]=1;
		ans[2]=2;
		ans[3]=3;
		for(int i=4;i<ans.length;i++){
            int result = i;
            for(int j=1;j*j<=i;j++){
                result = Math.min(result,ans[i-j*j]);
            }
            ans[i]=1+result;
		}
        //System.out.println(ans.length);
		return ans[n];
    }
    public static void main(String[] args) {
        System.out.println(minCount(88));
        System.out.println(minCountIterative(88));
    }
}
