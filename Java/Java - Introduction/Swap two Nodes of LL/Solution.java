import java.util.Scanner;

public class Solution {
    static Scanner scan =new Scanner(System.in);
	public static LinkedListNode<Integer> swapNodes(LinkedListNode<Integer> head, int i, int j) {
		//Your code goes here
        LinkedListNode<Integer> elementI=null,elementJ=null,previous = null,elementIPrev=null,elementJPrev=null;
       
        int count=0;
        LinkedListNode<Integer> temp = head;
        while(temp!=null){
            if(count==i){
                elementIPrev=previous;
                elementI = temp;
            }
            if(count==j){
                elementJ=temp;
                elementJPrev = previous;
            }
            previous=temp;
            count++;
            temp=temp.next;
        }
        if(elementIPrev!=null)
            elementIPrev.next=elementJ;
        else
            head=elementJ;
        if(elementJPrev!=null)
            elementJPrev.next=elementI;
        else
            head=elementI;
        LinkedListNode<Integer> elementINext = elementI.next;
        elementI.next=elementJ.next;        
        elementJ.next=elementINext;
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
        //print(head);
        head=swapNodes(head,2,4);
        print(head);
    }

}