import java.util.Scanner;

public class Butterfly {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        for (int i = 0; i < n - 2; i++) {
            String wing = repeatStr("*", n - 2);
            if (i % 2 == 1){
                wing = repeatStr("-", n - 2);
            }
            System.out.println(wing + "\\ /" + wing);
        }
        System.out.println(repeatStr(" ", n -1 ) + "@");

        for (int i = 0; i < n - 2; i++) {
            String wing = repeatStr("*", n - 2);
            if (i % 2== 1){
                wing = repeatStr("-", n - 2);
            }
            System.out.println(wing + "/ \\" + wing);
        }
    }
    static String repeatStr(String str, int count) {
        StringBuilder repeated = new StringBuilder();
        for (int i = 0; i < count; i++) {
            repeated.append(str);
        }
        return repeated.toString();
    }
}
