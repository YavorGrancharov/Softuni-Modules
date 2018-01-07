import java.util.Scanner;

public class Equal_Sums {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();
        String[] arr = line.split("\\s+");
        int[] nums = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            nums[i] = Integer.parseInt(arr[i]);
        }

        int leftSum;
        int rightSum;
        for (int i = 0; i <= nums.length - 1; i++) {
            if (nums.length == 1) {
                System.out.println(0);
                return;
            }
            leftSum = 0;
            for (int left = i; left > 0; left--) {
                int pos = left - 1;
                if (left > 0) {
                    leftSum += nums[pos];
                }
            }
            rightSum = 0;
            for (int right = i; right < nums.length; right++) {
                int pos = right + 1;
                if (right < nums.length - 1) {
                    rightSum += nums[pos];
                }
            }
            if (leftSum == rightSum) {
                System.out.println(i);
                return;
            }
        }
        System.out.println("no");
    }
}
