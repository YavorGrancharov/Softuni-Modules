import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Phonebook_Upgrade {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        String line = console.nextLine();

        Map<String, String> phonebook = new LinkedHashMap<>();

        while (!line.equals("END")) {
            String[] tokens = line.split("\\s");
            if (tokens[0].equals("A")) {
                String name = tokens[1];
                String phone = tokens[2];
                if (!phonebook.containsKey(name)) {
                    phonebook.put(name, phone);
                }
                phonebook.put(name, phone);
            }
            else if (tokens[0].equals("S")) {
                String name = tokens[1];
                if (phonebook.containsKey(name)) {
                    System.out.println(name + " -> " + phonebook.get(name));
                }
                else {
                    System.out.printf("Contact %s does not exist.\n", name);
                }
            }
            if (tokens[0].equals("ListAll")) {
                TreeMap<String,String> upgrade = new TreeMap<>(phonebook);
                for (Map.Entry<String,String> entry : upgrade.entrySet()) {
                    System.out.println(entry.getKey() + " -> " + entry.getValue());
                }
            }
            line = console.nextLine();
        }
    }
}
