import java.util.Scanner;

public class TriangleFormations {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int a = Integer.parseInt(console.nextLine());
        int b = Integer.parseInt(console.nextLine());
        int c = Integer.parseInt(console.nextLine());

        boolean validTriangle = a + b > c && a + c > b && b + c > a;
        if (validTriangle) {
            System.out.println("Triangle is valid.");
        } else {
            System.out.println("Invalid Triangle.");
        }

        if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) && validTriangle == true) {
            System.out.println("Triangle has a right angle between sides a and b");
        } else if (Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2) && validTriangle == true) {
            System.out.println("Triangle has a right angle between sides b and c");
        } else if (Math.pow(c, 2) + Math.pow(a, 2) == Math.pow(b, 2) && validTriangle == true) {
            System.out.println("Triangle has a right angle between sides a and c");
        } else if (validTriangle){
            System.out.println("Triangle has no right angles");
        }
    }
}
