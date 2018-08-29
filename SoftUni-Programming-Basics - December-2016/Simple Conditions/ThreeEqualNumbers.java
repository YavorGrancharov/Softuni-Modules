import java.util.Scanner;

/**
 * Created by Lalka on 12/23/2016.
 */
public class ThreeEqualNumbers {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double a = Double.parseDouble(console.nextLine());
        double b = Double.parseDouble(console.nextLine());
        double c = Double.parseDouble(console.nextLine());

        if (a == b && a == c && b == c) {
            System.out.println("yes");
        } else {
            System.out.println("no");
        }
    }
}
