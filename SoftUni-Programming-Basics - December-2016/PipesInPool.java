import java.text.DecimalFormat;
import java.util.Scanner;

public class PipesInPool {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        DecimalFormat format = new DecimalFormat("0.##");
        int V = Integer.parseInt(console.nextLine());
        int P1 = Integer.parseInt(console.nextLine());
        int P2 = Integer.parseInt(console.nextLine());
        double H = Double.parseDouble(console.nextLine());
        double water = P1 * H + P2 * H;

        if (water <= V) {
            double full = (water / V) * 100;
            double fullP1 = (P1 * H / water) * 100;
            double fullP2 = (P2 * H / water) * 100;

            System.out.println("The pool is " + (int)full + "% " + "full. Pipe 1: " + (int)fullP1 + "%" + ". " + "Pipe 2: " + (int)fullP2 + "%" + ".");
        } else {
            double over = water - V;

            System.out.println("For " + format.format(H) + " hours the pool overflows with " + format.format(over) + " liters.");
        }
    }
}
