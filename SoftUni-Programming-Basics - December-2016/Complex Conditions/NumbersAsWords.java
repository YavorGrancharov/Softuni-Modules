import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class NumbersAsWords {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int i = Integer.parseInt(console.nextLine());
        if (i == 0) {
            System.out.println("zero");
        }
        else if (i == 1) {
            System.out.println("one");
        }
        else if (i == 2) {
            System.out.println("two");
        }
        else if (i == 3) {
            System.out.println("three");
        }
        else if (i == 4) {
            System.out.println("four");
        }
        else if (i == 5) {
            System.out.println("five");
        }
        else if (i == 6) {
            System.out.println("six");
        }
        else if (i == 7) {
            System.out.println("seven");
        }
        else if (i == 8) {
            System.out.println("eight");
        }
        else if (i == 9) {
            System.out.println("nine");
        } else {
            System.out.println("number too big");
        }

    }
}
