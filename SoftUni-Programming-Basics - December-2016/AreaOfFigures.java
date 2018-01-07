import java.util.Scanner;

/**
 * Created by Lalka on 12/23/2016.
 */
public class AreaOfFigures {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String input = console.nextLine();

        if (input.equals("square")) {
            double a = Double.parseDouble(console.nextLine());
            double area = Math.pow(a, 2);
            System.out.printf("%.3f", area);
        } else if (input.equals("circle")) {
            double r = Double.parseDouble(console.nextLine());
            double area = Math.pow(r, 2) * Math.PI;
            System.out.printf("%.3f", area);
        } else if (input.equals("rectangle")) {
            double a = Double.parseDouble(console.nextLine());
            double b = Double.parseDouble(console.nextLine());
            double area = a * b;
            System.out.printf("%.3f", area);
        } else if (input.equals("triangle")) {
            double a = Double.parseDouble(console.nextLine());
            double b = Double.parseDouble(console.nextLine());
            double area = (a * b) / 2;
            System.out.printf("%.3f", area);
        }
    }
}
