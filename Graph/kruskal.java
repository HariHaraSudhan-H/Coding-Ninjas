import java.util.*;

class Edge {
	int v1;
	int v2;
	int weight;

	public Edge(int v1, int v2, int weight) {
		this.v1 = v1;
		this.v2 = v2;
		this.weight = weight;
	}
}
class edgeSort implements Comparator<Edge> {
	public int compare(Edge a, Edge b) {
		return a.weight - b.weight;
	}
}
public class kruskal {
	

	static Scanner scan = new Scanner(System.in);

	// static Edge edges = new Edge();
	public static int getParent(int v1, int[] parent) {
		int parentIndex = v1;
		while (parentIndex != parent[parentIndex]) {
			parentIndex = parent[parentIndex];
		}
		return parentIndex;
	}

	public static void main(String[] args) {
		int V = scan.nextInt();
		int E = scan.nextInt();

		/* Write Your Code Here
		* Complete the Rest of the Program
		* You have to take input and print the output yourself
		*/
		Edge[] edges = new Edge[E];
		for(int i=0;i<E;i++){
		int v1=scan.nextInt();
		int v2=scan.nextInt();
		int weight=scan.nextInt();
		edges[i]=new Edge(v1,v2,weight);
		}
		Arrays.sort(edges,new edgeSort());
		ArrayList<Edge> result = new ArrayList<>();
		int[] parent = new int[V];
		for(int i=0;i<V;i++){
		parent[i]=i;
		}
		int count=0;
		int i=0;
		while(count!=V-1){
		int v1=edges[i].v1;
		int v2=edges[i].v2;
		int p1=getParent(v1,parent);
		int p2=getParent(v2,parent);
		if(p1!=p2){
		result.add(edges[i]);
		count++;
		parent[p1]=p2;
		}
		i++;
		}
		for(Edge edge :result){
		System.out.println(edge.v1+" "+edge.v2+" "+edge.weight);
		}
		}
}