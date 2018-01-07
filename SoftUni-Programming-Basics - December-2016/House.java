import java.util.Scanner;

public class House {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        int dashes = n / 2;
        int stars = 1;

        if (n % 2 == 0) {
            dashes--;
            stars++;
        }

        for (int i = 0; i < (n + 1) / 2; i++) {
            System.out.println(repeatStr("-", dashes) + repeatStr("*", stars) + repeatStr("-", dashes));

            dashes--;
            stars += 2;
        }
        for (int i = 0; i < n / 2; i++) {
            System.out.println("|" + repeatStr("*", n - 2) + "|");
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
