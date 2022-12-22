import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class binaryTreeUse {
    private static Scanner scan = new Scanner(System.in);
    public static diameterReturn diameterOfBinaryTree1(binaryTreeNode<Integer> root){
		if(root==null)
			return new diameterReturn(0,0);
		if(root.left==null && root.right==null){
			return new diameterReturn(1,1);
		}
		diameterReturn leftDia = diameterOfBinaryTree1(root.left);
		diameterReturn rightDia =  diameterOfBinaryTree1(root.right);
		/*if(leftDia==null)
			return new diameterReturn(rightDia.height+1,rightDia.diameter);
		if(rightDia==null)
			return new diameterReturn(leftDia.height+1,leftDia.diameter);*/
		if(leftDia.height==rightDia.height)
			return new diameterReturn(leftDia.height+1,leftDia.height+rightDia.height+1);
		else{
			int height = Math.max(leftDia.height,rightDia.height)+1;
			int diameter = leftDia.height+rightDia.height+1;
			return new diameterReturn(height,diameter);
		}
	}
    public static BalancedReturn checkBalancedBetter(binaryTreeNode<Integer> root){
        if(root==null){
            return new BalancedReturn(0, true);
        }
        BalancedReturn leftReturn = checkBalancedBetter(root.left);
        BalancedReturn rightReturn = checkBalancedBetter(root.right);
        boolean isBalanced = true;
        int height = 1+Math.max(leftReturn.height, rightReturn.height);
        if(Math.abs(leftReturn.height-rightReturn.height)>1)
            isBalanced=false;
        if(!leftReturn.isBalanced ||  rightReturn.isBalanced)
            isBalanced=false;
        return new BalancedReturn(height, isBalanced);
    }
    public static boolean checkBalanced(binaryTreeNode<Integer> root) {
        if (root == null)
            return true;
        int leftHeight = height(root.left);
        int rightHeight = height(root.right);
        boolean check = (Math.abs(leftHeight - rightHeight)) <= 1;
        if (!check)
            return false;
        return checkBalanced(root.left) && checkBalanced(root.right);
    }

    public static int height(binaryTreeNode<Integer> root) {
        // Your code goes here
        if (root == null)
            return 0;
        return 1 + Math.max(height(root.left), height(root.right));
    }

    public static binaryTreeNode<Integer> takeTreeInput(binaryTreeNode<Integer> root) {
        int data = scan.nextInt();
        if (data == -1)
            return null;
        root = new binaryTreeNode<Integer>(data);
        System.out.println("Enter " + root.data + "'s Left");
        root.left = takeTreeInput(root.left);
        System.out.println("Enter " + root.data + "'s Right");
        root.right = takeTreeInput(root.right);
        return root;
    }
    public static binaryTreeNode<Integer> takeTreeInputLevel(binaryTreeNode<Integer> root){
        root.data = scan.nextInt();
        if(root.data==-1)
            return null;
        Queue<binaryTreeNode<Integer>> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            binaryTreeNode<Integer> rootTemp = queue.remove();
            System.out.println("Enter "+rootTemp.data+"'s Left");
            int leftdata = scan.nextInt();
            if(leftdata!=-1){
                rootTemp.left = new binaryTreeNode<Integer>(leftdata);
                queue.add(rootTemp.left);
            }
            System.out.println("Enter "+rootTemp.data+"'s Right");
            int rightData = scan.nextInt();
            if(rightData!=-1){
                rootTemp.right = new binaryTreeNode<Integer>(rightData);
                queue.add(rootTemp.right);
            }
        }
        return root;
    }
    public static void printTree(binaryTreeNode<Integer> root) {
        if (root == null)
            return;
        System.out.print(root.data + ":");
        if (root.left != null)
            System.out.print("L" + root.left.data + " ");
        if (root.right != null)
            System.out.print("R" + root.right.data);
        System.out.println();
        printTree(root.left);
        printTree(root.right);
    }
    public static void printTreeLevel(binaryTreeNode<Integer> root){
        Queue<binaryTreeNode<Integer>> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            binaryTreeNode<Integer> rootTemp = queue.remove();
            System.out.print(rootTemp.data+":");
            if(rootTemp.left!=null){
                System.out.print("L"+rootTemp.left.data);
                queue.add(rootTemp.left);
            }else
                System.out.print("L-1");
            if(rootTemp.right!=null){
                System.out.print("L"+rootTemp.right.data);
                queue.add(rootTemp.right);
            }else
                System.out.print("R-1");
            System.out.println();
        }
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
        // printTree(root);
        System.out.println("Enter root data");
        root = takeTreeInputLevel(root);
        printTreeLevel(root);
        System.out.println(checkBalanced(root));
    }
}
