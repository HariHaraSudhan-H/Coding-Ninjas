public class stacksUse{
    public static void main(String[] args) throws stackFullException, stackEmptyException {
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

    }
}