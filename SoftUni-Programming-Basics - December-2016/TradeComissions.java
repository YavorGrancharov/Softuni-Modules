import java.util.Scanner;

public class TradeComissions {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String town = console.nextLine();
        double sells = Double.parseDouble(console.nextLine());

        if (town.equals("Sofia")) {
            if (sells >= 0 && sells <= 500) {
                System.out.printf("%.2f", sells * 0.05);
            } else if (sells > 500 && sells <= 1000) {
                System.out.printf("%.2f", sells * 0.07);
            } else if (sells > 1000 && sells <= 10000) {
                System.out.printf("%.2f", sells * 0.08);
            } else if (sells > 10000) {
                System.out.printf("%.2f", sells * 0.12);
            }
        }
        if (town.equals("Varna")) {
            if (sells >= 0 && sells <= 500) {
                System.out.printf("%.2f", sells * 0.045);
            } else if (sells > 500 && sells <= 1000) {
                System.out.printf("%.2f", sells * 0.075);
            } else if (sells > 1000 && sells <= 10000) {
                System.out.printf("%.2f", sells * 0.10);
            } else if (sells > 10000) {
                System.out.printf("%.2f", sells * 0.13);
            }
        }
        if (town.equals("Plovdiv")) {
            if (sells >= 0 && sells <= 500) {
                System.out.printf("%.2f", sells * 0.055);
            } else if (sells > 500 && sells <= 1000) {
                System.out.printf("%.2f", sells * 0.08);
            } else if (sells > 1000 && sells <= 10000) {
                System.out.printf("%.2f", sells * 0.12);
            } else if (sells > 10000) {
                System.out.printf("%.2f", sells * 0.145);
            }
        }
        if (sells < 0 || !(town.equals("Sofia") || town.equals("Varna") || town.equals("Plovdiv"))) {
            System.out.println("error");
        }
    }
}
