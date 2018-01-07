import java.util.Scanner;

public class Index_of_Letters {
    public static void main(String[] args) {
        Scanner console =  new Scanner(System.in);

        String input = console.nextLine();
        char[] ch = input.toCharArray();

        for (int i = 0; i < ch.length; i++) {
            System.out.println(ch[i] + " -> " + (ch[i] - 97));
        }
    }
}
