import java.util.Scanner;

//import java.util.ArrayList;

public class ReturnSubsequences{
    // public static ArrayList<String> returnSubsequences(String str){
    //     if(str.length()==0){
    //         ArrayList<String> arr = new ArrayList<>();
    //         arr.add("");
    //         return arr;
    //     }
    //     ArrayList<String> arr = returnSubsequences(str.substring(1));
    //     int n = arr.size();
    //     for(int i=0;i<n;i++){
    //         arr.add(str.charAt(0)+arr.get(i));
    //     }
    //     return arr;


    // }
    public static String[] returnSubsequencesBetter(String str){
        if(str.length()==0){
            String[] arr = {""};
            return arr;
        }
        String[] arr = returnSubsequencesBetter(str.substring(1));
        String[] arrNew = new String[arr.length*2];
        int n = arr.length;
        for(int i=0;i<n;i++){
            arrNew[i]=arr[i];
        }
        for(int i=0;i<n;i++){
            arrNew[arr.length+i]=str.charAt(0)+arr[i];
        }
        return arrNew;


    }
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String str = scan.nextLine();
        String[] arr = returnSubsequencesBetter(str);
        for(String i : arr){
            System.out.println(i);
        }
        scan.close();
    }
}