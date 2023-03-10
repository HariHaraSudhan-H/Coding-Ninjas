import java.util.Scanner;

public class prims {
    static Scanner scan = new Scanner(System.in);
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
	public static void primMST(int[][] graph,int V,int E){
		int[] parent = new int[V];
		int[] weight = new int[V];
		boolean[] visited = new boolean[V];
		weight[0]=0;
		parent[0]=-1;
		for(int i=1;i<V;i++){
			weight[i]=Integer.MAX_VALUE;
			visited[i]=false;
		}
		for(int i=0;i<V-1;i++){
			int minKey=getMinKey(weight,visited);
			visited[minKey]=true;
			for(int j=0;j<V;j++){
				if(graph[minKey][j]!=0&&!visited[j]&&graph[minKey][j]<weight[j]){
					parent[j]=minKey;
					weight[j]=graph[minKey][j];
				}
			}
		}
		for(int i=1;i<V;i++){
			if(i<parent[i]){
				System.out.println(i+" "+parent[i]+" "+graph[i][parent[i]]);
			}
			else
				System.out.println(parent[i]+" "+i+" "+graph[i][parent[i]]);
		}
	}
	public static void main(String[] args) {
		int V = scan.nextInt();
		int E = scan.nextInt();

		int[][] graph = new int[V][V];
		for(int i=0;i<E;i++){
			int v1=scan.nextInt();
			int v2= scan.nextInt();
			int weight = scan.nextInt();
			graph[v1][v2]=weight;
			graph[v2][v1]=weight;
		}
		primMST(graph,V,E);
	}
}