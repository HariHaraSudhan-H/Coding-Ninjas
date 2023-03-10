public class printKeypad {
    public static String getKey(int num) {
        switch (num) {
            case 2:
                return "abc";
            case 3:
                return "def";
            case 4:
                return "ghi";
            case 5:
                return "jkl";
            case 6:
                return "mno";
            case 7:
                return "pqrs";
            case 8:
                return "tuv";
            case 9:
                return "wxyz";
            default:
                return "";
        }
    }
    public static void printkeypad(int num,String str){
        if (num == 0) {
            System.out.println(str);
            return ;
        }
        String numKey = getKey(num % 10);
        for(int i = 0; i < numKey.length(); i++){
            printkeypad(num/10,numKey.charAt(i)+str);
        }
    }
    public static void main(String[] args) {
        printkeypad(23,"");
    }
}
