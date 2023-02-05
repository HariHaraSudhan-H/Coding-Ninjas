public class trieUse {
    public static void main(String[] args) {
        trieClass dictionary = new trieClass();
        String input = "Hari";
        dictionary.add(input.toUpperCase());
        input = "Har";
        dictionary.add(input.toUpperCase());
        System.out.println(dictionary.search("HARI"));
        dictionary.remove("HARI");
        System.out.println(dictionary.search("HAR"));
    }
}