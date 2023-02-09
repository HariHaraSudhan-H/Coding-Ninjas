import java.util.Scanner;

public class AdjacencyMatrix {
    static Scanner scan = new Scanner(System.in);
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
        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<n;j++){
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println();
        }
    }
}