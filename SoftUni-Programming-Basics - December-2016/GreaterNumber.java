import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class GreaterNumber {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int num1 = Integer.parseInt(console.nextLine());
        int num2 = Integer.parseInt(console.nextLine());
        if (num1 > num2) {
            System.out.println("Greater number: " + num1);
        } else {
            System.out.println("Greater number: " + num2);
        }
    }
}
