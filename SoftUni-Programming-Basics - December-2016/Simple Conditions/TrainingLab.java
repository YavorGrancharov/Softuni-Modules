import java.util.Scanner;

/**
 * Created by Lalka on 12/20/2016.
 */
public class TrainingLab {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double h = Double.parseDouble(console.nextLine());
        double w = Double.parseDouble(console.nextLine());
        double row = Math.floor((h * 100) / 120);
        double desk = Math.floor(((w * 100) - 100) / 70);
        double seats = (row * desk - 3);
        if (3 <= h || h <= w || w <= 100) {
            System.out.printf("%.0f", seats);
        }
    }
}
