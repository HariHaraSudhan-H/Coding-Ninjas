import java.util.Collections;
import java.util.PriorityQueue;
import java.util.Scanner;

public class arrayCost {
    static Scanner scan = new Scanner(System.in);
	public static void main (String[] args) {
	    // Write your code here
        // Take input and print desired output
		int n= scan.nextInt();
		int arr[] = new int[n];
		for(int i=0;i<n;i++){
			arr[i]=scan.nextInt();
		}
		PriorityQueue<Integer> queue = new PriorityQueue<>(Collections.reverseOrder());
		for(int i=0;i<n;i++){
			queue.add(arr[i]);
		}
		int ans=0;
		for(int i=0;i<n;i++){
			int num=queue.poll();
			if((i%3)!=2)
				ans+=num;
		}
		System.out.println(ans);

	}
}
