import java.util.Scanner;

public class StupidPasswordGenerator {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        int l = Integer.parseInt(console.nextLine());

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                for (int k = 97; k < 97 + l; k++) {
                    for (int m = 97; m < 97 + l; m++) {
                        for (int o = 1; o <= n; o++) {
                            if (o > i && o > j) {
                                System.out.print(i);
                                System.out.print(j);
                                System.out.print((char)k);
                                System.out.print((char)m);
                                System.out.print(o);
                                System.out.print(" ");
                            }
                        }
                    }
                }
            }
        }
    }
}
