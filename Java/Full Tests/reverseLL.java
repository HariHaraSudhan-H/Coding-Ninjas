class Node{
    int data;
    Node next;
    Node (int key)
    {
        data=key;
        next=null;
    }
}
public class reverseLL {
    public static Node reverse(Node head, int k)
    {
        //Your code here
        //Make change in the linked list only
        //Return the head of the new Linked list
        if(head==null)
            return null;
        Node prev= null;
        Node current=head;
        Node next=null;
        int count=0;
        while(count<k&&current!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }
        if(next!=null)
            head.next=reverse(next, k);
        return prev;
     }
}
