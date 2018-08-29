import com.sun.java.swing.plaf.windows.WindowsInternalFrameTitlePane;

import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class USDtoBGN {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double usd = Double.parseDouble(console.nextLine());
        double bgn = usd * 1.79549;
        System.out.printf("USD = %.2f " + "BGN", bgn);
    }
}
