import java.util.Scanner;

/**
 * Created by Lalka on 12/23/2016.
 */
public class TimePlus15Minutes {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int hour = Integer.parseInt(console.nextLine());
        int min = Integer.parseInt(console.nextLine());
        min = min + 15;

        if (min > 59) {
            hour = hour + 1;
            min = min - 60;
        }

        if (hour > 23) {
            hour = 0;
        }

        if (min < 10) {
            System.out.println(hour + ":" + '0' + min);
        } else {

            System.out.println(hour + ":" + min);
        }
    }
}
