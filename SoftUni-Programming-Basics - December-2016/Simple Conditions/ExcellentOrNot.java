import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class ExcellentOrNot {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double grade = Double.parseDouble(console.nextLine());
        if (grade >= 5.50) {
            System.out.print("Excellent!");
        } else {
            System.out.print("Not excellent.");
        }
    }
}
