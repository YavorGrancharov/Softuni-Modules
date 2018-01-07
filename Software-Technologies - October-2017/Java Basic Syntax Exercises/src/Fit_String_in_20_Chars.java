import java.util.Scanner;

public class Fit_String_in_20_Chars {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String input = console.nextLine();

        if (input.length() >= 20) {
            System.out.println(input.substring(0, 20));
        }
        else {
            for (int i = 0; i < 20; i++) {
                if (i >= input.length()) {
                    System.out.print("*");
                    continue;
                }

                System.out.print(input.charAt(i));
            }
        }
    }
}
