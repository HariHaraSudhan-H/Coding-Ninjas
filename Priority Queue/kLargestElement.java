import java.util.PriorityQueue;

public class kLargestElement {
    public static int kthLargest(int n, int[] input, int k) {
		// Write your code here
		PriorityQueue<Integer> pr = new PriorityQueue<>();
		for(int i=0;i<n;i++){
			pr.add(input[i]);
		}
		for(int i=0;i<(n-k);i++){
			pr.poll();
		}
		return pr.poll();
	}
}
