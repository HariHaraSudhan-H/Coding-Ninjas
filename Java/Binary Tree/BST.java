public class BST {
    private binaryTreeNode<Integer> root;
    private int size;

    public int getSize() {
        return size;
    }

    public void insert(int data) {
        if(root==null){
			root = new binaryTreeNode<Integer>(data);
			return;
		}
		insertHelper(root,data);
        size++;
    }

    public boolean isPresent(int data) {
        return isPresentHelper(root, data);
    }

    public void delete(int data) {
        removeHelper(root,data);
		size--;
    }

    public void printTree() {
        printHelper(root);
    }
    private void insertHelper(binaryTreeNode<Integer> root,int data) {
		//Implement the insert() function
		
		if(data<=root.data){
			if(root.left==null){
				root.left=new binaryTreeNode<Integer>(data);
				return;
			}else
				insertHelper(root.left,data);
		}else{
			if(root.right==null){
				root.right=new binaryTreeNode<Integer>(data);
				return;
			}
			else
				insertHelper(root.right,data);
		}
	}
    private static int min(binaryTreeNode<Integer> root){
		if(root==null)
			return Integer.MAX_VALUE;
		return Math.min(root.data,Math.min(min(root.left),min(root.right)));
	}
    private binaryTreeNode<Integer> removeHelper(binaryTreeNode<Integer> root,int data) {
		//Implement the remove() function
		if(root==null)
			return null;
		if(root.data==data){
			if(root.left==null&&root.right==null)
				return null;
			else if(root.left==null)
				return root.right;
			else if(root.right==null)
				return root.left;
			else{
				root.data=min(root.right);
				root.right=removeHelper(root.right,root.data);
				return root;
			}
		}
		if(data<root.data){
			root.left=removeHelper(root.left,data);
		}
		else{
			root.right=removeHelper(root.right,data);
		}
		return root;
	}
    private static void printHelper(binaryTreeNode<Integer> root){
		if(root==null)
			return;
		System.out.print(root.data+":");
		if(root.left!=null)
            System.out.print("L:"+root.left.data+",");
		if(root.right!=null)
            System.out.print("R:"+root.right.data);
		System.out.println();
		printHelper(root.left);
		printHelper(root.right);
    }
    private static boolean isPresentHelper(binaryTreeNode<Integer> root, int data) {
        if (root == null)
            return false;
        if (root.data == data)
            return true;
        if (data < root.data)
            return isPresentHelper(root.left, data);
        else
            return isPresentHelper(root.right, data);
    }
}
