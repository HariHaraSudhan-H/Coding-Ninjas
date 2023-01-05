import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class treeUse {
    static Scanner scan  = new Scanner(System.in);
    public static TreeNode<Integer> takeInput(TreeNode<Integer> root){
        System.out.println("Enter root");
        int data=scan.nextInt();
        if(data== -1){
            return null;
        }
        root.data=data;
        Queue<TreeNode<Integer>> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            TreeNode<Integer> rootTemp = queue.poll();
            System.out.println("Enter child of "+rootTemp.data);
            int n = scan.nextInt();
            while(n!=-1){
                TreeNode<Integer> child = new TreeNode<Integer>(n);
                rootTemp.children.add(child);
                queue.add(child);
                System.out.println("Enter child of "+rootTemp.data);
                n=scan.nextInt();
            }
        }
        return root;
    }
    public static void printTreeLevel(TreeNode<Integer> root){
        if(root==null)
            return;
        Queue<TreeNode<Integer>> queue = new LinkedList<>();
        queue.add(root);
        while(!queue.isEmpty()){
            TreeNode<Integer> rootTemp = queue.poll();
            System.out.print(rootTemp.data+":");
            for(TreeNode<Integer> i: rootTemp.children){
                queue.add(i);
                System.out.print(i.data+" ");
            }
            System.out.println();
        }
    }
    public static void printTree(TreeNode<Integer> root) {
        if(root==null)
            return;
        System.out.print(root.data+":");
        root.printChildren();
        System.out.println();
        for(TreeNode<Integer> i : root.children){
            printTree(i);
        }
    }
    public static void main(String[] args) {
        TreeNode<Integer> root = new TreeNode<Integer>(4);
        
        // TreeNode<Integer> node1 = new TreeNode<Integer>(2);
        // TreeNode<Integer> node2 = new TreeNode<Integer>(3);
        // TreeNode<Integer> node3 = new TreeNode<Integer>(1);
        // TreeNode<Integer> node4 = new TreeNode<Integer>(5);
        // TreeNode<Integer> node5 = new TreeNode<Integer>(6);
        // root.children.add(node1);
        // root.children.add(node2);
        // root.children.add(node3);
        // node2.children.add(node4);
        // node2.children.add(node5);
        root = takeInput(root);
        printTreeLevel(root);
        System.out.println(numberOfNodes.numberOfNodesInTree(root));
    }
}
