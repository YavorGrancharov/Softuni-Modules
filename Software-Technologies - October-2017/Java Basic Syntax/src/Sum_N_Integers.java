import java.util.Scanner;

public class Sum_N_Integers {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int n = Integer.parseInt(console.nextLine());

        int sum = 0;
        for (int i = 0; i < n; i++) {
            int num = Integer.parseInt(console.nextLine());
            sum += num;
        }
        System.out.printf("Sum = %d",sum);
    }
}
