import java.util.Scanner;

public class minTo1{
    public static int countMinStepsToOne(int n) {
		//Your code goes here
		if(n==1)
			return 0;
		int ans1=Integer.MAX_VALUE, ans2 = Integer.MAX_VALUE, ans3 = Integer.MAX_VALUE;
		if(n%2==0){
			ans1= 1+countMinStepsToOne(n/2);
		}
		if(n%3==0){
			ans2= 1+countMinStepsToOne(n/3);
		}
		ans3 = 1+countMinStepsToOne(n-1);
		return Math.min(Math.min(ans1,ans2),ans3);
	}
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        System.out.print(countMinStepsToOne(n));
        scan.close();
    }
}