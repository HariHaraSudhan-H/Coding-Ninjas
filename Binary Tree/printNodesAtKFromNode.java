public class printNodesAtKFromNode {
    public static void nodesAtK(binaryTreeNode<Integer> root, int k){
		if(root==null)
			return ;
		if(k==0){
			System.out.println(root.data);
			return ;
		}
		nodesAtK(root.left, k-1);
		nodesAtK(root.right, k-1);
	}
	public static int nodesAtDistanceK(binaryTreeNode<Integer> root, int node, int k) {
	    //Your code goes here
		if(root==null)
			return -1;
		if(root.data==node){
			nodesAtK(root, k);
			return 0;
		}
		int LD = nodesAtDistanceK(root.left, node, k);
		if(LD!=-1){
			if(++LD==k){
				System.out.println(root.data);
			}else{
				nodesAtK(root.right,k-LD-1);
			}
			return LD;
		} 
		int RD = nodesAtDistanceK(root.right, node, k);
		if(RD!=-1){
			if(++RD==k){
				System.out.println(root.data);
			}else{
				nodesAtK(root.left,k-RD-1);
			}
			return RD;
		}
		return -1;
	}
}
