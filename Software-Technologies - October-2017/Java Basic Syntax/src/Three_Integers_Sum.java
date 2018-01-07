import java.util.Scanner;

public class Three_Integers_Sum {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();
        String[] arr = line.split("\\s+");
        int[] nums = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            nums[i] = Integer.parseInt(arr[i]);
        }

        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                if (nums[i] < nums[j]) {
                    int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }

        int sum;
        boolean contains = false;
        for (int i = 0; i < nums.length; i++) {
            int first = nums[i];
            for (int j = i + 1; j < nums.length; j++) {
                int second = nums[j];
                sum = first + second;
                for (int num : nums) {
                    if (num == sum) {
                        System.out.printf("%d + %d = %d", first, second, sum);
                        contains = true;
                        break;
                    }
                }
            }
        }
        if (!contains) {
            System.out.println("No");
        }
    }
}