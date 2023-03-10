import java.util.Scanner;
public class Solution {
    static Scanner scan = new Scanner(System.in);
    public static void insertionSort(int[] arr) {
    	//Your code goes here
        int n=arr.length;
        for(int i=1;i<n;i++){
            int num = arr[i];
            int j=i-1;
            while(j>=0&&arr[j]>num){
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=num;
        }
    }
    public static void main(String args[]){
        int n = scan.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i]=scan.nextInt();
        }
        insertionSort(arr);
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
    } 

}
