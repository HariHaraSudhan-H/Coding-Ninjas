public class Solution {

    public static void sort012(int[] arr){
    	//Your code goes here
        int i=0,nZ=0,nT=arr.length-1;
        while(i<nT+1){
            if(arr[i]==0){
                arr[i]=arr[nZ];
                arr[nZ++]=0;
                if(arr[i]==2)
                    continue;
            }
            else if(arr[i]==2){
                arr[i]=arr[nT];
                arr[nT--]=2;
                if(arr[i]==0||arr[i]==2){
                    continue;
                }
            }
                i++;
        }
    }

}