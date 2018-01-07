import java.util.Scanner;

/**
 * Created by Lalka on 12/11/2016.
 */
public class TrapezoidArea {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        Double a = Double.parseDouble(console.nextLine());
        Double b = Double.parseDouble(console.nextLine());
        Double h = Double.parseDouble(console.nextLine());

        Double area = h * (a + b) / 2;
        System.out.println(area);

    }
}
