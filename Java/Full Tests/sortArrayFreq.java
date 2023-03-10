import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Scanner;

class Compare implements Comparator<Map.Entry<Integer, Integer>> {
    public int compare(Map.Entry<Integer, Integer> a,
            Map.Entry<Integer, Integer> b) {
        // b is at top and a is at bottom - have that in
        // mind
        if (a.getValue() == b.getValue()) // when freq same
            return a.getKey().compareTo(
                    b.getKey()); // smaller val stays at top
        return b.getValue().compareTo(
                a.getValue()); // higher freq stays at top
    }
}

public class sortArrayFreq {

    static Scanner scan = new Scanner(System.in);

    public static void main(String[] args) {
        // Write your code here
        int n = scan.nextInt();
        int[] arr = new int[n];
        HashMap<Integer, Integer> count = new HashMap<>();
        for (int i = 0; i < n; i++) {
            arr[i] = scan.nextInt();
            if (count.containsKey(arr[i]))
                count.put(arr[i], count.get(arr[i]) + 1);
            else
                count.put(arr[i], 1);
        }
        PriorityQueue<Map.Entry<Integer, Integer>> max = new PriorityQueue<>(new Compare());
        for (Map.Entry<Integer, Integer> i : count.entrySet()) {
            max.add(i);
        }
        int i = 0;
        while (!max.isEmpty()) {
            int num = max.peek().getKey();
            int freq = max.peek().getValue();
            while (freq != 0) {
                arr[i++] = num;
                freq--;
            }
            max.poll();
        }
        for (int j : arr) {
            System.out.print(j + " ");
        }
    }
}
