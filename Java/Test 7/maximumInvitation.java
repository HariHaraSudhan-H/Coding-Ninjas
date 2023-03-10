import java.util.Scanner;

public class maximumInvitation {
    static Scanner scan  =new Scanner(System.in);
    public static void main(String[] args) {
        int r = scan.nextInt();
		int c = scan.nextInt();
		scan.nextLine();
		char[][] arr = new char[r][c];
		int[] count = new int[c];
		int max=0;
		for(int i=0;i<r;i++){
			arr[i]=scan.nextLine().toCharArray();
			for(int j=0;j<c;j++){
				if(arr[i][j]=='.')
					count[j]++;
				else
					count[j]=0;
			}
			for(int j=0;j<c;j++){
				int h=count[j];
				int w=1;
				if(h>0){
					for(int k=j+1;k<c;k++){
						if(count[k]<h)
							break;
						w++;
					}
					for (int k = j -1; k >=0; k--) {
						if (count[k] < h)
							break;
						w++;
					}
				}
				max=Math.max(max,perimeter(h,w));
			}
		}
		System.out.print(max-1);
		// for(int i=0;i<r;i++){
		// 	String temp = scan.next();
		// 	for (int j = 0; j < c; j++) {
		// 		arr[i][j] = temp.charAt(j);
		// 	}
		// }
		// int[][] output = new int[r+1][c+1];
		// int max=0;
		// for(int i=r-1;i>=0;i--){
		// 	for(int j=1;j<c+1;j++){
		// 		if(arr[i][j-1]=='.'){
		// 			//output[i][j]=Math.max(output[i+1][j-1],Math.max(output[i+1][j], output[i][j-1]));
		// 			output[i][j]=output[i+1][j];
		// 			if(output[i][j]>0)
		// 				output[i][j]+=2;
		// 			else
		// 				output[i][j]+=4;
		// 			if(output[i][j]>max)
		// 				max=output[i][j];
		// 		}
		// 	}
		// }
		// System.out.println(max-1);
    }

    private static int perimeter(int h, int w) {
        return h*2+w*2;
    }
}