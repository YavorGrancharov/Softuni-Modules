import java.util.Scanner;

public class Sum_Two_Numbers {
    public static void main (String[] args) {
        Scanner console = new Scanner(System.in);

        double num1 = Double.parseDouble(console.nextLine());
        double num2 = Double.parseDouble(console.nextLine());

        double result = num1 + num2;
        System.out.println(result);
    }
}
