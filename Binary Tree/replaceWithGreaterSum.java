public class replaceWithGreaterSum {
    static int sum = 0;
	public static void replaceWithLargerNodesSum(binaryTreeNode<Integer> root) {
		// Write your code here
		if(root==null)
			return;
		if(root.left==null&&root.right==null){
			sum+=root.data;
			root.data=sum;
			return;
		}
		replaceWithLargerNodesSum(root.right);
		sum+=root.data;
		root.data=sum;
		replaceWithLargerNodesSum(root.left);
	}
}
