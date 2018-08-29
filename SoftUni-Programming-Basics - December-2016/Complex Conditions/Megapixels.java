import java.text.DecimalFormat;
import java.util.Scanner;

public class Megapixels {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int width = Integer.parseInt(console.nextLine());
        int height = Integer.parseInt(console.nextLine());

        double MP = (double) Math.round(width * height) / 1000000;
        DecimalFormat format = new DecimalFormat("0.#");

        if (width >= 1 && width <= 20000 && height >= 1 && height <= 20000) {
            System.out.println(width + "x" + height + " => " + (format.format(MP)) + "MP");
        }
    }
}
