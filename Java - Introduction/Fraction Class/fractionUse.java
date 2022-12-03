public class fractionUse{
    public static void main(String[] args) {
        fraction f1 = new fraction(4,5);
        fraction f2 = new fraction(2, 4);
        f1.add(f2);
        f1.print();
        f1.subtract(f2);
        f1.print();
        f1.multiply(f2);
        f1.print();
        f1.divide(f2);
        f1.print();
    }
}