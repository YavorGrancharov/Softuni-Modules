import java.util.Scanner;

/**
 * Created by Lalka on 12/15/2016.
 */
public class SumSeconds {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int a = Integer.parseInt(console.nextLine());
        int b = Integer.parseInt(console.nextLine());
        int c = Integer.parseInt(console.nextLine());
        int min = (a + b + c) / 60;
        int sec = (a + b + c) % 60;
        if (sec < 10) {
            System.out.println(min + ":" + "0" + sec);
        }else {
            System.out.println(min + ":" + sec);
        }
    }
}
