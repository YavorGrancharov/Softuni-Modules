import java.util.Scanner;

public class HousePrice {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double smallestRoom = Double.parseDouble(console.nextLine());
        double areaKitchen = Double.parseDouble(console.nextLine());
        double squareMeterPrice = Double.parseDouble(console.nextLine());

        double bathroom = smallestRoom / 2;
        double secondRoom = (smallestRoom * 0.10) + smallestRoom;
        double thirdRoom = (secondRoom * 0.10) + secondRoom;

        double sumArea = (areaKitchen + bathroom + smallestRoom + secondRoom + thirdRoom);
        double wholeArea = (sumArea * 0.05) + sumArea;
        double price = wholeArea * squareMeterPrice;

        System.out.printf("%.2f", price);
    }
}
