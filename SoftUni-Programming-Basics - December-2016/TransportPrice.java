import java.util.Scanner;

/**
 * Created by Lalka on 1/14/2017.
 */
public class TransportPrice {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double price = 0;
        double n = Double.parseDouble(console.nextLine());
        String shift = console.nextLine();

        if (n < 20 && shift.equals("day")) {
            price = (n * 0.79) + 0.70;
            System.out.printf("%.2f", price);
        } else if (n < 20 && shift.equals("night")){
            price = (n * 0.90) + 0.70;
            System.out.printf("%.2f", price);
        } else if (n >= 20 && n < 100) {
            price = (n * 0.09);
            System.out.printf("%.2f", price);
        } else if (n >= 100) {
            price = (n * 0.06);
            System.out.printf("%.2f", price);
        }
    }
}
