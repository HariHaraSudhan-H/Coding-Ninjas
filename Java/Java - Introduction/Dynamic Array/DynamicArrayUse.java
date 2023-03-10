public class DynamicArrayUse {
    public static void main(String[] args) {
        DynamicArray d = new DynamicArray();
        for (int i = 0; i < 10; i++) {
            d.add(i + 1);
        }
        System.out.println(d.size());
        System.out.println(d.get(0));
        d.add(13);
        System.out.println(d.size());
        System.out.println(d.get(10));
        d.set(15, 20);
        System.out.println(d.get(15));
        System.out.println(d.size());
    }
}
