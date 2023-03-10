public class sumOfAllNodes {
    public static int sumOfAllNode(TreeNode<Integer> root){
		if(root==null)
			return 0;
		int sum =0;
		for(TreeNode<Integer> i : root.children){
			sum+=sumOfAllNode(i);
		}
		return root.data+sum;
	}
}
