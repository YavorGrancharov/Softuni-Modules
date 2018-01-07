import java.util.Scanner;

public class HotelRoom {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String month = console.nextLine();
        int nights = Integer.parseInt(console.nextLine());

        double studio = 0.0;
        double apartment = 0.0;

        if (month.equals("May") || month.equals("October")) {
            studio = nights * 50;
            apartment = nights * 65;
        }
        if (month.equals("May") || month.equals("October") && nights > 7) {
            studio = nights * 47.5;
            apartment = nights * 65;
        }
        if (month.equals("May") || month.equals("October") && nights > 14) {
            studio = nights * 35;
            apartment = nights * 58.5;
        }

        if (month.equals("June") || month.equals("September")) {
            studio = nights * 75.20;
            apartment = nights * 68.70;
        }else if (month.equals("June") || month.equals("September") && nights > 14) {
            studio = nights * 60.16;
            apartment = nights * 61.83;
        }

        if (month.equals("July") || month.equals("August")) {
            studio = nights * 76;
            apartment = nights * 77;
        }
        if (month.equals("July") || month.equals("August") && nights > 14) {
            studio = nights * 76;
            apartment = nights * 69.3;
        }

        System.out.printf("Apartment: %.2f%s\n", apartment, " lv.");
        System.out.printf("Studio: %.2f%s\n", studio, " lv.");
    }
}
