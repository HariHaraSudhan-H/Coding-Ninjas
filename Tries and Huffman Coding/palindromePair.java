import java.util.ArrayList;

public class palindromePair {
    public boolean isPalindromePair(ArrayList<String> words) {
		//Your code goes here
		trieClass palindrome = new trieClass();
		for(String i:words){
			palindrome.add(i);
			for(int j=1;j<i.length();j++){
				palindrome.add(i.substring(j));
				palindrome.add(i.substring(0,i.length()-j));
			}
		}
		for(String i:words){
			String j="";
			for(int k=i.length()-1;k>=0;k--){
				j+=i.charAt(k);
			}
			if(palindrome.search(j))
				return true;
		}
		return false;
	}
}
