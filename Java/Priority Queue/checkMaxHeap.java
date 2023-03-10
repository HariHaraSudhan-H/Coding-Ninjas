public class checkMaxHeap {
    public static boolean checkMaxHeap(int arr[]) {
		/*
		 * Your class should be named Solution Don't write main(). Don't read input, it
		 * is passed as function argument. Return output and don't print it. Taking
		 * input and printing output is handled automatically.
		 */
		int n=arr.length;
		for(int i=0;i<n/2;i++){
			int leftIndex=2*i+1;
			int rightIndex=2*i+2;
			if(arr[i]<arr[leftIndex])
				return false;
			if(rightIndex<n&&arr[i]<arr[rightIndex])
				return false;
		}
		return true;
	}
}
