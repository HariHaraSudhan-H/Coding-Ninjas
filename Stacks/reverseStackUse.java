import java.util.Stack;

public class reverseStackUse {
    public static void reverseStack(Stack<Integer> input, Stack<Integer> extra) {
		//Your code goes here;
		if(input.size()<=1)
			return;
		int lastElement = input.pop();
		reverseStack(input,extra);
		while(!input.isEmpty()){
			extra.push(input.pop());
		}
		input.push(lastElement);
		while(!extra.isEmpty()){
			input.push(extra.pop());
		}
	}
}
