import java.util.Scanner;

public class BackToThePast {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int age = 18;
        double inheritance = Double.parseDouble(console.nextLine());
        int yearsToLive = Integer.parseInt(console.nextLine());

        for (int i = 1800; i <= yearsToLive; i++) {
            if ((i & 1) == 0) {
                inheritance -= 12000;
            } else {
                inheritance -= (12000 + 50 * age);
            }
            age++;
        }
        if (inheritance < 0) {
            System.out.printf("He will need %.2f%s\n", Math.abs(inheritance), " dollars to survive.");
        } else {
            System.out.printf("Yes! He will live a carefree life and will have %.2f%s\n", Math.abs(inheritance), " dollars left.");
        }
    }
}
