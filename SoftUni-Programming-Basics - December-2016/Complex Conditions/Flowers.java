import java.util.Scanner;

public class Flowers {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int chrysanthemum = Integer.parseInt(console.nextLine());
        int roses = Integer.parseInt(console.nextLine());
        int tulips = Integer.parseInt(console.nextLine());
        String season = console.nextLine();
        String holliday = console.nextLine();

        double priceChrysanthemum = 0.0;
        double priceRoses = 0.0;
        double priceTulips = 0.0;
        double flowers = chrysanthemum + roses + tulips;

        if (season.equals("Summer") || season.equals("Spring")) {
            priceChrysanthemum = chrysanthemum * 2.00;
            priceRoses = roses * 4.10;
            priceTulips = tulips * 2.50;
        }

        if (season.equals("Winter") || season.equals("Autumn")) {
            priceChrysanthemum = chrysanthemum * 3.75;
            priceRoses = roses * 4.50;
            priceTulips = tulips * 4.15;

        }

        double price = priceChrysanthemum + priceRoses + priceTulips;

        if (season.equals("Spring") && tulips > 7) {
            price *= 0.95;
        }
        if (season.equals("Winter") && roses >= 10) {
            price *= 0.90;
        }
        if (flowers > 20) {
            price *= 0.80;
        } else if (holliday.equals("Y")) {
            price *= 1.15;
        }
        System.out.printf("%.2f", price + 2);
    }
}
