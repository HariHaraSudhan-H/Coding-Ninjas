import java.util.Scanner;
public class solution {
    static Scanner scan = new Scanner(System.in);
    public static int[] copyArray(int[] input,int startIndex,int endIndex){
		int input1[] = new int[endIndex-startIndex+1];
		int j=0;
		for(int i=startIndex;i<=endIndex;i++){
			input1[j++]=input[i];
		}
		return input1;
	}
	public static void merge(int[] input, int[]firstInput, int[] secondInput){
		int i=0,j=0,k=0;
		while(i<firstInput.length&&j<secondInput.length){
			if(firstInput[i]<secondInput[j]){
				input[k++]=firstInput[i++];
			}
			else
				input[k++]=secondInput[j++];
		}
		while(i<firstInput.length){
			input[k++]=firstInput[i++];
		}
		while(j<secondInput.length){
			input[k++]=secondInput[j++];
		}
	}
	public static void mergeSort(int[] input){
		// Write your code here
		if(input.length==1)
			return ;
		int mid=input.length/2;
		int[] firstInput = copyArray(input,0,mid-1);
		int[] secondInput = copyArray(input,mid,input.length-1);
		mergeSort(firstInput);
		mergeSort(secondInput);
		merge(input,firstInput,secondInput);
	}
    public static void main(String[] args) {
		int n = scan.nextInt();
        int []input = new int[n];
		for(int i=0;i<input.length;i++){
            input[i]=scan.nextInt();
        }
        mergeSort(input);
        for(int i=0;i<input.length;i++){
            System.out.print(input[i]+" ");
        }
    }
}
