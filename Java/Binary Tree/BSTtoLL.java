public class BSTtoLL {
    static ansReturn ans=new ansReturn(null, null);
	public static ansReturn constructLinkedListHelper(binaryTreeNode<Integer> root) {
		if(root==null)
			return new ansReturn(null,null);
		ansReturn left = constructLinkedListHelper(root.left);
		LinkedListNode<Integer> main = new LinkedListNode<Integer>(root.data);
		ansReturn right = constructLinkedListHelper(root.right);
		ansReturn ans = new ansReturn(main,main);
		if(left.head!=null){
			left.tail.next=main;
			ans.head=left.head;
		}
		main.next=right.head;
		if(right.head!=null){
			ans.tail=right.tail;
		}
		return ans;
	}
	public static LinkedListNode<Integer> constructLinkedList(binaryTreeNode<Integer> root){
		if(root==null)
			return null;
		return constructLinkedListHelper(root).head;
	}
}
class ansReturn {
	LinkedListNode<Integer> head;
	LinkedListNode<Integer> tail;
	public ansReturn(){
		
	}
	public ansReturn(LinkedListNode<Integer> head, LinkedListNode<Integer> tail) {
		this.head = head;
		this.tail = tail;
	}
}