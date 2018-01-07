import com.sun.org.apache.xalan.internal.xsltc.dom.SimpleResultTreeImpl;

import java.util.Scanner;

/**
 * Created by Lalka on 12/23/2016.
 */
public class EqualWords {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String one = console.nextLine().toLowerCase();
        String two = console.nextLine().toLowerCase();

        if (one.equals(two)) {
            System.out.println("yes");
        } else {
            System.out.println("no");
        }
    }
}
