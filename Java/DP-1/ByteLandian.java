import java.util.HashMap;

public class ByteLandian {
    public static long bytelandian(long n, HashMap<Long, Long> memo) {
        // Write your code here
		if (n < 12)
			return n;
		if(memo.containsKey(n))
			return memo.get(n);
		long ans = bytelandian(n/2, memo)+bytelandian(n/3, memo)+bytelandian(n/4, memo);
		if(ans>n)
			memo.put(n, ans);
		else
			memo.put(n, n);
		return memo.get(n);
	}
    public static void main(String[] args) {
        long ans = bytelandian(Integer.MAX_VALUE, new HashMap<>());
        System.out.println(ans);
    }
}
