public class heapSort {
    public void inplaceHeapSort(int[] arr){
        int n=arr.length;
		for(int i=n/2-1;i>=0;i--){
			int parentIndex = i;
			int leftchildIndex=2*parentIndex+1;
			int rightchildIndex=2*parentIndex+2;
			while(leftchildIndex<n){
				int minIndex=parentIndex;
				if(arr[minIndex]>arr[leftchildIndex]){
					minIndex=leftchildIndex;
				}
				if(rightchildIndex<n&&arr[minIndex]>arr[rightchildIndex]){
					minIndex=rightchildIndex;
				}
				if(minIndex==parentIndex){
					break;
				}else{
					int temp=arr[parentIndex];
					arr[parentIndex]=arr[minIndex];
					arr[minIndex]=temp;
					parentIndex=minIndex;
					leftchildIndex=2*parentIndex+1;
					rightchildIndex=2*parentIndex+2;
				}
			}
		}
		for(int i=n-1;i>=0;i--){
			int temp=arr[i];
			arr[i]=arr[0];
			arr[0]=temp;
			int parentIndex = 0;
			int leftchildIndex=2*parentIndex+1;
			int rightchildIndex=2*parentIndex+2;
			while(leftchildIndex<i){
				int minIndex=parentIndex;
				if(arr[minIndex]>arr[leftchildIndex]){
					minIndex=leftchildIndex;
				}
				if(rightchildIndex<i&&(arr[minIndex]>arr[rightchildIndex])){
					minIndex=rightchildIndex;
				}
				if(minIndex==parentIndex){
					break;
				}else{
					temp=arr[parentIndex];
					arr[parentIndex]=arr[minIndex];
					arr[minIndex]=temp;
					parentIndex=minIndex;
					leftchildIndex=2*parentIndex+1;
					rightchildIndex=2*parentIndex+2;
				}
			}
		}
	}
}
