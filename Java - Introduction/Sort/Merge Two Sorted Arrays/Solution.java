import java.util.Scanner;
public class Solution {  
	static Scanner scan = new Scanner(System.in);
    public static void singleMerge(int[] arr,int[] arr1){
        for(int i=0;i<arr.length;i++){
            arr[i]=arr1[i];
        }
    }

    public static int[] merge(int arr1[], int arr2[]) {
    	//Your code goes here
        int n=arr1.length+arr2.length;
        int[] arr = new int[n];
        if(arr1.length<1){
            singleMerge(arr,arr2);
            return arr;
        }
        if(arr2.length<1){
            singleMerge(arr,arr1);
            return arr;
        }
		int j=0,k=0;
		for(int i=0;i<n;i++){
		    if(arr1[j]<arr2[k]){
		        arr[i]=arr1[j++];
		    }
		    else 
		        arr[i]=arr2[k++];
		    if(j>=arr1.length){
		        for(int l=k;l<arr2.length;l++){
		            arr[++i]=arr2[l];
		        }
		    }
		    if(k>=arr2.length){
		        for(int l=j;l<arr1.length;l++){
		            arr[++i]=arr1[l];
		        }
		    }
		}
        return arr;
    }
	public static void main(String args[]){
        int n = scan.nextInt();
        int[] arr1 = new int[n];
        for(int i=0;i<n;i++){
            arr1[i]=scan.nextInt();
        }
		int m = scan.nextInt();
        int[] arr2 = new int[m];
        for(int i=0;i<m;i++){
            arr2[i]=scan.nextInt();
        }
        int[] arr = merge(arr1,arr2);
        for(int i=0;i<n+m;i++){
            System.out.print(arr[i]+" ");
        }
    } 
}