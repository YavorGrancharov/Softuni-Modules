import java.util.Scanner;

public class FlowerShop {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double magnolia = Double.parseDouble(console.nextLine());
        double zumbyul = Double.parseDouble(console.nextLine());
        double roses = Double.parseDouble(console.nextLine());
        double cactus = Double.parseDouble(console.nextLine());
        double prizePrice = Double.parseDouble(console.nextLine());

        double magnoliaPrice = magnolia * 3.25;
        double zumbyulPrice = zumbyul * 4.00;
        double rosesPrice = roses * 3.50;
        double cactusPrice = cactus * 8.00;

        double sumPrice = magnoliaPrice + zumbyulPrice + rosesPrice + cactusPrice;
        double finalPrice = sumPrice - (sumPrice * 0.05);
        //double finalPrice = sumPrice - taxes;

        if (finalPrice > prizePrice) {
            System.out.println("She is left with " + (int)Math.floor(finalPrice - prizePrice) + " leva.");
        } else {
            System.out.println("She will have to borrow " + (int)Math.ceil(prizePrice - finalPrice) + " leva.");
        }
    }
}
