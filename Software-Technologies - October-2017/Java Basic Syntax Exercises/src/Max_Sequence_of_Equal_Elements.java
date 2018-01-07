import java.util.Scanner;

public class Max_Sequence_of_Equal_Elements {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();
        String[] arr = line.split("\\s+");
        int[] nums = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            nums[i] = Integer.parseInt(arr[i]);
        }

        int res = 0;
        int count = 1;
        int maxCount = 1;

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                count++;
                if (count > maxCount) {
                    maxCount = count;
                    res = nums[i];
                }
            }
            else {
                count = 1;
            }
            if (maxCount == 1) {
                res = nums[0];
            }

        }
        for (int i = 0; i < maxCount; i++) {
            System.out.print(res + " ");
        }
    }
}
