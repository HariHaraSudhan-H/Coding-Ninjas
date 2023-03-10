public class printPermutationString {
    public static void permutationsHelper(String input,String ans){
		if(input.length()==0){
			System.out.println(ans);
			return;
		}
			for(int j=0;j<input.length();j++){
				String ans1=input.substring(0,j)+input.substring(j+1);
				permutationsHelper(ans1, ans+input.charAt(j));
			}
	}
	public static void permutations(String input){
		// Write your code here
		permutationsHelper(input,"");
	}
    public static void main(String[] args) {
        permutations("abc");
    }
}
