import java.util.Scanner;

public class Trip {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double money = Double.parseDouble(console.nextLine());
        String season = console.nextLine();

        if (money <= 100 && season.equals("summer")) {
            double percent = money * 0.30;
            System.out.println("Somewhere in Bulgaria");
            System.out.printf("Camp - " + "%.2f", percent);
        } else if (money <= 100 && season.equals("winter")) {
            double percent = money * 0.70;
            System.out.println("Somewhere in Bulgaria");
            System.out.printf("Hotel - " + "%.2f", percent);
        } else if (money > 100 && money <= 1000 && season.equals("summer")) {
            double percent = money * 0.40;
            System.out.println("Somewhere in Balkans");
            System.out.printf("Camp - " + "%.2f", percent);
        } else if (money > 100 && money <= 1000 && season.equals("winter")) {
            double percent = money * 0.80;
            System.out.println("Somewhere in Balkans");
            System.out.printf("Hotel - " + "%.2f", percent);
        } else if (money > 1000) {
            double percent = money * 0.90;
            System.out.println("Somewhere in Europe");
            System.out.printf("Hotel - " + "%.2f", percent);
        }
    }
}
