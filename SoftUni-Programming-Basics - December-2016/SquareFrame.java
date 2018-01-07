import java.util.Scanner;

public class SquareFrame {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        System.out.println("+" + repeatStr(" -", n - 2) + " +");
        for (int i = 0; i < n - 2; i++) {
            System.out.println("|" + repeatStr(" -", n - 2) + " |");
        }
        System.out.println("+" + repeatStr(" -", n - 2) + " +");
    }
    static String repeatStr(String str, int count) {
        StringBuilder repeated = new StringBuilder();
        for (int i = 0; i < count; i++) {
            repeated.append(str);
        }
        return repeated.toString();
    }
}
