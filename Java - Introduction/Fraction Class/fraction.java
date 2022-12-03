public class fraction {
    private int numerator;
    private int denominator;
    public fraction(int numerator, int denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
        simplify();
    }
    public int getNumerator() {
        return numerator;
    }
    public int getDenominator() {
        return denominator;
    }
    private void simplify(){
        int gcd = gcd(numerator,denominator);
        this.numerator/=gcd;
        this.denominator/=gcd;
    }
    private int gcd(int numerator,int denominator){
        while(numerator!=denominator){
            if(numerator>denominator)
                numerator-=denominator;
            else
                denominator-=numerator;
        }
        return numerator;
    }
    public void increment(){
        this.numerator+=this.denominator;
    }
    public void print(){
        System.out.println(this.numerator+"/"+this.denominator);
    }
    public void add(fraction f1){
        int LCM = (this.denominator*f1.getDenominator())/gcd(this.denominator, f1.getDenominator());
        this.numerator=(this.numerator*(LCM/this.denominator))+(f1.getNumerator()*(LCM/f1.getDenominator()));
        this.denominator=LCM;
    }
    public void subtract(fraction f2){
        this.numerator=(this.numerator*f2.getDenominator())-(f2.getNumerator()*this.denominator);
        this.denominator=this.denominator*f2.getDenominator();
        simplify();
    }
    public void multiply(fraction f2){
        this.numerator=this.numerator*f2.getNumerator();
        this.denominator=this.denominator*f2.getDenominator();
        simplify();
    }
    public void divide(fraction f2){
        this.numerator=this.numerator*f2.getDenominator();
        this.denominator=this.denominator*f2.getNumerator();
        simplify();
    }
}
