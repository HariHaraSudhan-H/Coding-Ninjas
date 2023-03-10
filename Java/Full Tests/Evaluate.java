import java.util.Scanner;
import java.util.Stack;

public class Evaluate {
    static Scanner scan = new Scanner(System.in);
	
	public static int calculateExpression(String s) {
		Stack<Integer> stack = new Stack<>();
		int operand = 0;
		int result = 0;
		int sign = 1;
		for (int i = 0; i < s.length(); i++) {
			char ch = s.charAt(i);
			if (Character.isDigit(ch)) {
				operand = 10 * operand + (int) (ch - '0');
			} else if (ch == '+') {
				result += sign * operand;
				sign = 1;
				operand = 0;
			} else if (ch == '-') {
				result += sign * operand;
				sign = -1;
				operand = 0;
			} else if (ch == '(') {
				stack.push(result);
				stack.push(sign);
				sign = 1;
				result = 0;
			} else if (ch == ')') {
				result += sign * operand;
				result *= stack.pop();
				result += stack.pop();
				operand = 0;
			}
		}
		return result + (sign * operand);
	}
    public static void main(String[] args) {
        String s=scan.next();
	System.out.println(calculateExpression(s));
    }
}
