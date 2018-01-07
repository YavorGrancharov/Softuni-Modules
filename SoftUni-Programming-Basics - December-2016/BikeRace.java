import java.util.Scanner;

public class BikeRace {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int juniors = Integer.parseInt(console.nextLine());
        int seniors = Integer.parseInt(console.nextLine());
        String trace = console.nextLine();

        if (trace.equals("trail")) {
            double tax = (juniors * 5.50) + (seniors * 7);
            double expenses = tax - (tax * 0.05);
            System.out.printf("%.2f", expenses);
        } else if (trace.equals("cross-country") && (juniors + seniors) < 50) {
            double tax = (juniors * 8) + (seniors * 9.50);
            double expences = tax - (tax * 0.05);
            System.out.printf("%.2f", expences);
        } else if (trace.equals("downhill")) {
            double tax = (juniors * 12.25) + (seniors * 13.75);
            double expenses = tax - (tax * 0.05);
            System.out.printf("%.2f", expenses);
        } else if (trace.equals("road")) {
            double tax = (juniors * 20) + (seniors * 21.50);
            double expences = tax - (tax * 0.05);
            System.out.printf("%.2f", expences);
        }

        if (trace.equals("cross-country") && (juniors + seniors) >= 50) {
            double tax = (juniors * 6) + (seniors * 7.125);
            double expences = tax - (tax * 0.05);
            System.out.printf("%.2f", expences);
        }
    }
}
