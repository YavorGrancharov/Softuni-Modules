import java.util.Scanner;

/**
 * Created by Lalka on 12/17/2016.
 */
public class HungryGarfield {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double money = Double.parseDouble(console.nextLine());
        double rate = Double.parseDouble(console.nextLine());
        double pizzaPrice = Double.parseDouble(console.nextLine());
        double lasagnaPrice = Double.parseDouble(console.nextLine());
        double sandwichPrice = Double.parseDouble(console.nextLine());
        int pizzaQuantity = Integer.parseInt(console.nextLine());
        int lasagnaQuantity = Integer.parseInt(console.nextLine());
        int sandwichQuantity = Integer.parseInt(console.nextLine());
        double sum = (pizzaPrice / rate * pizzaQuantity) + (lasagnaPrice / rate * lasagnaQuantity) + (sandwichPrice / rate * sandwichQuantity);
        double left = Math.abs(money - sum);
        if (money >= sum) {
            System.out.printf("Garfield is well fed, John is awesome. Money left: $%.2f.", left);
        } else {
            System.out.printf("Garfield is hungry. John is a badass. Money needed: $%.2f.", left);
        }
    }
}
