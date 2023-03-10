import java.util.Scanner;

public class minTo1WithDP {
    public static int countMinStepsToOne(int n) {
		//Your code goes here
		if(n==1)
			return 0;
		if(n<4)
			return 1;
		int[] ans = new int[n+1];
		ans[0] = 0;
		ans[1] = 0;
		ans[2] = 1;
		ans[3] = 1;
		for (int i = 4; i < ans.length; i++) {
			int ans1 = Integer.MAX_VALUE, ans2 = Integer.MAX_VALUE, ans3 = Integer.MAX_VALUE;
			if (i % 2 == 0) {
				ans1 = ans[i / 2];
			}
			if (i % 3 == 0) {
				ans2 = ans[i / 3];
			}
			ans3 = ans[i - 1];
			ans[i] = 1 + Math.min(Math.min(ans1, ans2), ans3);
		}
		return ans[n];
	}
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        System.out.print(countMinStepsToOne(n));
        scan.close();
    }
}
