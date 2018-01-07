import java.util.Scanner;

/**
 * Created by Lalka on 12/17/2016.
 */
public class CurrencyConverter_2 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double value = Double.parseDouble(console.nextLine());
        String input = console.nextLine();
        String output = console.nextLine();
        double BGN = 1;
        double USD = 1.79549;
        double EUR = 1.95583;
        double GBP = 2.53405;

        if (input.equals("BGN") && output.equals("USD")) {
            double result = value / USD;
            System.out.printf("%.2f", result);
        } else if (input.equals("BGN") && output.equals("EUR")) {
            double result = value / EUR;
            System.out.printf("%.2f", result);
        } else if (input.equals("BGN") && output.equals("GBP")) {
            double result = value / GBP;
            System.out.printf("%.2f", result);
        }

        if (input.equals("USD") && output.equals("EUR")) {
            double result = value * 0.9180194597;
            System.out.printf("%.2f", result);
        } else if (input.equals("USD") && output.equals("GBP")) {
            double result = value * 0.7085456088;
            System.out.printf("%.2f", result);
        } else if (input.equals("USD") && output.equals("BGN")) {
            double result = value * 1.79549;
            System.out.printf("%.2f", result);
        }

        if (input.equals("EUR") && output.equals("USD")) {
            double result = value * 1.0893015277;
            System.out.printf("%.2f", result);
        } else if (input.equals("EUR") && output.equals("GBP")) {
            double result = value * 0.7718198141;
            System.out.printf("%.2f", result);
        } else if (input.equals("EUR") && output.equals("BGN")) {
            double result = value * 1.95583;
            System.out.printf("%.2f", result);
        }

        if (input.equals("GBP") && output.equals("USD")) {
            double result = value * 1.4113417507;
            System.out.printf("%.2f", result);
        } else if (input.equals("GBP") && output.equals("EUR")) {
            double result = value * 1.2956391915;
            System.out.printf("%.2f", result);
        } else if (input.equals("GBP") && output.equals("BGN")) {
            double result = value * 2.53405;
            System.out.printf("%.2f", result);
        }
    }
}
