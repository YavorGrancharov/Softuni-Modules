import java.util.Scanner;

public class VaporStore {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        double balance = Double.parseDouble(console.nextLine());

        double price = 0.00;

        double totalPrice = 0.00;

        String[] game = new String[6];
        game[0] = "OutFall 4";
        game[1] = "CS: OG";
        game[2] = "Zplinter Zell";
        game[3] = "Honored 2";
        game[4] = "RoverWatch";
        game[5] = "RoverWatch Origins Edition";

        for (int i = 0; ; i++) {
            String boutGame = console.nextLine();
            if (!boutGame.equals("Game Time")) {
                if (boutGame.equals(game[0])) {
                    price = 39.99;
                } else if (boutGame.equals(game[1])) {
                    price = 15.99;
                } else if (boutGame.equals(game[2])) {
                    price = 19.99;
                } else if (boutGame.equals(game[3])) {
                    price = 59.99;
                } else if (boutGame.equals(game[4])) {
                    price = 29.99;
                } else if (boutGame.equals(game[5])) {
                    price = 39.99;
                }
                else
                {
                    System.out.println("Not Found");
                    continue;
                }

                if (balance < price) {
                    System.out.println("Too Expensive");
                    continue;
                } else {
                    balance -= price;
                    System.out.println("Bought " + boutGame);
                    totalPrice += price;
                }

                if (balance == 0) {
                    System.out.println("Out of money!");
                    break;
                }
            }

            else {
                System.out.printf("Total spent: $%.2f%s%.2f", totalPrice,". Remaining: $", balance);
                break;
            }
        }
    }
}
