import java.util.Scanner;

public class OddEvenSum {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        int even = 0;
        int odd = 0;

        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(console.nextLine());
            if (i % 2 == 0) {
                even += num;
            } else {
                odd += num;
            }
        }
        if (even == odd) {
            System.out.println("Yes");
            System.out.println("Sum = " + even);
        } else {
            System.out.println("No");
            System.out.println("Diff = " + Math.abs(even - odd));
        }
    }
}
