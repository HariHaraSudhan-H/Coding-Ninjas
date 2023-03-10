import java.util.LinkedList;
import java.util.Queue;

public class stackUsing2Queues {
    //Define the data members
    private Queue<Integer> q1;
    private Queue<Integer> q2;

    public stackUsing2Queues() {
        //Implement the Constructor
        q1 = new LinkedList<>();
        q2 = new LinkedList<>();
    }



    /*----------------- Public Functions of Stack -----------------*/


    public int getSize() { 
        //Implement the getSize() function
        return q1.size();
    }

    public boolean isEmpty() {
        //Implement the isEmpty() function
        return q1.size()==0;
    }

    public void push(int element) {
        //Implement the push(element) function
        q2.add(element);
        while(!q1.isEmpty()){
            q2.add(q1.poll());
        }
        Queue<Integer> temp = q2;
        q2=q1;
        q1=temp;
    }

    public int pop() {
        //Implement the pop() function
        if(q1.isEmpty())
            return -1;
        int temp = q1.poll();
        return temp;
    }

    public int top() {
        //Implement the top() function
        if(q1.isEmpty())
            return -1;
        return q1.peek();
    }
}
