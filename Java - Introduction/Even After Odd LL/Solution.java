public class Solution {

	public static LinkedListNode<Integer> evenAfterOdd(LinkedListNode<Integer> head) {
		//Your code goes here
        if(head==null)
            return head;
        LinkedListNode<Integer> OddHead=null,OddTail=null;
        LinkedListNode<Integer> EvenHead=null,EvenTail=null;
        while(head!=null){
            if(head.data%2==0){
                if(EvenHead==null){
                    EvenHead=head;
                    EvenTail=head;
                }else{
                    EvenTail.next=head;
                    EvenTail=head;
                }
            }
            else{
                if(OddHead==null){
                    OddHead=head;
                    OddTail=head;
                }else{
                    OddTail.next=head;
                    OddTail=head;
                }
            }
            head=head.next;
        }
        if(OddHead!=null){
            OddTail.next=EvenHead;
        }else{
            return EvenHead;
        }
        if(EvenHead!=null){
            EvenTail.next=null;
        }
        return OddHead;
}
}