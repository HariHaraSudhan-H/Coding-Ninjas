import java.util.ArrayList;

public class TreeNode<T>{
    T data;
    ArrayList<TreeNode<T>> children;
    public TreeNode(T data) {
        this.data = data;
        children = new ArrayList<>();
    }
    public void printChildren(){
        for(TreeNode<T> i : children){
            System.out.print(i.data+" ");
        }
    }
}
