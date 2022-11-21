import java.util.*;
public class solution {
    static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {
		int n=scan.nextInt(),end=-1,start=(n/2);
		for(int i=0;i<n;i++){
		    for(int j=0;j<n;j++){
		        if(i==0||j==0||i==n-1||j==n-1)
		            System.out.print("*");
		        else if(i+j>start&&i+j<=(n/2+end))
		            System.out.print(" ");
		        else
		            System.out.print("*");
		    }
		    if(i<(n/2))
		        end+=2;
		    else
		        start+=2;
		    System.out.println();
		}
	}
}
