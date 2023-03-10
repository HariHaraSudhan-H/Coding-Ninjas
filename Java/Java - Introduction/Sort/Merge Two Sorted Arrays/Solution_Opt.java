import java.util.Scanner;
public class Solution_Opt {
	static Scanner scan = new Scanner(System.in);
    public static int[] merge(int arr1[], int arr2[]) {
    	//Your code goes here
		int m=arr1.length;
        int n=arr2.length;
        int[] arr = new int[n+m];
		int i=0,j=0,k=0;
		while(j<m&&k<n){
		    if(arr1[j]<arr2[k]){
		        arr[i++]=arr1[j++];
		    }
		    else 
		        arr[i++]=arr2[k++];
		}
		while(j<m){
            arr[i++]=arr1[j++];
        }
        while(k<n){
            arr[i++]=arr2[k++];
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