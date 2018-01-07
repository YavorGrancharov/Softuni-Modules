import java.util.Scanner;

public class SmallShop {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String product = console.nextLine();
        String town = console.nextLine();
        double quantity = Double.parseDouble(console.nextLine());

        if (town.equals("Sofia")) {
            if (product.equals("coffee")) {
                System.out.println(0.50 * quantity);
            } else if (product.equals("water")) {
                System.out.println(0.80 * quantity);
            } else if (product.equals("beer")) {
                System.out.println(1.20 * quantity);
            } else if (product.equals("sweets")) {
                System.out.println(1.45 * quantity);
            } else {
                System.out.println(1.60 * quantity);
            }
        }
        if (town.equals("Plovdiv")) {
            if (product.equals("coffee")) {
                System.out.println(0.40 * quantity);
            } else if (product.equals("water")) {
                System.out.println(0.70 * quantity);
            } else if (product.equals("beer")) {
                System.out.println(1.15 * quantity);
            } else if (product.equals("sweets")) {
                System.out.println(1.30 * quantity);
            } else {
                System.out.println(1.50 * quantity);
            }
        }
        if (town.equals("Varna")) {
            if (product.equals("coffee")) {
                System.out.println(0.45 * quantity);
            } else if (product.equals("water")) {
                System.out.println(0.70 * quantity);
            } else if (product.equals("beer")) {
                System.out.println(1.10 * quantity);
            } else if (product.equals("sweets")) {
                System.out.println(1.35 * quantity);
            } else {
                System.out.println(1.55 * quantity);
            }
        }
    }
}
