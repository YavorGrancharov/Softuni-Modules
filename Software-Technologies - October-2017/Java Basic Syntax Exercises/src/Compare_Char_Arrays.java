import java.util.Arrays;
import java.util.Scanner;

public class Compare_Char_Arrays {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String[] a = console.nextLine().trim().split("\\s");
        char[] aChar = Arrays.toString(a).toCharArray();
        String[] b = console.next().trim().split("\\s");
        char[] bChar = Arrays.toString(b).toCharArray();

        if (a.length == b.length) {
            if (aChar[0] - '0' < bChar[0] - '0') {
                System.out.println(new String(aChar));
                System.out.println(new String(bChar));
            }
            else {
                System.out.println(new String(bChar));
                System.out.println(new String(aChar));
            }
        }
        else if (a.length > b.length) {
            System.out.println(new String(bChar));
            System.out.println(new String(aChar));
        }
        else {
            System.out.println(new String(aChar));
            System.out.println(new String(bChar));
        }
    }
}
