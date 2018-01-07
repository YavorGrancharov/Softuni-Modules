import java.util.Scanner;

public class SimpleMatchingCoefficient {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        //number of matches
        double matches = Double.parseDouble(console.nextLine());
        //number of chosen movements
        double movements = Double.parseDouble(console.nextLine());
        //number of movements above five
        double over = movements - 5;

        double rating = 0.0;
        if (over > 0) {
            rating = (matches / movements) * over;
            System.out.printf("Contest rating is: %.1f", rating);
        } else if (over == 0) {
            rating = (matches / movements) - 0.1;
            System.out.printf("Contest rating is: %.1f", rating);
        }
    }
}
