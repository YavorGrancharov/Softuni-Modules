import java.util.Scanner;

public class InvalidNumber {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int num = Integer.parseInt(console.nextLine());

        if (num == 0 || num >= 100 && num <= 200) {
            System.out.println();
        } else {
            System.out.println("invalid");
        }
    }
}
