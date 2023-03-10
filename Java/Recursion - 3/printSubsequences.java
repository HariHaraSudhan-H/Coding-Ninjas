public class printSubsequences {
    public static void printSubsequence(String str, String first) {
        if (str.length() == 0) {
            System.out.println(first);
            return;
        }
        printSubsequence(str.substring(1), first);
        printSubsequence(str.substring(1), first + str.substring(0, 1));
    }

    public static void main(String[] args) {
        printSubsequence("abc", "");
    }
}
