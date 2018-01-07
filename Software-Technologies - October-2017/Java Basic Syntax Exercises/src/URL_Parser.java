import jdk.nashorn.internal.runtime.regexp.joni.Regex;

import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class URL_Parser {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();

        Pattern pattern = Pattern.compile("\\b([a-z]+)(?:\\:\\/\\/)([a-zA-Z]+\\.[a-zA-Z]+\\.[a-zA-Z]+)(?:\\/)(.+)\\b");
        Matcher matcher = pattern.matcher(line);

        String protocol = "";
        String server = "";
        String resource = "";
        while (matcher.find()) {
            protocol = matcher.group(1);
            server = matcher.group(2);
            resource = matcher.group(3);
        }
        System.out.printf("[protocol] = \"%s\"\n",protocol);
        System.out.printf("[server] = \"%s\"\n",server);
        System.out.printf("[resource] = \"%s\"\n",resource);
    }
}
