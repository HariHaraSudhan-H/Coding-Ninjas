import java.util.*;

public class gameOfDeath {
    public static int findSafePosition(ArrayList<Integer> arr,int index,int k,int size){
		if(size==1)
			return arr.get(0);
		index = (index+k-1)%size;
		arr.remove(index);
		return findSafePosition(arr, index, k, arr.size());
	}
	public static void main(String[] args) 
	{ 
	    Scanner s=new Scanner(System.in);
		
		    int n=s.nextInt();
		    int k=s.nextInt();
		    // Write your code here 
		    // Print the surviving position
			ArrayList<Integer> arr = new ArrayList<>();
			for(int i=1;i<=n;i++){
				arr.add(i);
			}
			System.out.println(findSafePosition(arr, 0, k, arr.size()));
	}
}
