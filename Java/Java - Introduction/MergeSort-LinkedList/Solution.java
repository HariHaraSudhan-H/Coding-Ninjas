import java.util.Scanner;

public class Solution {
    static Scanner scan = new Scanner(System.in);
    public static LinkedListNode<Integer> midPoint(LinkedListNode<Integer> head) {
        //Your code goes here
        if (head == null || head.next == null)
            return head;
        LinkedListNode<Integer> slow=head,fast=head;
        while(fast.next!=null && fast.next.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;

    }
    public static LinkedListNode<Integer> mergeTwoSortedLinkedLists(LinkedListNode<Integer> head1, LinkedListNode<Integer> head2) {
        //Your code goes here
        if(head1==null&&head2==null)
            return null;
        if(head1==null)
            return head2;
        if(head2==null)
            return head1;
        LinkedListNode<Integer> newHead,tail;
        if(head1.data<head2.data){
            newHead=head1;
            tail=head1;
            head1=head1.next;
        }
        else{
            newHead=head2;
            tail=head2;
            head2=head2.next;
        }
        while(head1!=null&&head2!=null){
            if(head2.data>head1.data){
                tail.next=head1;
                tail=head1;
                head1=head1.next;
            }
            else{
                tail.next=head2;
                tail=head2;
                head2=head2.next;
            }
        }
        if(head1!=null){
            tail.next=head1;
        }
        if(head2!=null){
            tail.next=head2;
        }
        
        return newHead;
    }
	public static LinkedListNode<Integer> mergeSort(LinkedListNode<Integer> head) {
		//Your code goes here
        if(head==null)
            return null;
        if(head.next==null)
            return head;
        LinkedListNode<Integer> midPoint = midPoint(head);
        LinkedListNode<Integer> midStart = midPoint.next;
        midPoint.next=null;
        LinkedListNode<Integer> head1 = mergeSort(head);
        LinkedListNode<Integer> head2= mergeSort(midStart);
        head=mergeTwoSortedLinkedLists(head1,head2);
        return head;
	}
    public static LinkedListNode<Integer> takeInput(){
        int data=scan.nextInt();
        LinkedListNode<Integer> head =null,tail=null;
        while(data!=-1){
            LinkedListNode<Integer> newNode = new LinkedListNode<Integer>(data);
            if(head==null){
                head=newNode;
                tail=newNode;
            }
            else{
                tail.next=newNode;
                tail=tail.next;
            }
            data=scan.nextInt();
        }
        return head;
    }
    public static void print(LinkedListNode<Integer> head){
        LinkedListNode<Integer> temp = head;
        while(temp!=null){
            System.out.print(temp.data+" ");
            temp=temp.next;
        }
    }
    public static void main(String[] args) {
        LinkedListNode<Integer> head = takeInput();
        print(head);
        head=mergeSort(head);
        print(head);
    }
}