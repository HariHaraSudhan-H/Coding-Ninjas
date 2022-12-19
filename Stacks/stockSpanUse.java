import java.util.Stack;

public class stockSpanUse {
    public static int[] stockSpan(int[] price) {
		//Your code goes here
		int[] ans = new int[price.length];
		Stack<Integer> stack = new Stack<>();
		stack.push(0);
		ans[0]=1;
		for(int i=1;i<price.length;i++){
			while(!stack.isEmpty()&&price[stack.peek()]<price[i]){
				stack.pop();
			}
			if(!stack.isEmpty())
				ans[i]=i-stack.peek();
			else
				ans[i]=i+1;
				
			stack.push(i);
		}
		return ans;
	}
}
