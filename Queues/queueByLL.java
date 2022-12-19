public class queueByLL<T> {
    private LinkedListNode<T> head;
    private LinkedListNode<T> tail;
    private int size;
    public queueByLL() {
        head=null;
        tail=null;
        size=0;
    }
    public int size(){
        return size;
    }
    public boolean isEmpty(){
        return size==0;
    }
    public T front(){
        return head.data;
    }
    public void enqueue(T element){
        if(head==null){
            head=new LinkedListNode<T>(element);
            tail=head;
        }else{
            tail.next=new LinkedListNode<T>(element);
            tail=tail.next;
        }
        size++;
    }
    public T dequeue() throws QueueEmptyException{ 
        if(size==0)
            throw new QueueEmptyException();
        T temp = head.data;
        head=head.next;
        if(head==null)
            tail=null;
        size--;
        return temp;
    }
}
