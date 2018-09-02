import java.util.Scanner;

public class ExamTask6 {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int start = Integer.parseInt(console.nextLine());
        int end = Integer.parseInt(console.nextLine());
        int magic = Integer.parseInt(console.nextLine());

        int count = 0;
        boolean found = false;

        for (int i = start; i <= end; i++) {
            for (int j = start; j <= end ; j++) {
                count++;
                if (i + j == magic) {
                    found = true;
                    System.out.println("Combination N: " + count + "(" + i + " + " + j + " = " + magic + ")");
                    //return;
                }
            }
        }
        //if (found == false) {
        //    System.out.println(count + " combinations - neither equals " + magic);
        //}
    }
}
