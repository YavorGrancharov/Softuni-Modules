import java.util.Scanner;

public class FruitShop {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String fruit = console.nextLine();
        String day = console.nextLine();
        double quantity = Double.parseDouble(console.nextLine());

        if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Wednesday") || day.equals("Thursday") || day.equals("Friday")) {
            if (fruit.equals("banana")) {
                System.out.println(2.50 * quantity);
            } else if (fruit.equals("apple")) {
                System.out.println(1.20 * quantity);
            } else if (fruit.equals("orange")) {
                System.out.println(0.85 * quantity);
            } else if (fruit.equals("grapefruit")) {
                System.out.println(1.45 * quantity);
            } else if (fruit.equals("kiwi")) {
                System.out.println(2.70 * quantity);
            } else if (fruit.equals("pineapple")) {
                System.out.println(5.50 * quantity);
            } else if (fruit.equals("grapes")) {
                System.out.println(3.85 * quantity);
            }
        }
        if (day.equals("Saturday") || day.equals("Sunday")) {
            if (fruit.equals("banana")) {
                System.out.println(2.70 * quantity);
            } else if (fruit.equals("apple")) {
                System.out.println(1.25 * quantity);
            } else if (fruit.equals("orange")) {
                System.out.println(0.90 * quantity);
            } else if (fruit.equals("grapefruit")) {
                System.out.println(1.60 * quantity);
            } else if (fruit.equals("kiwi")) {
                System.out.println(3.00 * quantity);
            } else if (fruit.equals("pineapple")) {
                System.out.println(5.60 * quantity);
            } else if (fruit.equals("grapes")) {
                System.out.println(4.20 * quantity);
            }
        } else {
            System.out.println("error");
        }
    }
}
