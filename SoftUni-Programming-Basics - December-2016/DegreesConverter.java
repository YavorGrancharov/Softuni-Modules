import java.util.Scanner;

/**
 * Created by Lalka on 12/17/2016.
 */
public class DegreesConverter {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double kel = Double.parseDouble(console.nextLine());
        double cel = (kel - 273.15);
        double far = (kel * 9/5 - 459.67);
        System.out.println(cel);
        System.out.println(far);
    }
}
