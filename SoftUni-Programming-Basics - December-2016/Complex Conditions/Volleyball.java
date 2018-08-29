import java.util.Scanner;

public class Volleyball {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String year = console.nextLine();
        int p = Integer.parseInt(console.nextLine());
        int h = Integer.parseInt(console.nextLine());

        double sofia = (48 - h) * (3.0/4);
        double holiday = (p * (2.0/3));
        double games = sofia + holiday + h;
        double leap = (games * 0.15) + games;


        if (year.equals("normal")) {
            System.out.println(Math.floor(games));
        } else if (year.equals("leap")) {
            System.out.println(Math.floor(leap));
        }
    }
}
