import java.util.Scanner;
import java.util.StringJoiner;

/**
 * Created by Lalka on 12/11/2016.
 */
public class GreetingByName {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String a = console.nextLine();

        System.out.println("Hello, " + a + "!");
    }
}
