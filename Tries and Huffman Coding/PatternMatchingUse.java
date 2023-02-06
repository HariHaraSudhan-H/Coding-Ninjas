import java.util.ArrayList;

public class PatternMatchingUse {
    public boolean patternMatching(ArrayList<String> vect, String pattern) {
        // Write your code here
		trieClass patternCheck = new trieClass();
		for(String i:vect){
			for(int j=0;j<i.length();j++){
				patternCheck.add(i.substring(j));
			}
			if(patternCheck.search(pattern))
				return true;
		}
		return false;
	}
}
