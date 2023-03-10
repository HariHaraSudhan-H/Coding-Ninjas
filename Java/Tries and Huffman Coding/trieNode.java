public class trieNode {
    public char data;
    public trieNode[] children;
    public boolean terminal;
    public int count;
    public trieNode(char data) {
        this.data = data;
        this.terminal = false;
        this.children = new trieNode[26];
        this.count=0;
    }
    
}