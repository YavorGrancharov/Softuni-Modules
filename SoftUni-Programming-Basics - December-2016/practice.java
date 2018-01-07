import java.util.Scanner;

/**
 * Created by Lalka on 12/17/2016.
 */
public class practice {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        int sum = 0;
        for (int i = 0; i < n; i++) {
            int a = Integer.parseInt(console.nextLine());
            sum = sum + a;
        }
        System.out.println(sum);
    }
}
