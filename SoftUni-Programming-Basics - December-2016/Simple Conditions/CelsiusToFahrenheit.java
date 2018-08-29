import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class CelsiusToFahrenheit {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double cel = Double.parseDouble(console.nextLine());
        double far = (cel * 1.8) + 32;
        System.out.printf("F = %.2f", far);
    }
}
