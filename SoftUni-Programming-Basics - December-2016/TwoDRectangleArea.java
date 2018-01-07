import java.util.Scanner;

/**
 * Created by Lalka on 12/11/2016.
 */
public class TwoDRectangleArea {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double x1 = Double.parseDouble(console.nextLine());
        double y1 = Double.parseDouble(console.nextLine());
        double x2 = Double.parseDouble(console.nextLine());
        double y2 = Double.parseDouble(console.nextLine());
        double width = (x1 - x2);
        double length = (y1 - y2);
        double area = (width * length);
        double perimeter = (2 * (width + length));
        System.out.println("Area = " + area);
        System.out.println("Perimeter = " + perimeter);
    }
}
