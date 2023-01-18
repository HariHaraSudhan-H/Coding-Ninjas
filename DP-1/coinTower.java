public class coinTower {
    public static String findWinner(int n, int x, int y) {
		//Your code goes here
		if(n==0)
			return "Whis";
		if(n==1)
			return "Beerus";
		String[] ans = new String[n+1];
		ans[0]="Whis";
		ans[1]="Beerus";
		for(int i=2;i<=n;i++){
			if(i-1>=0&&ans[i-1]=="Whis"){
				ans[i]="Beerus";
			}else if(i-x>=0&&ans[i-x]=="Whis"){
				ans[i]="Beerus";
			}else if(i-y>=0&&ans[i-y]=="Whis"){
				ans[i]="Beerus";
			}else{
				ans[i]="Whis";
			}
		}
		return ans[n];
	}
    public static void main(String[] args) {
        System.out.println(findWinner(6,3,4));
    }
}
