import java.util.Scanner;

public class strangeIsland {
    static Scanner scan = new Scanner(System.in);
	public static int count(char[][] arr,int r,int c){
		int count =0;
		if(r+1==arr.length)
			count++;
		else if(arr[r+1][c]=='.')
			count++;
		if(r-1==-1)
			count++;
		else if (arr[r - 1][c] == '.')
			count++;
		if(c-1==-1)
			count++;
		else if (arr[r][c-1] == '.')
			count++;
		if(c+1==arr[0].length)
			count++;
		else if (arr[r][c+1] == '.')
			count++;
		return count;
	}
	public static void main(String[] args) {
		/* Your class should be named Main.
 			* Read input as specified in the question.
 			* Print output as specified in the question.
		*/

		// Write your code here
		int r = scan.nextInt();
		int c = scan.nextInt();
		char[][] arr = new char[r][c];
		char[][] output = new char[r][c];
		for (int i = 0; i < r; i++) {
			String temp = scan.next();
			for (int j = 0; j < c; j++) {
				arr[i][j] = temp.charAt(j);
			}
		}
		for(int i=0;i<r;i++){
			for(int j=0;j<c;j++){
				output[i][j]=arr[i][j];
			}
		}
		int right=0,left=c,top=0,bottom=r;
		for(int i=0;i<r;i++){
			for (int j = 0; j < c; j++) {
				if(arr[i][j]=='X'){
					if(count(arr, i, j)>=3){
						output[i][j]='.';
					}
					if(output[i][j]=='X'){
						if(left==0&&top==0){
							left=j;
							top=i;
						}
						right=j;
						bottom=i;
					}
				}
			}
		}
		for (int i =top ; i <= bottom; i++) {
			for (int j =left; j <=right; j++) {
				System.out.print(output[i][j]);
			}
			System.out.println();
		}
	}
}
