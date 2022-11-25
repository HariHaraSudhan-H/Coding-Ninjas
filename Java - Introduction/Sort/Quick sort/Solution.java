import java.util.Scanner;
public class Solution {
	static Scanner scan = new Scanner(System.in);
	public static int partion(int[] arr,int startIndex,int endIndex){
		int count=0;
		for(int i=startIndex;i<=endIndex;i++){
			if(arr[i]<arr[startIndex]){
				count++;
			}
		}
		return count;
	}
	public static void quickSort(int[] input, int startIndex, int endIndex) {
			// your code goes here
			if(startIndex>=endIndex)
				return;
			int i = partion(input,startIndex,endIndex);
			int temp=input[startIndex];
			input[startIndex]=input[startIndex+i];
			input[startIndex+i]=temp;
			int k=startIndex,j=endIndex;
			while(k<j){
				if((input[k]>=input[startIndex+i])&&(input[j]<input[startIndex+i])){
					temp=input[k];
					input[k]=input[j];
					input[j]=temp;
					k++;
					j--;
				}else if(input[j]<input[startIndex+i])
					k++;
				else if(input[k]>=input[startIndex+i])
					j--;
				else{
					j--;
					k++;
				}
			}
			quickSort(input,startIndex,startIndex+i-1);
			quickSort(input,startIndex+i+1,endIndex);
			return;
		}
	public static void quickSort(int[] input) {
		/* Your class should be named Solution
		 * Don't write main().
		 * Don't read input, it is passed as function argument.
		 * No need to print or return the output.
		 * Taking input and printing output is handled automatically.
		 */
		quickSort(input, 0, input.length - 1);
	}
	public static void main(String[] args) {
		int n = scan.nextInt();
        int []input = new int[n];
		for(int i=0;i<input.length;i++){
            input[i]=scan.nextInt();
        }
        quickSort(input);
        for(int i=0;i<input.length;i++){
            System.out.print(input[i]+" ");
        }
    }
}