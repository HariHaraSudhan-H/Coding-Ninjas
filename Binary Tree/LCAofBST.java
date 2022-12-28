public class LCAofBST {
    public static binaryTreeNode<Integer> getLCAHelper(binaryTreeNode<Integer> root, int a, int b){
		if(root==null||root.data==a||root.data==b)
			return root;
		binaryTreeNode<Integer> left = getLCAHelper(root.left,a,b);
		binaryTreeNode<Integer> right = getLCAHelper(root.right,a,b);
		if(left==null)
			return right;
		if(right==null)
			return left;
		return root;
	}
	public static int getLCA(binaryTreeNode<Integer> root, int a, int b) {
		if(root==null)
			return -1;
		binaryTreeNode<Integer> ans = getLCAHelper(root,a,b);
		if(ans!=null)
			return ans.data;
		else
			return -1;

	}
}
