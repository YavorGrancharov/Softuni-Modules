import java.lang.StringBuilder;
import java.util.Scanner;

public class Reverse_String {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();

        String reverse = new StringBuilder(line).reverse().toString();

        System.out.println(reverse);
    }
}
