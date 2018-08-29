import java.util.Scanner;

/**
 * Created by Lalka on 12/17/2016.
 */
public class SphereArea {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double radius = Double.parseDouble(console.nextLine());
        double area = (Math.PI * 4) * (Math.pow(radius, 2));
        System.out.printf("%.0f", area);
    }
}
