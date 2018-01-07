import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String projection = console.nextLine();
        int r = Integer.parseInt(console.nextLine());
        int c = Integer.parseInt(console.nextLine());

        if (projection.equals("Premiere")) {
            System.out.println(12.00 * r * c + " leva");
        } else if (projection.equals("Normal")) {
            System.out.println(7.50 * r * c + " leva");
        } else {
            System.out.println(5.00 * r * c + " leva");
        }
    }
}
