import java.util.Scanner;

public class ChangeTiles {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double money = Double.parseDouble(console.nextLine());
        double width = Double.parseDouble(console.nextLine());
        double length = Double.parseDouble(console.nextLine());
        double triangleSide = Double.parseDouble(console.nextLine());
        double triangleHeight = Double.parseDouble(console.nextLine());
        double price = Double.parseDouble(console.nextLine());
        double pay = Double.parseDouble(console.nextLine());

        double floor = width * length;
        double plate = (triangleHeight * triangleSide) / 2;
        double plateFloor = Math.ceil((floor / plate) + 5);
        double moneyPrice = (price * plateFloor) + pay;

        if (money > moneyPrice) {
            double moneyLeft = money - moneyPrice;
            System.out.printf("%.2f", moneyLeft);
            System.out.print(" lv left.");
        } else if (money < moneyPrice) {
            double moneyNeeded = moneyPrice - money;
            System.out.printf("You'll need " + "%.2f", moneyNeeded);
            System.out.print(" lv more.");
        }
    }
}
