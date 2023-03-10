import java.util.PriorityQueue;

class BinaryTreeNode<T> {
	T data;
	BinaryTreeNode<T> left;
	BinaryTreeNode<T> right;

	public BinaryTreeNode(T data) {
		this.data = data;
	}
	public void setRight(BinaryTreeNode<T> root)
	{
		right=root;
		
	}
	public void setLeft(BinaryTreeNode<T> root)
	{
		left=root;
		
	}
}
public class merge2BST {
    static void printMergeTreesHelper(BinaryTreeNode<Integer> root,PriorityQueue<Integer> queue){
		if(root==null)
			return;
		queue.add(root.data);
		printMergeTreesHelper(root.left, queue);
		printMergeTreesHelper(root.right, queue);
	}
	static void printMergeTrees(BinaryTreeNode<Integer> root1,
			BinaryTreeNode<Integer> root2) {
		/*
		 * Your class should be named Solution.Don't write main().Don't take
		 * input, it is passed as function argument.Print output as specified in
		 * question.
		 */
		PriorityQueue<Integer> queue = new PriorityQueue<>();
		printMergeTreesHelper(root1, queue);
		printMergeTreesHelper(root2, queue);
		while(!queue.isEmpty()){
			System.out.print(queue.poll()+" ");
		}
	}
}
