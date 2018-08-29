import java.util.Scanner;

/**
 * Created by Lalka on 12/17/2016.
 */
public class Money {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int bitcoin = Integer.parseInt(console.nextLine());
        double yuan = Double.parseDouble(console.nextLine());
        double commission = Double.parseDouble(console.nextLine());
        double sum = (bitcoin * 598.97435897) + (yuan * 0.1353846);
        double sum2 = sum - (sum * commission / 100);
        System.out.println(sum2);
    }
}
