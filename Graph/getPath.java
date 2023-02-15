import java.util.*;

public class getPath {
    static Scanner scan = new Scanner(System.in);
	public static ArrayList<Integer> getPathDFS(int[][] matrix, int source,int destination,boolean[] visited){
		if(source==destination){
			ArrayList<Integer> output = new ArrayList<>();
			output.add(destination);
			return output;
		}
		visited[source]=true;
		ArrayList<Integer>output = new ArrayList<>();
		for(int i=0;i<matrix.length;i++){
			if(!visited[i]&&matrix[source][i]==1){
				output=getPathDFS(matrix, i, destination, visited);
				// System.out.print(source+":"+output.size()+":");
				// for (int j : output) {
				// 	System.out.print(j + " ");
				// }
				// System.out.println();
				if(output.size()!=0){
					output.add(source);
					return output;
				}
			}
		}
		return output;
	}
    public static ArrayList<Integer> getPathBFS(int[][] AdjacencyMatrix, int currentIndex,int end,boolean[] visited) {
        Queue<Integer> pending = new LinkedList<>();
        HashMap<Integer,Integer> parent = new HashMap<>();
        ArrayList<Integer> output = new ArrayList<>();
		pending.add(currentIndex);
        parent.put(currentIndex,-1);
		visited[currentIndex] = true;
		while (!pending.isEmpty()) {
			currentIndex = pending.poll();
			if(currentIndex==end){
				while(currentIndex!=-1){
                    output.add(currentIndex);
                    currentIndex=parent.get(currentIndex);
                }
                return output;
			}
			for (int i = 0; i < AdjacencyMatrix.length; i++) {
				if (!visited[i] && AdjacencyMatrix[currentIndex][i] == 1) {
					pending.add(i);
                    parent.put(i,currentIndex);
					visited[i] = true;
				}
			}
		}
		return output;
	}
	public static void main(String[] args) {
        
        /* Write Your Code Here
		 * Complete the Rest of the Program
		 * You have to take input and print the output yourself
		 */
		int n = scan.nextInt();
		int e = scan.nextInt();
		int[][] matrix = new int[n][n];
		for (int i = 0; i < e; i++) {
			int v1 = scan.nextInt();
			int v2 = scan.nextInt();
			matrix[v1][v2] = 1;
			matrix[v2][v1] = 1;
		}
		int source = scan.nextInt();
		int destination = scan.nextInt();
		boolean[] visited = new boolean[n];
		ArrayList<Integer> output = getPathDFS(matrix, source, destination, visited);
		for(int i:output){
			System.out.print(i+" ");
		}
	}
}

