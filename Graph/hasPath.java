import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class hasPath {
    static Scanner scan = new Scanner(System.in);

	public static boolean hasPathCheck(int[][] AdjacencyMatrix, int currentIndex,int end,boolean[] visited) {
        Queue<Integer> pending = new LinkedList<>();
		pending.add(currentIndex);
		visited[currentIndex] = true;
		while (!pending.isEmpty()) {
			currentIndex = pending.poll();
			if(currentIndex==end){
				return true;
			}
			for (int i = 0; i < AdjacencyMatrix.length; i++) {
				if (!visited[i] && AdjacencyMatrix[currentIndex][i] == 1) {
					pending.add(i);
					visited[i] = true;
				}
			}
		}
		return false;
	}
    public static void main(String[] args) {
        int n = scan.nextInt();
		int e = scan.nextInt();
		int[][] matrix = new int[n][n];
		for (int i = 0; i < e; i++) {
			int v1 = scan.nextInt();
			int v2 = scan.nextInt();
			matrix[v1][v2] = 1;
			matrix[v2][v1] = 1;
		}
		int start = scan.nextInt();
		int end = scan.nextInt();
		System.out.println(hasPathCheck(matrix, start,end,new boolean[n]));
    }
}
