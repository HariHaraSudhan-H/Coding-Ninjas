public class printSubSet {
    public static void printSubsetsHelper(int input[],int startIndex,int ans[]){
		if(input.length<=startIndex){
			for(int i:ans){
				System.out.print(i+" ");
			}
			System.out.println();
			return;
		}
		printSubsetsHelper(input,startIndex+1,ans);
		int[] newAns = new int[ans.length+1];
		int i=0;
		for(i=0;i<ans.length;i++){
			newAns[i]=ans[i];
		}
		newAns[newAns.length-1]=input[startIndex];
		printSubsetsHelper(input,startIndex+1,newAns);
	}
	public static void printSubsets(int input[]) {
		// Write your code here
		int[] ans = {};
		printSubsetsHelper(input,0,ans);
	}
    public static void main(String[] args) {
        int input[] = {1,2,3};
        printSubsets(input);
    }
}
