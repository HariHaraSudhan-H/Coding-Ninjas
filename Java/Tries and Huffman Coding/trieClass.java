public class trieClass {
    public trieNode root;
    
    public trieClass() {
        root = new trieNode('\0');
    }
    public void add(String s){
        trieNode prev = root;
        
        for(int i=0;i<s.length();i++){
            if(prev.children[s.charAt(i)-'A']==null){
                prev.children[s.charAt(i)-'A']=new trieNode(s.charAt(i));
                prev.count++;
            }
            prev=prev.children[s.charAt(i)-'A'];
        }
        prev.terminal=true;
    }
    public void remove(trieNode child,String s){
        if(s.length()==0){
            child.terminal=false;
            return;
        }
        trieNode child1 = child.children[s.charAt(0)-'A'];
        if(child1==null)
            return;
        remove(child1,s.substring(1));
        if(!child1.terminal&&child.count==0){
            child.children[s.charAt(0)-'A']=null;
            child.count--;
        }
    }
    public void remove(String s) {
        trieNode child = root.children[s.charAt(0)-'A'];
        remove(child,s.substring(1));
    }
    public boolean search(String s){
        trieNode prev = root;
        
        for(int i=0;i<s.length();i++){
            if(prev.children[s.charAt(i)-'A']==null){
                return false;
            }
            prev=prev.children[s.charAt(i)-'A'];
        }
        if(prev.terminal)
            return true;
        else
            return false;
    }
}
