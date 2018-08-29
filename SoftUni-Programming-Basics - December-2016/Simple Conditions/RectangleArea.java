import java.util.Scanner;

/**
 * Created by Lalka on 12/10/2016.
 */
public class RectangleArea {
        public static void main(String[] args) {

            Scanner console = new Scanner(System.in);
            double x1 = Double.parseDouble(console.nextLine());
            double y1 = Double.parseDouble(console.nextLine());
            double x2 = Double.parseDouble(console.nextLine());
            double y2 = Double.parseDouble(console.nextLine());
            double a = Math.abs(x1 - x2);
            double h = Math.abs(y1 - y2);
            double area = a * h;
            double perimeter = 2 * (a + h);

            System.out.println(area);
            System.out.println(perimeter);
        }
}
