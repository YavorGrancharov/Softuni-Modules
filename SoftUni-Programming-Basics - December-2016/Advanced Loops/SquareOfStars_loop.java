import java.util.Scanner;

public class SquareOfStars_loop {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print("*" + " ");
            }
            System.out.println();
        }
    }
    //static String repeatStr(String str, int count) {
    //    StringBuilder repeated = new StringBuilder();
    //    for (int i = 0; i < count; i++) {
    //        repeated.append(str);
    //    }
    //    return repeated.toString();
    //}
}