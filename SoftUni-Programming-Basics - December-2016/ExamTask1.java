import java.util.Scanner;

public class ExamTask1 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double x = Double.parseDouble(console.nextLine());
        double y = Double.parseDouble(console.nextLine());
        double h = Double.parseDouble(console.nextLine());

        double green;
        double red;

        double side = (x * y);
        double sideWindow = 1.5 * 1.5;
        double bothSides = (2 * side) - (2 * sideWindow);
        double backSide = x * x;
        double door = 1.2 * 2;
        double frontBack = (2 * backSide) - door;

        double roofRectangle = 2 * (x * y);
        double roofTriangle = 2 * (x * h / 2);


        double sumSides = bothSides + frontBack;
        double sumRoof = roofTriangle + roofRectangle;
        double sumHouseArea = sumRoof + sumSides;

        green = sumSides / 3.4;
        red = sumRoof / 4.3;

        System.out.printf("%.2f\n",green);
        System.out.printf("%.2f\n", red);
    }
}
