import java.util.Scanner;

public class superPrime {
    static Scanner scan = new Scanner(System.in);
	public static void checkPrime(boolean[] isPrime,int n){
		isPrime[0] = isPrime[1] = false;
		for (int i = 2; i <= n; i++)
			isPrime[i] = true;

		for (int p = 2; p * p <= n; p++) {
			// If isPrime[p] is not changed, then it is a prime
			if (isPrime[p]) {
				// Update all multiples of p
				for (int i = p * 2; i <= n; i += p)
					isPrime[i] = false;
			}
		}
	}
	public static void main (String[] args) {
	    // Write your code here
        // Take input and print desired output
		int n=scan.nextInt();
		boolean[] isPrime = new boolean[n+1];
		checkPrime(isPrime,n);
		int[] primes = new int[n+1];
		int j=0;
		for(int i=2;i<=n;i++){
			if(isPrime[i])
				primes[j++]=i;
		}
		for(int i=0;i<j;i++){
			if(isPrime[i+1])
				System.out.print(primes[i]+" ");
		}
	}
}
