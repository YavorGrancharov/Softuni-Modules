import java.util.Scanner;

/**
 * Created by Lalka on 12/11/2016.
 */
public class CircleAreaAndPerimeter {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double radius = Double.parseDouble(console.nextLine());
        double perimeter = (2 * Math.PI) * radius;
        double area = (radius * radius) * Math.PI;

        System.out.println("Area = " + area);
        System.out.println("Perimeter = " + perimeter);
    }
}
