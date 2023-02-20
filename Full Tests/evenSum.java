import java.util.Scanner;

public class evenSum {
    static Scanner scan = new Scanner(System.in);
	public static void main (String[] args) {
	    // Write your code here
        // Take input and print desired output
		int n=scan.nextInt();
		int[] arr = new int[n];
		int sum=0;
		for(int i=0;i<n;i++){
			arr[i]=scan.nextInt();
			sum+=arr[i];
		}
		int count=0;
		for (int i = 0; i < n; i++) {
			if((sum-arr[i])%2==0)
				count++;
		}
		System.out.println(count);
	}
}
