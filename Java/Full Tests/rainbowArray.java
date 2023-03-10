public class rainbowArray {
    public static void israinbow(int [] arr){
        // Write your code here
        int i=0,j=arr.length-1;
        boolean check = true;
        while(i<=j){
            if(arr[i]==arr[j]){
                i++;
                j--;
            }else{
                check=false;
                break;
            }
        }
        if(arr[i]>7||arr[i-1]!=7)
            check=false;
        if(check)
            System.out.println("yes");
        else
            System.out.println("no");
    }
}
