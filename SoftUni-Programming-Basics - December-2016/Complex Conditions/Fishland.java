import java.util.Scanner;

public class Fishland {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double scumriaPrice = Double.parseDouble(console.nextLine());
        double tsatsaPrice = Double.parseDouble(console.nextLine());
        double palamudKilo = Double.parseDouble(console.nextLine());
        double safridKilo = Double.parseDouble(console.nextLine());
        int midi = Integer.parseInt(console.nextLine());

        double midiPrice = midi * 7.5;
        double palamudRealPrice = palamudKilo * (scumriaPrice + scumriaPrice * 0.6);
        double safridRealPrice = safridKilo * (tsatsaPrice + tsatsaPrice * 0.8);

        double sumPrice = palamudRealPrice + safridRealPrice + midiPrice;
        System.out.printf("%.2f", sumPrice);

    }
}
