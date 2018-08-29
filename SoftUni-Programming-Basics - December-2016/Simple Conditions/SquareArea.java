import java.util.Scanner;

/**
 * Created by Lalka on 12/11/2016.
 */
public class SquareArea {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double a = Double.parseDouble(console.nextLine());

        double area = a * a;

        System.out.println(area);
    }
}
