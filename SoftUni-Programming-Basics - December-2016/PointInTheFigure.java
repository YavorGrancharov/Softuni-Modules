import java.util.Scanner;

public class PointInTheFigure {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int h = Integer.parseInt(console.nextLine());
        int x = Integer.parseInt(console.nextLine());
        int y = Integer.parseInt(console.nextLine());

        //figOne
        int x1 = 0;
        int y1 = 0;
        int x2 = h * 3;
        int y2 = h;

        //figTwo
        int x3 = h;
        int y3 = h;
        int x4 = h * 2;
        int y4 = (h * 4);

        boolean isInside = ((x > x1 && x < x2 && y > y1 && y < y2) || (x > x3 && x < x4 && y > y3 && y < y4) || (y == y2 && x3 < x && (x3 * 2) > x));
        boolean border = ((y == y1 && x >= x1 && x <= x2) || (y == y2 && (x >= x1 && x <= x3)) || (y == y2 && (x >= x4 && x <= x2)) || ((x == x1 || x == x2 )&& y1 <= y && y <= y2) || (y == y4 && x >= x3 && x <= x4) || (x == x3 && y >= y3 && y <= y4) || (x == x4 && y >= y3 && y <= y4));

        if (isInside) {
            System.out.println("inside");
        } else if (border) {
            System.out.println("border");
        } else {
            System.out.println("outside");
        }
    }
}
