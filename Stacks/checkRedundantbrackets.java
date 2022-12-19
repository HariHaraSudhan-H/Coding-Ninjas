import java.util.Stack;

public class checkRedundantbrackets {
	public static boolean checkRedundantBrackets(String expression) {
		//Your code goes here
		Stack<Character> bracket = new Stack<>();
		int count=0;
        for(int i=0;i<expression.length();i++){
            char character = expression.charAt(i);
            if(character!=')'){
				bracket.push(character);
			}
			else{
				while(bracket.peek()!='('){
					bracket.pop();
					count++;
				}
				if(count>1){
					bracket.pop();
					count=0;
				}
				else
					return true;
			}
        }
		return false;
	}
}
