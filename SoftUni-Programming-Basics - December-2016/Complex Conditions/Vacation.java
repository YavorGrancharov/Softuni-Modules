import java.util.Scanner;

public class Vacation {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int elders = Integer.parseInt(console.nextLine());
        int students = Integer.parseInt(console.nextLine());
        int nights = Integer.parseInt(console.nextLine());
        String transport = console.nextLine();

        double nightPrice = nights * 82.99;

        if (transport.equals("train") && (elders + students) < 50) {
            double tax = ((elders * 24.99 + students * 14.99) * 2) + nightPrice;
            double expenses = tax + (tax * 0.10);
            System.out.printf("%.2f", expenses);
        } else if (transport.equals("bus")) {
            double tax = ((elders * 32.50 + students * 28.50) * 2) + nightPrice;
            double expenses = tax + (tax * 0.10);
            System.out.printf("%.2f", expenses);
        } else if (transport.equals("boat")) {
            double tax = ((elders * 42.99 + students * 39.99) * 2) + nightPrice;
            double expenses = tax + (tax * 0.10);
            System.out.printf("%.2f", expenses);
        } else if (transport.equals("airplane")) {
            double tax = ((elders * 70.00 + students * 50.00) * 2) + nightPrice;
            double expenses = tax + (tax * 0.10);
            System.out.printf("%.2f", expenses);
        }

        if (transport.equals("train") && (elders + students) >= 50) {
            double tax = ((elders * 12.495 + students * 7.495) * 2) + nightPrice;
            double expenses = tax + (tax * 0.10);
            System.out.printf("%.2f", expenses);
        }
    }
}
