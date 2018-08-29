import java.util.Scanner;

public class Diamond2 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        int dotsOut = n;
        int dotsIn = n * 3;

        for (int i = 0; i < 1; i++) {
            System.out.println(repeatStr(".", dotsOut) + repeatStr("*", n * 3) + repeatStr(".", dotsOut));
        }

        for (int i = 0; i < n - 1; i++) {
            System.out.println(repeatStr(".", dotsOut - 1) + "*" + repeatStr(".", dotsIn) + "*" + repeatStr(".", dotsOut - 1));
            dotsOut--;
            dotsIn+=2;
        }

        System.out.println(repeatStr("*", n * 5));

        int dotsOutDown = 1;
        int dotsInDown = n * 5 - 4;
        for (int i = 0; i < n * 2; i++) {
            System.out.println(repeatStr(".", dotsOutDown) + "*" + repeatStr(".", dotsInDown) + "*" + repeatStr(".", dotsOutDown));
            dotsOutDown++;
            dotsInDown-=2;
        }

        System.out.println(repeatStr(".", n * 2 + 1) + repeatStr("*", n - 2) + repeatStr(".", n * 2 + 1));
    }

    static String repeatStr(String str, int count) {
        StringBuilder repeated = new StringBuilder();
        for (int i = 0; i < count; i++) {
            repeated.append(str);
        }
        return repeated.toString();
    }
}
