import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Most_Frequent_Number {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();
        String[] arr = line.split("\\s+");
        int[] nums = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            nums[i] = Integer.parseInt(arr[i]);
        }

        int count = 0;
        int maxCount = 0;
        int num = 0;
        for (int i = 0; i < nums.length; i++) {
            count = 0;
            for (int j = 0; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                }
            }
            if (count > maxCount) {
                maxCount = count;
                num = nums[i];
            }
        }
        System.out.println(num);
    }
}
