import java.util.Collections;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class buyTicket {
    public static int buyTicket(int input[], int k) {
		/* Your class should be named Solution
		* Don't write main().
		* Don't read input, it is passed as function argument.
		* Return output and don't print it.
		* Taking input and printing output is handled automatically.
		*/
		// int me = input[k];
		Queue<Integer> index = new LinkedList<>();
		PriorityQueue<Integer> pr = new PriorityQueue<>(Collections.reverseOrder());
		for(int i=0;i<input.length;i++){
			index.add(i);
		}
		for(int i=0;i<input.length;i++){
			pr.add(input[i]);
		}
		int time =0;
		while(!index.isEmpty()){
			if(input[index.peek()]==pr.peek()){
				time++;
				if(index.peek()==k)
					return time;
				pr.poll();
				index.poll();
			}else{
				index.add(index.poll());
			}
		}
		return time;
	}
}
