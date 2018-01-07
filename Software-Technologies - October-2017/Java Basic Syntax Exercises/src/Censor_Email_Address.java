import com.sun.deploy.util.StringUtils;

import java.util.Scanner;

public class Censor_Email_Address {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();
        String text = console.nextLine();
        String[] arr = line.split("\\@");
        String name = arr[0];

        if (text.contains(line)) {
            String censored = line.replace(name, "*");
            text = text.replaceAll(line,censored);
        }
        System.out.println(text);
    }
}
