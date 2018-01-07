import java.util.Scanner;

public class ChristmasHat {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        int width = 4 * n + 1;
        int height = 2 * n + 5;
        int dots = n * 2 -1;
        int dashes = 1;
        dots--;

        System.out.println(repeatStr(".", n * 2 - 1) + "/" + "|" + "\\" + repeatStr(".", n * 2 - 1));
        System.out.println(repeatStr(".", n * 2 - 1) + "\\" + "|" + "/" + repeatStr(".", n * 2 - 1));
        System.out.println(repeatStr(".", n * 2 - 1) + "***" + repeatStr(".", n * 2 - 1));

        for (int i = 0; i < n * 2 - 1; i++) {
            System.out.println(repeatStr(".", dots) + "*" + repeatStr("-", dashes) + "*" + repeatStr("-", dashes) + "*" + repeatStr(".", dots));
            dots--;
            dashes++;
        }
        System.out.println(repeatStr("*", width));
        System.out.println(repeatStr("*.", width / 2) + "*");
        System.out.println(repeatStr("*", width));
    }
    static String repeatStr(String str, int count) {
        StringBuilder repeated = new StringBuilder();
        for (int i = 0; i < count; i++) {
            repeated.append(str);
        }
        return repeated.toString();
    }
}
