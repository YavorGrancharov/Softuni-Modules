import java.util.Scanner;

/**
 * Created by Lalka on 12/23/2016.
 */
public class SpeedInfo {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double speed = Double.parseDouble(console.nextLine());
        if (speed <= 10) {
            System.out.println("slow");
        } else if (speed <= 50) {
            System.out.println("average");
        } else if (speed <= 150 ) {
            System.out.println("fast");
        } else if (speed <= 1000) {
            System.out.println("ultra fast");
        } else {
            System.out.println("extremely fast");
        }
    }
}