import java.util.Scanner;

public class ExamTask3 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double budget = Double.parseDouble(console.nextLine());
        String season = console.nextLine();

        if(budget <= 1000) {
            double price = 0.0;
            String camp = "Camp";
            if(season.equals("Summer")) {
                String destination = "Alaska";
                price = budget * 0.65;
                System.out.printf("%s - %s - %.2f",destination,camp,price);
            } else if(season.equals("Winter")) {
                String destination = "Morocco";
                price = budget * 0.45;
                System.out.printf("%s - %s - %.2f",destination,camp,price);
            }
        }

        if(budget > 1000 && budget <= 3000) {
            double price = 0.0;
            String camp = "Hut";
            if(season.equals("Summer")) {
                String destination = "Alaska";
                price = budget * 0.8;
                System.out.printf("%s - %s - %.2f",destination,camp,price);
            } else if(season.equals("Winter")) {
                String destination = "Morocco";
                price = budget * 0.6;
                System.out.printf("%s - %s - %.2f",destination,camp,price);
            }
        }

        if(budget > 3000) {
            double price = 0.0;
            String camp = "Hotel";
            if(season.equals("Summer")) {
                String destination = "Alaska";
                price = budget * 0.9;
                System.out.printf("%s - %s - %.2f",destination,camp,price);
            } else if(season.equals("Winter")) {
                String destination = "Morocco";
                price = budget * 0.9;
                System.out.printf("%s - %s - %.2f",destination,camp,price);
            }
        }
    }
}
