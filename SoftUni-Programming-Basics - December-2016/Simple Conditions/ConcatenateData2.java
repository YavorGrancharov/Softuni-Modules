import java.util.Scanner;

/**
 * Created by Lalka on 12/17/2016.
 */
public class ConcatenateData2 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String firstName = console.nextLine();
        String lastName = console.nextLine();
        int age = Integer.parseInt(console.nextLine());
        String town = console.nextLine();

        System.out.printf("You are %s %s, a %s years old person from %s.%n",firstName,lastName,age,town);
    }
}
