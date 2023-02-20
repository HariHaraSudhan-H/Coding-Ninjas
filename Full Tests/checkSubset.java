import java.util.HashMap;

public class checkSubset {
    public static boolean CheckSubset(int[] arr1, int n1, int[] arr2, int n2) {
		/*Your class should be named solution. 
		*Don't write main().
		*Don't take input, it is passed as function argument.
		*Don't print output.
		*Taking input and printing output is handled automatically.
		*/ 
		HashMap<Integer,Integer> countTable = new HashMap<>();
		for(int i=0;i<n1;i++){
			if(countTable.containsKey(arr1[i])){
				countTable.put(arr1[i],countTable.get(arr1[i])+1);
			}
			else{
				countTable.put(arr1[i], 1);
			}
		}
		for(int i=0;i<n2;i++){
			if(!countTable.containsKey(arr2[i])){
				return false;
			}
			countTable.put(arr2[i], countTable.get(arr2[i])-1);
			if(countTable.get(arr2[i])==0)
				countTable.remove(arr2[i]);
		}
        return true;
	}
}
