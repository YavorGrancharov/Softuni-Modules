import java.util.ArrayList;
import java.util.Scanner;

public class Bomb_Numbers {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();
        String[] arr = line.split("\\s+");
        ArrayList<Integer> nums = new ArrayList<Integer>(arr.length);

        for (int i = 0; i < arr.length; i++) {
            nums.add(Integer.parseInt(arr[i]));
        }

        String line2 = console.nextLine();
        String[] arr2 = line2.split("\\s+");
        ArrayList<Integer> nums2 = new ArrayList<Integer>(arr2.length);

        for (int i = 0; i < arr2.length; i++) {
            nums2.add(Integer.parseInt(arr2[i]));
        }

        int num = nums2.get(0);
        int power = nums2.get(1);

        int index = 0;
        int start = 0;
        int end = 0;
        int sum = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums.get(i) == num) {
                index = i;
                start = index - power;
                end = index + power;
                if (end > nums.size() - 1) {
                    end = nums.size() - 1;
                }
                if (start < 0) {
                    start = 0;
                }
                nums.remove(nums.get(i));
                nums.subList(start,end).clear();
                i = 0;
            }
        }
        for (int i = 0; i < nums.size(); i++) {
            sum += nums.get(i);
        }
        System.out.println(sum);
    }
}
