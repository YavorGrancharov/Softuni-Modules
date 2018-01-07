import java.util.Arrays;
import java.util.Scanner;

public class Largest_3_Numbers {
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
                if (nums[i] > nums[j]) {
                    int temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                }
            }
        }
        int[] result;
        if (nums.length >= 3) {
            result = Arrays.copyOfRange(nums,0,3);
        }
        else if (nums.length == 2){
            result = Arrays.copyOfRange(nums, 0, 2);
        }
        else {
            result = Arrays.copyOfRange(nums,0,1);
        }
        System.out.println(Arrays.toString(result));
    }
}
