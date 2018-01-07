import java.util.Scanner;

public class Rocket {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        int width = n * 3;
        int dots = ((n * 3) / 2) - 1;
        int dashes = n * 2 - 2;
        int dotsBody = n * 3;
        int space = 0;
        int asterisk = n * 2 - 2;
        int dots2 = n / 2;

        for (int i = 1; i <= n; i++) {
            System.out.println(repeatStr(".", dots) + "/" + repeatStr(" ", space) + "\\" + repeatStr(".", dots));
            dots--;
            space+=2;
        }

        System.out.println(repeatStr(".", n / 2) + repeatStr("*", n * 2) + repeatStr(".", n /2));

        for (int i = 1; i <= n * 2; i++) {
            System.out.println(repeatStr(".", dots2) + "|" + repeatStr("\\", dashes) + "|" + repeatStr(".", dots2));
        }

        for (int i = 1; i <= n / 2; i++) {
            System.out.println(repeatStr(".", dots2) + "/" + repeatStr("*", asterisk) + "\\" + repeatStr(".", dots2));
            dots2--;
            asterisk+=2;
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


