import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Symmetric_Numbers {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int n = console.nextInt();
        List<Integer> symmetric = new ArrayList<Integer>();

        int current, reminder, reversed = 0;
        for (int i = 1; i <= n; i++) {
            current = i;
            while (current > 0) {
                reminder = current % 10;
                reversed = reversed * 10 + reminder;
                current = current / 10;
            }
            if (reversed == i) {
                symmetric.add(i);
            }
            reversed = 0;
        }
        System.out.println(Arrays.toString(symmetric.toArray()));
    }
}
