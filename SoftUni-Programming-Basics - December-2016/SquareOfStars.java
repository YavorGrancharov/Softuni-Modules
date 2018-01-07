import java.util.Scanner;

/**
 * Created by Lalka on 12/11/2016.
 */
public class SquareOfStars {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        String a = "*";
        String b = " ";

        for (int i = 1; i <= num; i++) {
            System.out.print(a);
        }
        System.out.print('\n');


        for (int x = 1; x <= (num - 2); x++) {
            System.out.print(a);

            for (int y = 1; y <= (num - 2); y++) {
                System.out.print(b);
            }
            System.out.println(a);
        }

        for (int i = 1; i <= num; i++) {
            System.out.print(a);
        }
        System.out.print('\n');
    }
}
