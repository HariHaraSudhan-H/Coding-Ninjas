public class stacksByLL {
    private LinkedListNode<Integer> head;
    private int size;
    public stacksByLL() {
        head=null;
        size=0;
    } 
    public int getSize() { 
        return size;
    }

    public boolean isEmpty() {
        return size==0;
    }

    public void push(int element) {
        LinkedListNode<Integer> newHead = new LinkedListNode<Integer>(element);
        newHead.next = head;
        head=newHead;
        size++;
    }

    public int pop() {
        if(head==null)
            return -1;
        LinkedListNode<Integer> temp = head;
        head=head.next;
        size--;
        return temp.data;
    }

    public int top() {
        if(head==null)
            return -1;
        return head.data;
    }
}
