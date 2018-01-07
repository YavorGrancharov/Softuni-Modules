import java.util.Scanner;

public class Variable_in_Hex_Format {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String hex = console.nextLine();
        int res = Integer.parseInt(hex,16);
        System.out.println(res);
    }
}
