import java.util.Scanner;

/**
 * Created by Lalka on 12/17/2016.
 */
public class practice2 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int a = Integer.parseInt(console.nextLine());
        int b = Integer.parseInt(console.nextLine());
        int c = Integer.parseInt(console.nextLine());
        if (a < b && a < c) {
            System.out.print(a);
        } else if (a > b && a < c){
            System.out.print(b);
        } else if (b > c) {
            System.out.print(c);
        }
    }
}
