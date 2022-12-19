public class binaryTreeUse {
    public static void printTree(binaryTreeNode<Integer> root) {
        if (root == null)
            return;
        System.out.print(root.data + ":");
        if (root.left != null)
            System.out.print("L" + root.left.data+" ");
        if (root.right != null)
            System.out.print("R" + root.right.data);
        System.out.println();
        printTree(root.left);
        printTree(root.right);
    }

    public static void main(String[] args) {
        binaryTreeNode<Integer> root = new binaryTreeNode<>(1);
        binaryTreeNode<Integer> leftroot = new binaryTreeNode<>(2);
        binaryTreeNode<Integer> rightroot = new binaryTreeNode<>(3);
        root.left = leftroot;
        root.right = rightroot;

        binaryTreeNode<Integer> rightNode = new binaryTreeNode<>(4);

        binaryTreeNode<Integer> leftNode = new binaryTreeNode<>(5);
        leftroot.right = rightNode;
        rightroot.left = leftNode;
        printTree(root);
    }
}
