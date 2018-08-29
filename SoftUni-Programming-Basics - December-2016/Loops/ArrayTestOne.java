import java.util.Arrays;

public class ArrayTestOne {
    public static void main(String[] args) {
        int[] array = new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        for (int index = 0; index < array.length; index++) {
            array[index] = 5 * array[index];
        }
        System.out.println(Arrays.toString(array));
    }
}
