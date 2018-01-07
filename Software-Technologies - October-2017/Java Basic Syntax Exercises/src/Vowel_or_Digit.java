import java.util.Arrays;
import java.util.Scanner;

public class Vowel_or_Digit {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String input = console.nextLine();
        char ch = input.charAt(0);
        Character[] vowels = new Character[]{'a', 'e', 'e', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};

        boolean exists = Arrays.asList(vowels).contains(ch);

        if (exists) {
            System.out.println("vowel");
        }
        else if (Character.isDigit(ch)) {
            System.out.println("digit");
        }
        else {
            System.out.println("other");
        }
    }
}
