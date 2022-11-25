import java.util.Scanner;

public class solution {
    static Scanner scan = new Scanner(System.in);
    public static void towerOfHanoi(int disks,char source,char auxilary,char destination){
        if(disks<=0)
            return;
        if(disks==1){
            System.out.println(source+"-->"+destination);
            return;
        }
        towerOfHanoi(disks-1, source, destination, auxilary);
        System.out.println(source+"-->"+destination);
        towerOfHanoi(disks-1, auxilary,source, destination);
    }
    public static void main(String[] args) {
        int n = scan.nextInt();
        towerOfHanoi(n, 'a', 'b', 'c');
    }
}
