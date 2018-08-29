import java.util.Scanner;

public class FromTerabytesToBits {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double n = Double.parseDouble(console.nextLine());

        double TB = (Math.pow(1024, 4) * 8) / 1000000000000d;
        double result = n * TB;
        String result2 = Double.toString(result);
        result2 = result2.replaceAll("[\\s.]", "");

        if (result2.length() <= 15) {
            System.out.println(result2);
        }
        else {
            System.out.println(result2 + '0');
        }
    }
}
