import java.util.Scanner;

public class depthFirst {
    static Scanner scan = new Scanner(System.in);
    public static void printDepthFirst(int[][] AdjacencyMatrix,int currentIndex,boolean[] visited){
        System.out.print(currentIndex+" ");
        visited[currentIndex]=true;
        for(int i=0;i<AdjacencyMatrix.length;i++){
            if(!visited[i]&&AdjacencyMatrix[currentIndex][i]==1){
                printDepthFirst(AdjacencyMatrix, i, visited);
            }
        }
    }
    public static void printDepthFirst(int[][] AdjacencyMatrix) {
        boolean[] visited = new boolean[AdjacencyMatrix.length];
        printDepthFirst(AdjacencyMatrix, 0, visited);
        for(int i=0;i<visited.length;i++){
            if(!visited[i]){
                printDepthFirst(AdjacencyMatrix, i, visited);
            }
        }
    }
    public static void main(String[] args) {
        int n=scan.nextInt();
        int e=scan.nextInt();
        int[][] matrix = new int[n][n];
        for(int i=0;i<e;i++){
            int v1=scan.nextInt();
            int v2=scan.nextInt();
            matrix[v1][v2]=1;
            matrix[v2][v1]=1;
        }
        printDepthFirst(matrix);
    }
}