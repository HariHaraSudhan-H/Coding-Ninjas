import java.util.Stack;

public class stacksUse{
    public static void main(String[] args) throws stackFullException, stackEmptyException {
        Stack<Integer> stack1 = new Stack<>();
        stack1.peek();
        stacksByArray stack = new stacksByArray();
        stack.push(3);
        stack.push(5);
        //System.out.println(stack.size());
        System.out.println(stack.pop());
        //System.out.println(stack.size());
        System.out.println(stack.pop());
        stack.push(6);
        System.out.println(stack.pop());
        System.out.println(stack.isEmpty());
        stacksByLL stacksByLL = new stacksByLL();
        stacksByLL.push(3);
        stacksByLL.push(5);
        //System.out.println(stack.size());
        System.out.println(stacksByLL.pop());
        //System.out.println(stack.size());
        System.out.println(stacksByLL.pop());
        stacksByLL.push(6);
        System.out.println(stacksByLL.pop());
        System.out.println(stacksByLL.isEmpty());
    }
}