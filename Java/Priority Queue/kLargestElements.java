import java.util.ArrayList;
import java.util.PriorityQueue;

public class kLargestElements {
    public static ArrayList<Integer> kLargest(int input[], int k) {
		/* Your class should be named Solution
		* Don't write main().
		* Don't read input, it is passed as function argument.
		* Return output and don't print it.
		* Taking input and printing output is handled automatically.
		*/
		PriorityQueue<Integer> queue = new PriorityQueue<>();
		ArrayList<Integer> output = new ArrayList<>();
		for(int i=0;i<input.length;i++){
			queue.add(input[i]);
		}
		for(int i=0;i<input.length-k;i++){
			queue.poll();
		}
		for(int i=0;i<k;i++){
			output.add(queue.poll());
		}
		return output;
	}
}