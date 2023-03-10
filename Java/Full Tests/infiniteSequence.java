import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

public class infiniteSequence {
    static Scanner scan = new Scanner(System.in); 
	public static int distance(int x,ArrayList<Integer> list){
		int count =0;
		for(int i=list.size()-2;i>=0;i--){
			count++;
			if(list.get(i)==x)
				return count;
		}
		return count;
	}
	public static void main(String[] args) {
		HashMap<Integer,Integer> count = new HashMap<>();
		ArrayList<Integer> list = new ArrayList<>();
		list.add(0);
		count.put(0, 1);
		int x = scan.nextInt();
		for(int i=0;i<x;i++){
			if(count.containsKey(list.get(i))){
				int reps = count.get(list.get(i));
				if(reps==1)
					list.add(0);
				else
					list.add(distance(list.get(i),list));
				int current = list.get(list.size()-1);
				if(count.containsKey(current))
					count.put(current,count.get(current)+1);
				else
					count.put(current, 1);
			}else{
				count.put(list.get(i),1);
				list.add(0);
			}
		}
		System.out.println(count.get(list.get(x-1)));

	}
}
