import java.util.Scanner;

/**
 * Created by Lalka on 12/11/2016.
 */
public class InchesToCentimeters {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        Double inches = Double.parseDouble(console.nextLine());
        Double centimeters = inches * 2.54;

        System.out.println("Centimeters");
        System.out.println(centimeters);
    }
}
