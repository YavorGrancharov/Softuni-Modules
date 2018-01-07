import java.util.Scanner;

public class Boolean_Variable {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String bool = console.nextLine();
        Boolean b = Boolean.valueOf(bool);
        if (b) {
            System.out.println("Yes");
        }
        else {
            System.out.println("No");
        }
    }
}
