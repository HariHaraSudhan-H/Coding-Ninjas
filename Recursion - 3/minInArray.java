public class minInArray{
    public static void findMinimum(int[] arr,int startIndex,int ans){
        if(startIndex>=arr.length){
            System.out.println(ans);
            return;
        }
        if(arr[startIndex]<ans)
            ans=arr[startIndex];
        findMinimum(arr, startIndex+1, ans);
    }
    public static void main(String[] args) {
        int[] arr = {25,2,1,20,5};
        findMinimum(arr, 0, Integer.MAX_VALUE);
    }
}