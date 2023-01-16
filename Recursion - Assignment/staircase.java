public class staircase{
    public static int staircaseCount(int n){
		
	/* Your class should be named Solution.
	 * Don't write main() function.
	 * Don't read input, it is passed as function argument.
	 * Return output and don't print it.
	 * Taking input and printing output is handled automatically.
	 */
	if(n<0)
		return 0;
	if (n == 0)
		return 1;
	return staircaseCount(n-1)+staircaseCount(n-2)+staircaseCount(n-3);
}
}