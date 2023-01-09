public class returnPermutationString {
    public static String[] permutationOfString(String input){
		// Write your code here
		if(input.length()==1){
			String[] arr = new String[1];
			arr[0]=input;
			return arr;
		}
		String[] arr = permutationOfString(input.substring(1));
		String[] arrNew = new String[arr.length*input.length()];
		int k=0;
		for(int i=0;i<arr.length;i++){
			for(int j=0;j<=arr[i].length();j++){
				arrNew[k++]=arr[i].substring(0,j)+input.charAt(0)+arr[i].substring(j);
			}
		}
		return arrNew;
	}
    public static void main(String[] args) {
        String str = "abc";
        String[] output = permutationOfString(str);
        for(String i:output){
            System.out.println(i);
        }
    }
}
