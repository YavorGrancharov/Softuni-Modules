import java.util.Scanner;

public class X {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        int spaceIn = n - 2;
        int spaceIn2 = 0;
        int spaceLeft = 0;
        int spaceOut = 0;

        if (n >= 3 && n <= 99) {
            for (int i = 1; i <= n / 2; i++) {
                System.out.println(repeatStr(" ", spaceLeft) + "x" + repeatStr(" ", spaceIn) + "x" + repeatStr(" ", spaceOut));
                spaceIn-=2;
                spaceLeft++;
                spaceOut++;
            }

            System.out.println(repeatStr(" ", spaceOut) + "x" + repeatStr(" ", spaceOut));
        }

        for (int i = 1; i <= n / 2; i++) {
            System.out.println(repeatStr(" ", spaceLeft - 1) + "x" + repeatStr(" ", spaceIn2 + 1) + "x" + repeatStr(" ", spaceOut - 1));
            spaceLeft--;
            spaceOut--;
            spaceIn2+=2;
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
