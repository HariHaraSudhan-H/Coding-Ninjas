import java.util.*;
public class pathSumRouteToLeaf {
	static Stack<Integer> queue1 = new Stack<>();
	static Stack<Integer> queue2 = new Stack<>();
	static int sum=0;
	public static void printList(){
		while(!queue1.isEmpty()){
			int data = queue1.pop();
			queue2.push(data);
		}
		while(!queue2.isEmpty()){
			int data = queue2.pop();
			System.out.print(data+" ");
			queue1.push(data);
		}
	}
	public static void rootToLeafPathsSumToK(binaryTreeNode<Integer> root, int k) {
		//Your code goes here
		if(root==null)
			return;
		if(root.left==null&& root.right==null){
			sum+=root.data;
			queue1.push(root.data);
			if(sum==k){
				printList();
				System.out.println();
				queue1.pop();
				sum-=root.data;
				return;
			}
			queue1.pop();
			sum-=root.data;
			return;
		}
		sum+=root.data;
		queue1.push(root.data);
		rootToLeafPathsSumToK(root.left,k);
		rootToLeafPathsSumToK(root.right,k);
		queue1.pop();
		sum-=root.data;
	}

}