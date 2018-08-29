import java.text.DecimalFormat;
import java.util.Scanner;

public class OddEvenPosition {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        DecimalFormat df = new DecimalFormat("#.##");

        double EvenSum = 0;
        double OddSum = 0;
        double OddMin = 1000000000.0;
        double OddMax = -1000000000.0;
        double EvenMin = 1000000000.0;
        double EvenMax = -1000000000.0;

        int n = Integer.parseInt(scan.nextLine());

        for (int i = 1; i <= n ; i++) {

            double num = Double.parseDouble(scan.nextLine());

            if (i % 2 == 0) {
                EvenSum += num;

                if (num > EvenMax) {
                    EvenMax = num;
                }
                if (num < EvenMin) {
                    EvenMin = num;
                }
            } else {
                OddSum += num;

                if ( num > OddMax) {
                    OddMax = num;
                }
                if ( num < OddMin) {
                    OddMin = num ;
                }
            }
        }
        if (n == 0) {
            System.out.println("OddSum = " + df.format(OddSum));
            System.out.println("OddMin = No");
            System.out.println("OddMax = No");
            System.out.println("EvenSum = " + df.format(EvenSum));
            System.out.println("EvenMin = No");
            System.out.println("EvenMax = No");
        } else if ( (EvenMin == 1000000000.0) || (EvenMax == -1000000000.0) ) {
            System.out.println("OddSum = " + df.format(OddSum));
            System.out.println("OddMin = " + df.format(OddMin));
            System.out.println("OddMax = " + df.format(OddMax));
            System.out.println("EvenSum = " + df.format(EvenSum));
            System.out.println("EvenMin = No");
            System.out.println("EvenMax = No");
        } else {
            System.out.println("OddSum = " + df.format(OddSum));
            System.out.println("OddMin = " + df.format(OddMin));
            System.out.println("OddMax = " + df.format(OddMax));
            System.out.println("EvenSum = " + df.format(EvenSum));
            System.out.println("EvenMin = " + df.format(EvenMin));
            System.out.println("EvenMax = " + df.format(EvenMax));
        }
    }
}