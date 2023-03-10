import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class breadthFirst {
    static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {
        Queue<Integer> pending = new LinkedList<>();
		int n = scan.nextInt();
		int e = scan.nextInt();
		int[][] matrix = new int[n][n];
		boolean[] visited = new boolean[n];
		for(int i=0;i<e;i++){
			int v1 = scan.nextInt();
			int v2 = scan.nextInt();
			matrix[v1][v2] = 1;
			matrix[v2][v1] = 1;
		}
		if(n>0){
			int currentIndex=0;
			pending.add(currentIndex);
			visited[currentIndex]=true;
			while(!pending.isEmpty()){
				currentIndex=pending.poll();
                System.out.print(currentIndex+" ");
				for(int i=0;i<matrix.length;i++){
					if (!visited[i] && matrix[currentIndex][i] == 1) {
						pending.add(i);
						visited[i]=true;
					}
				}
			}
		}
		for(int i=0;i<visited.length;i++){
			if(!visited[i]){
				System.out.print(i+" ");
			}
		}
    }
}
