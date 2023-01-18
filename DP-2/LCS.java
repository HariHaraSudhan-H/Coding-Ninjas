public class LCS {
    // LCS--->Lowest Common Sequence
    public static int lcsHelper(String s, String t, int i, int j, int[][] output) {
        if (i >= s.length() || j >= t.length()) {
            output[i][j] = 0;
            return output[i][j];
        }
        if (output[i][j] == -1) {
            if (s.charAt(i) == t.charAt(j)) {
                output[i][j] = 1 + lcsHelper(s, t, i + 1, j + 1, output);
                return output[i][j];
            } else {
                output[i][j] = Math.max(lcsHelper(s, t, i + 1, j, output), lcsHelper(s, t, i, j + 1, output));
                return output[i][j];
            }
        } else
            return output[i][j];
    }

    public static int lcs(String s, String t) {
        // Your code goes here
        int[][] output = new int[s.length() + 1][t.length() + 1];
        for (int i = 0; i < output.length; i++) {
            for (int j = 0; j < output[0].length; j++) {
                output[i][j] = -1;
            }
        }
        return lcsHelper(s, t, 0, 0, output);
    }
    //TopBottomApproach
    public static int lcsITB(String s, String t) {
        // Your code goes here
        int[][] output = new int[s.length() + 1][t.length() + 1];
        for (int i = 0; i < output.length; i++) {
            for (int j = 0; j < output[0].length; j++) {
                output[i][j] = 0;
            }
        }
        for (int i = 1; i < output.length; i++) {
            for (int j = 1; j < output[0].length; j++) {
                if (s.charAt(i-1) == t.charAt(j-1)) {
                    output[i][j] = 1 + output[i - 1][j - 1];
                }else{
                    output[i][j] = Math.max(output[i][j-1], output[i-1][j]);
                }
            }
        }
        return output[s.length()][t.length()];
    }
    //BottomUp Approach
    public static int lcsIBU(String s, String t) {
        // Your code goes here
        int[][] output = new int[s.length() + 1][t.length() + 1];
        for (int i = 0; i < output.length; i++) {
            for (int j = 0; j < output[0].length; j++) {
                output[i][j] = 0;
            }
        }
        for (int i = s.length()-1; i >=0; i--) {
            for (int j = t.length()-1; j >=0; j--) {
                if (s.charAt(i) == t.charAt(j)) {
                    output[i][j] = 1 + output[i + 1][j + 1];
                }else{
                    output[i][j] = Math.max(output[i][j+1], output[i+1][j]);
                }
            }
        }
        return output[0][0];
    }
    public static void main(String[] args) {
        String s = "adebc";
        String t = "dcadb";
        System.out.println(lcs(s, t));
        System.out.println(lcsITB(s, t));
        System.out.println(lcsIBU(s, t));
    }
}
