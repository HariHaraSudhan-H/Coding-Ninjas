import java.util.Scanner;

public class keypad {
    static Scanner scan = new Scanner(System.in);

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

    public static String[] keyPad(int num) {
        if (num == 0) {
            String[] arr = new String[1];
            arr[0] = "";
            return arr;
        }
        String[] arr = keyPad(num / 10);
        String numKey = getKey(num % 10);
        String[] arrNew = new String[arr.length * numKey.length()];
        int k = 0;
        for (int j = 0; j < arr.length; j++) {
            for (int i = 0; i < numKey.length(); i++) {
                arrNew[k++] = arr[j] + numKey.charAt(i);
            }
        }
        return arrNew;
    }

    public static void main(String[] args) {
        int num = scan.nextInt();
        String[] arr = keyPad(num);
        for (String i : arr) {
            System.out.print(i + " ");
        }
    }
}
