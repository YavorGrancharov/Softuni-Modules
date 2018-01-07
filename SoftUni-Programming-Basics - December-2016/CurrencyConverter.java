import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class CurrencyConverter {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double value = Double.parseDouble(console.nextLine());
        double input = Double.parseDouble(console.nextLine());
        double output = Double.parseDouble(console.nextLine());
        double BGN = Double.parseDouble(console.nextLine());
        double USD = Double.parseDouble(console.nextLine());
        double EUR = Double.parseDouble(console.nextLine());
        double GBP = Double.parseDouble(console.nextLine());

        if (input == USD && output == BGN) {
            double USDtoBGN = ((value * 1.79549) / 1.0);
            System.out.printf("USD to BGN = %.2f", USDtoBGN);
        }

        if (input == USD && output == EUR) {
            double USDtoEUR = ((value * 1.79549) / 1.95583);
            System.out.printf("USD to EUR = %.2f", USDtoEUR);
        }

        if (input == USD && output == GBP) {
            double USDtoGBP = ((value * 1.79549) / 2.53405);
            System.out.printf("USD to GBP = %.2f", USDtoGBP);
        }

        if (input == BGN && output == USD) {
            double BGNtoUSD = ((value * 1.0) / 1.79549);
            System.out.printf("BGN to USD = %.2f", BGNtoUSD);
        }

        if (input == BGN && output == EUR) {
            double BGNtoEUR = ((value * 1.0) / 1.95583);
            System.out.printf("BGN to EUR = %.2f", BGNtoEUR);
        }

        if (input == BGN && output == GBP) {
            double BGNtoGBP = ((value * 1.0) / 2.53405);
            System.out.printf("BGN to GBP  = %.2f", BGNtoGBP);
        }
    }
}
