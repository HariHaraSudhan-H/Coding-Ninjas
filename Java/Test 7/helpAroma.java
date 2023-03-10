import java.util.Scanner;

public class helpAroma {
    static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {
        String str = scan.next();
		int k = scan.nextInt();
		for(int i=0;i<k;i++){
			int[] arr = new int[4];
			for(int j=0;j<4;j++){
				arr[j]=scan.nextInt();
			}
			String str1=str.substring(arr[0]-1, arr[1]);
			String str2 = str.substring(arr[2]-1, arr[3]);
			int[] count = new int[26];x`
			for(int j=0;j<str1.length();j++){
				count[str1.charAt(j)-'a']++;
			}
			int[] count2 = new int[26];
			for (int j = 0; j < str2.length(); j++) {
				count2[str2.charAt(j) - 'a']++;
			}
			boolean check = true;
			for(int j=0;j<count.length;j++){
				if(count[j]!=count2[j]){
					check=false;
					break;
				}
			}
			System.out.println(check);
		}
    }
}
