import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Change_to_Uppercase {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();

        String regex = "(?:\\<[a-zA-Z]+\\>)(.*?)(?:\\<\\/[a-zA-Z]+\\>)";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(line);

        StringBuffer sb = new StringBuffer();
        while (matcher.find()) {
            matcher.appendReplacement(sb, matcher.group(1).toUpperCase());
        }
        matcher.appendTail(sb);
        System.out.println(sb.toString());
    }
}
//Welcome to the <upcase>Software University</upcase>. Learn <upcase>computer programming</upcase> and start a <upcase>job</upcase> in a software company.