import java.math.BigDecimal;
import java.util.Scanner;

/**
 * Created by Lalka on 12/29/2016.
 */
public class VegetableMarket {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double vegPrice = Double.parseDouble(console.nextLine());
        double fruitPrice = Double.parseDouble(console.nextLine());
        int kgVegAll = Integer.parseInt(console.nextLine());
        int kgFruitAll = Integer.parseInt(console.nextLine());
        double price = ((vegPrice * kgVegAll) + (fruitPrice * kgFruitAll)) / 1.94;
        BigDecimal euroPrice = new BigDecimal(price);
        System.out.println(euroPrice);
    }
}
