import java.util.Scanner;

public class DrawFort {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        int k = 0;
        if (n % 2 != 0) {
            k = 1;
        }
        System.out.println("/" + repeatStr("^", n / 2) + "\\" + repeatStr("_", 2*n-n-4+k) + "/" + repeatStr("^", n / 2) + "\\");

        for (int i = 0; i < n - 2; i++) {
            if (i != n - 3) {
                System.out.println("|" + repeatStr(" ", 2 * n - 2) + "|");
            } else {
                System.out.println("|" + repeatStr(" ", n/2 + 1) + repeatStr("_", 2*n-n-4+k) + repeatStr(" ", n/2 + 1) + "|");
            }
        }
        System.out.println("\\" + repeatStr("_", n/2) + "/" + repeatStr(" ", 2*n-n-4+k) + "\\" + repeatStr("_", n/2) + "/");
    }
    static String repeatStr(String str, int count) {
        StringBuilder repeated = new StringBuilder();
        for (int i = 0; i < count; i++) {
            repeated.append(str);
        }
        return repeated.toString();
    }
}
