import java.util.*;

public class kSmallestElements {
    public static ArrayList<Integer> kSmallest(int n, int[] input, int k) {
		// Write your code here
		PriorityQueue<Integer> pr = new PriorityQueue<>();
		ArrayList<Integer> output = new ArrayList<>();
		for(int i=0;i<n;i++){
			pr.add(input[i]);
		}
		for(int i=0;i<k;i++){
			output.add(pr.poll());
		}
		return output;
	}
}
