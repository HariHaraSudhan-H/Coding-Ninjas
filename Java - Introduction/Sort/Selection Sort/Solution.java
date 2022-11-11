import java.util.Scanner;
public class Solution {
    static Scanner scan = new Scanner(System.in);
    public static void selectionSort(int[] arr) {
    	//Your code goes here
        for(int i=0;i<arr.length-1;i++){
            int min = arr[i];
            int index=0;
            for(int j=i;j<arr.length;j++){
                if(arr[j]<min){
                    min=arr[j];
                    index=j;
                }
            }
            if(index!=0)
                arr[index]=arr[i];
            arr[i]=min;
        }
    } 
    public static void main(String args[]){
        int n = scan.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i]=scan.nextInt();
        }
        selectionSort(arr);
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
    } 

}