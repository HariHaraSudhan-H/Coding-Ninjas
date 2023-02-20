import java.util.Scanner;

public class binomialExpression {
    static Scanner scan = new Scanner(System.in);
	public static int factorial(int num){
		int result =1;
		for(int i=2;i<=num;i++){
			result*=i;
		}
		return result;
	}
	public static void main(String[] args) 
	{ 
	    int A=scan.nextInt();
		int X=scan.nextInt();
		int n=scan.nextInt();
		int nFact=factorial(n);
		for(int i=0;i<=n;i++){
			int result=nFact/(factorial(n-i)*factorial(i));
			int Apower = (int)(Math.pow(A, n-i));
			int Xpower = (int)(Math.pow(X,i));
			System.out.print(result*Apower*Xpower+" ");
		}
	} 
}
