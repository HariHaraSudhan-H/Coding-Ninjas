import java.util.LinkedList;
import java.util.Queue;

public class jumpingNumbers {
    public static void showJumpingNosHelper(int num,int x){
		Queue<Integer> queue = new LinkedList<>();
		if(num<=x)
			queue.add(num);
		while(!queue.isEmpty()){
			int i = queue.poll();
			int n=i%10;
			int output1=i*10+n+1;
			int output2 = i * 10 + n - 1;
			if(n!=9&&output1<=x){
				System.out.print(output1 + " ");
				queue.add(output1);
			}
			if(n != 0 && output2 <= x){
				System.out.print(output2+" ");
				queue.add(output2);
			}
		}
	}
	public static void showJumpingNos(int x) {
		System.out.print("0 ");
		for (int i = 1; i < 10; i++) {
			if (i <= x) {
				System.out.print(i+" ");
				showJumpingNosHelper(i, x);
			}
			
		}
	}
}
