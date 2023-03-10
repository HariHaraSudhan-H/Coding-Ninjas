public class staircase {
    public static long staircaseWithDP(int n){
		long[] ans = new long[n+1];
		for(int i=0;i<ans.length;i++){
			ans[i]=-1;
		}
		return staircaseHelper(n, ans);
	}
	public static long staircaseHelper(int n,long[] ans) {
		//Your code goes here
		if(n<0)
			return 0;
		if(n==0){
			return 1;
		}
		if(n<3){
			return n;
		}
		long ans1,ans2,ans3;
		if(ans[n-1]==-1){
			ans1=staircaseHelper(n-1, ans);
			ans[n-1]=ans1;
		}else
			ans1=ans[n-1];
		if (ans[n - 2] == -1) {
			ans2 = staircaseHelper(n - 2, ans);
			ans[n - 2] = ans2;
		} else
			ans2 = ans[n - 2];
		if (ans[n - 3] == -1) {
			ans3 = staircaseHelper(n - 3, ans);
			ans[n - 3] = ans3;
		} else
			ans3 = ans[n - 3];
		return ans1+ans2+ans3;
	}
}
