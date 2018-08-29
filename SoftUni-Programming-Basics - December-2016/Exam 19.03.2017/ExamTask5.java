import java.util.Scanner;

public class ExamTask5 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        int width = 2 * n + 1;
        int height = 2 * n + 1;
        int dotsIn = 2;
        int dotsout = 2;
        int symbol = n + n - 5;
        //int asterisks = 0;

        for (int i = 0; i < 1; i++) {
            System.out.println(repeatStr("*", width));
            System.out.println("." + "*" + repeatStr(" ", width - 4) + "*" + ".");
        }

        for (int i = 3; i <= n; i++) {
            System.out.println(repeatStr(".", dotsIn) + "*" + repeatStr("@", symbol) + "*" + repeatStr(".", dotsout));
            dotsIn++;
            symbol-=2;
            dotsout++;
        }

        for (int i = 0; i < 1; i++) {
            System.out.println(repeatStr(".", n) + "*" + repeatStr(".", n));

        }

        int spaceIn = 0;
        int spaceOut = 0;
        for (int i = 3; i <= n; i++) {
            System.out.println(repeatStr(".", dotsIn - 1) + "*" + repeatStr(" ", spaceIn) + "@" + repeatStr(" ", spaceOut) + "*" + repeatStr(".", dotsout - 1));
            dotsIn--;
            spaceIn++;
            spaceOut++;
            dotsout--;
        }

        for (int i = 0; i < 1; i++) {
            System.out.println("." + "*" + repeatStr("@", width - 4) + "*" + ".");
            System.out.println(repeatStr("*", width));
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
