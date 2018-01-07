import java.util.Scanner;

public class Profit {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int workDays = Integer.parseInt(console.nextLine());
        double profitDay = Double.parseDouble(console.nextLine());
        double usdBgn = Double.parseDouble(console.nextLine());

        double profitMonth = workDays * profitDay;
        double profitYear = profitMonth * 12 + profitMonth * 2.5;
        double taxes = profitYear - (profitYear * 0.25);
        double profitBgn = (taxes * usdBgn) / 365;

        System.out.printf("%.2f", profitBgn);
    }
}
