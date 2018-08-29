import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class BonusScore {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double n = Double.parseDouble(console.nextLine());
        double bonus = 0;
        if (n <= 100) {
            bonus += 5;
        }
        else if (n > 100 && n <= 1000) {
            bonus = ((n * 20) / 100);
        }
        else if (n > 1000) {
            bonus = ((n * 10) / 100);
        }
        if (n % 2 == 0) {
            bonus += 1;
        }
        else if (n % 10 == 5) {
            bonus += 2;
        }

        double result = n + bonus;
        System.out.println("Bonus score: " + bonus);
        System.out.println("Total score: " + result);
    }
}
