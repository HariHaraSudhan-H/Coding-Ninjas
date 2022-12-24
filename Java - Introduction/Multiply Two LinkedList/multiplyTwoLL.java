public class multiplyTwoLL{
    public static  LinkedListNode<Integer>  reverseLinkedListRec( LinkedListNode<Integer>  head) {
		//Your code goes here
        if(head==null||head.next==null){
            return head;
        }
         LinkedListNode<Integer>  newNode=reverseLinkedListRec(head.next);
        //LinkedListNode<Integer> tail = findTail(newNode);
        head.next.next=head;
        head.next=null;
        return newNode;
	}
    public static void printList(LinkedListNode<Integer> head){
        LinkedListNode<Integer> temp = head;
        while(temp!=null){
            System.out.print(temp.data+" ");
            temp=temp.next;
        }
    }
    public static int length(LinkedListNode<Integer> head){
         LinkedListNode<Integer> temp = head;
        int length=0;
         while(temp!=null){
             length++;
             temp=temp.next;
         }
         return length;
    }
    public static  LinkedListNode<Integer> makeEmptyList(int length){
        LinkedListNode<Integer> head = null;
        LinkedListNode<Integer> temp = null;
        while(length>0){
            LinkedListNode<Integer> newNode = new LinkedListNode<Integer>(0);
            if(head==null){
                head=newNode;
                temp=head;
            }
            else{
                temp.next=newNode;
                temp=temp.next;
            }
            length--;
        }
        temp.next=null;
        return head;
    }
    public static void multiply(LinkedListNode<Integer> head1, LinkedListNode<Integer> head2) {
        //Your code goes here
        if(length(head1)<length(head2)){
             LinkedListNode<Integer> change = head1;
             head1=head2;
             head2=change;
        }
        head1=reverseLinkedListRec(head1);
        head2=reverseLinkedListRec(head2);
        LinkedListNode<Integer> head = makeEmptyList(length(head1)+length(head2));
        LinkedListNode<Integer> temp =head,temp1=head1;
        int carry = 0;
        int ans = 0;
        while(head2!=null){
            while(temp1!=null){
                ans = ((temp1.data*head2.data)+carry) + temp.data;
                temp.data = ans%10;
                carry=ans/10;
                temp=temp.next;
                temp1=temp1.next;
            }
            if(carry!=0){
                temp.data=carry;
                carry/=10;
            }
            head2=head2.next;
            if(head2!=null){
            LinkedListNode<Integer> newNode = new LinkedListNode<Integer>(0);
            newNode.next=head1;
            head1 = newNode;
            temp1=head1;
            temp=head;
            }
        }
        head=reverseLinkedListRec(head);
        while(head.data==0){
            head=head.next;
        }   
        printList(head);
    }
}