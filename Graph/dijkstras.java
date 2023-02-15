import java.util.Scanner;

public class dijkstras {
    public static int getMinKey(int[] weight,boolean[] visited){
		int min=Integer.MAX_VALUE,minIndex=-1;
		for(int i=0;i<weight.length;i++){
			if(visited[i]==false&&weight[i]<min){
				min=weight[i];
				minIndex=i;
			}
		}
		return minIndex;
	}
	public static void dijkstrasMST(int[][] graph,int V){
		int[] distance = new int[V];
		boolean[] visited = new boolean[V];
		distance[0]=0;
		for(int i=1;i<V;i++){
			distance[i]=Integer.MAX_VALUE;
		}
		for(int i=0;i<V;i++){
			int minKey = getMinKey(distance, visited);
			visited[minKey] = true;
			for(int j=0;j<V;j++){
				if(!visited[j]&&graph[minKey][j]!=0){
					if(distance[minKey]+graph[minKey][j]<distance[j]){
						distance[j]=distance[minKey]+graph[minKey][j];
					}
				}
			}
		}
		for(int i=0;i<V;i++){
			System.out.println(i+" "+distance[i]);
		}
 	}
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int V = s.nextInt();
		int E = s.nextInt();

		/* Write Your Code Here
		 * Complete the Rest of the Program
		 * You have to take input and print the output yourself
		 */
		int[][] graph = new int[V][V];
		for (int i = 0; i < E; i++) {
			int v1 = s.nextInt();
			int v2 = s.nextInt();
			int weight = s.nextInt();
			graph[v1][v2] = weight;
			graph[v2][v1] = weight;
		}
		dijkstrasMST(graph,V);
	}
}
