import java.util.Scanner;

public class Grades {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int num = Integer.parseInt(console.nextLine());
        int top = 0;
        int betweenFour = 0;
        int betweenThree = 0;
        int fail = 0;
        double average = 0.00;

        for (int i = 0; i < num; i++) {
            double grade = Double.parseDouble(console.nextLine());
            if (grade >= 5.00) {
                top++;
            }
            if (grade >= 4 && grade <= 4.99) {
                betweenFour++;
            }
            if (grade >= 3 && grade <= 3.99) {
                betweenThree++;
            }
            if (grade < 3.00) {
                fail++;
            }
                average += grade;
        }

            System.out.printf("Top students: %.2f%s\n", ((double) top / (double) num * 100), "%");
            System.out.printf("Between 4.00 and 4.99: %.2f%s\n", ((double) betweenFour / (double) num * 100), "%");
            System.out.printf("Between 3.00 and 3.99: %.2f%s\n", ((double) betweenThree / (double) num * 100), "%");
            System.out.printf("Fail: %.2f%s\n", ((double) fail / (double) num * 100), "%");
            System.out.printf("Average: %.2f\n", (average / (double) num));
    }
}
