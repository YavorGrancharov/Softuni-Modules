import java.util.Scanner;

public class ChristmasTree {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        for (int i = 0; i < n + 1; i++) {
            System.out.println(repeatStr(" ", n - i) + repeatStr("*", i) + (" | ") + repeatStr(" ", i - n) + repeatStr("*", i));
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
