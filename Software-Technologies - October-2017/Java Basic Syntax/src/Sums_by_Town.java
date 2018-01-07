import java.util.*;

public class Sums_by_Town {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        Map<String, Double> map = new HashMap<>();

        int n = Integer.parseInt(console.nextLine());
        for (int i = 0; i < n; i++) {
            String line = console.nextLine();
            String[] tokens = line.split("\\s+\\|\\s+");
            String town = tokens[0];
            double income = Double.parseDouble(tokens[1]);

            if (map.containsKey(town)) {
                map.put(town,income + map.get(town));
            }
            else {
                map.put(town,income);
            }
        }

        Map<String, Double> tree = new TreeMap<>(map);

        for (String key : tree.keySet()) {
            System.out.println(key + " -> " + tree.get(key));
        }
    }
}
