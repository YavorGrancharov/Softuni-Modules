public class RectangleOf10x10Stars {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) {
            System.out.println(repeatStr("*", 10));
        }
    }
    static String repeatStr(String str, int count) {
       StringBuilder repeated = new StringBuilder();
       for (int i = 0; i < count; i++) {
           repeated.append(str);
       }
       return repeated.toString();
    }
}
