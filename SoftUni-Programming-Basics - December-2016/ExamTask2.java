import java.util.Scanner;

public class ExamTask2 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int cups = Integer.parseInt(console.nextLine());
        int workers = Integer.parseInt(console.nextLine());
        int laborDays = Integer.parseInt(console.nextLine());

        int cupHours = 5;
        int laborHours = 8;
        double cupPrice = 4.20;

        double hoursWork = (workers * laborHours) * laborDays;
        double numCupsFinished = Math.floor(hoursWork / 5);

        double price = 0.0;
        if(numCupsFinished > cups) {
            price = (numCupsFinished - cups) * 4.20;
            System.out.printf("%.2f%s", price, " extra money");
        } else {
            price = (cups - numCupsFinished) * 4.20;
            System.out.printf("Losses: %.2f", price);
        }
    }
}
