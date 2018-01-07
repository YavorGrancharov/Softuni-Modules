import java.util.Scanner;

public class Axe {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        int width = n * 5;

        int dashes = n * 3;
        int dashes2 = 0;
        int dashes3 = n * 2 - 2;

        for (int i = 1; i <= n; i++) {
            System.out.println(repeatStr("-", dashes) + "*" + repeatStr("-", dashes2) + "*" + repeatStr("-", dashes3));
            dashes2++;
            dashes3--;
        }

        int asterisk = n * 3 + 1;
        for (int i = 0; i < n * 2 / 4; i++) {
            System.out.println(repeatStr("*", asterisk) + repeatStr("-", n - 1) + "*" + repeatStr("-", n - 1));
        }
        
        int dashes4 = n * 3;
        int dashes5 = n - 1;
        int dashes6 = n - 1;
        for (int i = 0; i < n / 2 - 1; i++) {
            System.out.println(repeatStr("-", dashes4) + "*" + repeatStr("-", dashes5) + "*" + repeatStr("-", dashes6));
            dashes4--;
            dashes5+=2;
            dashes6--;
        }

        System.out.println(repeatStr("-", dashes4) + "*" + repeatStr("*", dashes5) + "*" + repeatStr("-", dashes6));
    }

    static String repeatStr(String str, int count) {
        StringBuilder repeated = new StringBuilder();
        for (int i = 0; i < count; i++) {
            repeated.append(str);
        }
        return repeated.toString();
    }
}
