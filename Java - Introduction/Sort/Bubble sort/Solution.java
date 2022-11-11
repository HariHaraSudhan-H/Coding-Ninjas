import java.util.Scanner;

public class Solution {
    private static Scanner scan = new Scanner(System.in);
    public static void bubbleSort(int[] arr){
    	//Your code goes here
        int n=arr.length;
        for(int i=0;i<n-1;i++){
            for(int j=0;j<n-1-i;j++){
                if(arr[j]>arr[j+1]){
                    int temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
    }
    public static void main(String args[]){
        int n = scan.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i]=scan.nextInt();
        }
        bubbleSort(arr);
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
    }  

}
