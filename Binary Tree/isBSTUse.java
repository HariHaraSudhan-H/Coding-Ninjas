import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class isBSTUse {
    static Scanner scan =new Scanner(System.in);
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
    public static boolean isBSTBetter(binaryTreeNode<Integer> root,int min,int max){
        if(root==null)
            return true;
        if(root.data>=max || root.data<=min)
            return false;
        return isBSTBetter(root.left,min,root.data-1)&&isBSTBetter(root.right, root.data, max);
    }
    public static isBSTreturn isBST(binaryTreeNode<Integer> root){
        if(root == null)
            return new isBSTreturn(true,Integer.MIN_VALUE,Integer.MAX_VALUE);
        // if(root.left==null && root.right==null)
        //     return new isBSTreturn(true,root.data,root.data);
        isBSTreturn leftCheck = isBST(root.left);
        isBSTreturn rightCheck = isBST(root.right);
        if(leftCheck.isBST==false||rightCheck.isBST==false)
            return new isBSTreturn(false,Integer.MIN_VALUE,Integer.MAX_VALUE);
        else{
            if((leftCheck.max<root.data||root.data==Integer.MIN_VALUE)&&rightCheck.min>root.data||root.data==Integer.MAX_VALUE)
                return new isBSTreturn(true,Math.max(root.data, Math.max(leftCheck.max, rightCheck.max)),Math.min(root.data, Math.min(leftCheck.min, rightCheck.min)));
            else
                return new isBSTreturn(false,Integer.MIN_VALUE,Integer.MAX_VALUE);
        }
    }
    public static void main(String[] args) {
        binaryTreeNode<Integer> root = new binaryTreeNode<>(Integer.MAX_VALUE);
        // binaryTreeNode<Integer> leftroot = new binaryTreeNode<>(1);
        // binaryTreeNode<Integer> rightroot = new binaryTreeNode<>(3);
        // root.left = leftroot;
        // root.right = rightroot;

        //binaryTreeNode<Integer> rightNode = new binaryTreeNode<>(4);

        //binaryTreeNode<Integer> leftNode = new binaryTreeNode<>(5);
        //leftroot.right = rightNode;
        //rightroot.left = leftNode;
        // printTree(root);
        //System.out.println("Enter root data");
        //binaryTreeNode<Integer> root=new binaryTreeNode<Integer>(-1);
        //root = takeTreeInputLevel(root);
        printTreeLevel(root);
        System.out.println(isBSTBetter(root,Integer.MAX_VALUE,Integer.MIN_VALUE));
    }
}
