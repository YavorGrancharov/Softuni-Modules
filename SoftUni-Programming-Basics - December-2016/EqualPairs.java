import java.util.Scanner;

public class EqualPairs {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        double firstPairSum = 0.0;
        double secondPairSum = 0.0;
        double diff = 0.0;
        double bigDiff = 0.0;

        for (int i = 0; i < n; i++) {
            double firstNum = Double.parseDouble(console.nextLine());
            double secondNum = Double.parseDouble(console.nextLine());

            if (i == 0) {
                firstPairSum = firstNum + secondNum;
            } else {
                secondPairSum = firstNum + secondNum;
                diff = Math.abs(secondPairSum - firstPairSum);
                if (diff > bigDiff) {
                    bigDiff = diff;
                }
                firstPairSum = secondPairSum;
            }
        }
        if (bigDiff == 0) {
            System.out.println("Yes, value = " + firstPairSum);
        } else {
            System.out.println("No, maxdiff = " + bigDiff);
        }
    }
}
