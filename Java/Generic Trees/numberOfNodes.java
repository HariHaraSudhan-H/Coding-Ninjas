public class numberOfNodes {
    public static int numberOfNodesInTree(TreeNode<Integer> root) {
        if(root==null)
            return 0;
        int count=0;
        for(TreeNode<Integer> i : root.children){
            count+=i.children.size();
        }
        return 1+root.children.size()+count;
    }
}
