import java.util.Scanner;

/**
 * Created by Lalka on 12/28/2016.
 */
public class moon {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double weight = Double.parseDouble(console.nextLine());
        double moon = weight * 0.17;
        System.out.println(moon);
    }
}
