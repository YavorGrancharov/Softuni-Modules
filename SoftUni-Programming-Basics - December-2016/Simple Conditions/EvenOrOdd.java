import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class EvenOrOdd {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int i = Integer.parseInt(console.nextLine());
        if (i % 2 == 0) {
            System.out.print("even");
        } else {
            System.out.print("odd");
        }
    }
}
