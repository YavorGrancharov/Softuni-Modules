import java.util.Scanner;

public class RhombusOfStars {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        int spaces = n - 1;
        int stars = 1;
        for (int i = 0; i < n; i++) {
            System.out.println(repeatStr(" ", spaces) + repeatStr("* ", stars));
            spaces--;
            stars++;
        }
        spaces = 1;
        stars -= 2;
        for (int i = 0; i < n; i++) {
            System.out.println(repeatStr(" ", spaces) + repeatStr("* ", stars));
            spaces++;
            stars--;
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
