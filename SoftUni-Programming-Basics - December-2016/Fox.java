import java.util.Scanner;

public class Fox {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        int width = n * 2 + 3;
        int asterisk = n - (n - 1);
        int dashes = width - 4;

        for (int i = 1; i <= n; i++) {
            System.out.println(repeatStr("*", asterisk) + "\\" + repeatStr("-", dashes) + "/" + repeatStr("*", asterisk));
            dashes-=2;
            asterisk++;
        }

        //int height = (int)Math.round(n / 3.5);
        int asterisk2 = (int) Math.round((n / 2) - 0.5);
        int asterisk22 = n;
        for (int i = 1; i <= n / 3; i++) {
            System.out.println("|" + repeatStr("*", asterisk2) + "\\" + repeatStr("*", asterisk22) + "/" + repeatStr("*", asterisk2) + "|");
            asterisk22-=2;
            asterisk2++;

        }

        int asterisk3 = width - 4;
        int dashes3 =  n - (n - 1);
        for (int i = 1; i <= n; i++) {
            System.out.println(repeatStr("-", dashes3) + "\\" + repeatStr("*", asterisk3) + "/" + repeatStr("-", dashes3));
            asterisk3-=2;
            dashes3++;
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
