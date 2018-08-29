import java.util.Scanner;

/**
 * Created by Lalka on 12/23/2016.
 */
public class PasswordGuess {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String guess = console.nextLine();

        if (guess.equals("s3cr3t!P@ssw0rd")) {
            System.out.println("Welcome");
        }else {
            System.out.println("Wrong password!");
        }
    }
}
