import java.util.Scanner;

public class Max_Sequence_of_Increasing_Elements {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();
        String[] arr = line.split("\\s+");
        int[] nums = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            nums[i] = Integer.parseInt(arr[i]);
        }

        int startCount = 0;
        int maxCount = 0;
        int currentPos = 0;
        int startPos = 0;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i - 1] >= 1) {
                currentPos++;
                startPos = i - currentPos;
                if (currentPos > maxCount) {
                    maxCount = currentPos;
                    startCount = startPos;
                }
            }
            else {
                currentPos = 0;
            }
        }
        for (int i = startCount; i <= (startCount + maxCount); i++) {
            System.out.print(nums[i] + " ");
        }
        System.out.println();
    }
}
