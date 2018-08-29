import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class RadiansToDegrees {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double rad = Double.parseDouble(console.nextLine());
        double deg = Math.round(rad / (Math.PI / 180.0));
        System.out.println(deg);
    }
}
