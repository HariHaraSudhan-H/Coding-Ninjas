import java.util.Stack;

public class minimumBracketReversal {
    public static int countBracketReversals(String input) {
		//Your code goes here
        if(input.length()%2!=0)
            return -1;
        int count=0;
		Stack<Character> bracket = new Stack<>();
        for(int i=0;i<input.length();i++){
            char character = input.charAt(i);
            if(character=='{'){
                bracket.push(character);
            }
            else if(character=='}'){
                if(bracket.size()==0)
                    bracket.push(character);
                else if(bracket.peek()=='{')
                    bracket.pop();
                else{
                    bracket.push(character);
                }
            }    
        }
        while(!bracket.isEmpty()){
            char c1 = bracket.pop();
            char c2 = bracket.pop();
            if(c1==c2)
                count++;
            else
                count+=2;
        }
        return count;
	}
}
