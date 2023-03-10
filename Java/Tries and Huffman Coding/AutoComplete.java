import java.util.ArrayList;

public class AutoComplete {
    public void printComplete(trieNode root, String word,String output){
		if(root.terminal&&word.length()==0){
			System.out.println(output);
		}
		if(word.length()==0){
			for(int i=0;i<root.children.length;i++){
				if(root.children[i]!=null){
					printComplete(root.children[i],word,output+(char)(i+'a'));
				}
			}
			return;
		}
		if(root.children[word.charAt(0)-'a']==null){
			return;
		}
		output+=word.charAt(0);
		printComplete(root.children[word.charAt(0) - 'a'], word.substring(1), output);

	}
	public void autoComplete(ArrayList<String> input, String word) {

        // Write your code here
		trieClass autocomplete = new trieClass();
		for(String i:input){
			autocomplete.add(i);
		}
		printComplete(autocomplete.root, word,"");
		
    }
}
