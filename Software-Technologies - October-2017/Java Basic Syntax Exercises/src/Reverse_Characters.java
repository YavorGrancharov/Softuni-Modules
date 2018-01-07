import java.util.*;

public class Reverse_Characters {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        List<String> lettersRev = new ArrayList<>(3);
        for (int i = 0; i < 3; i++) {
            String letter = console.nextLine();
            lettersRev.add(letter);
        }
        Collections.reverse(lettersRev);
        String res = String.join("",lettersRev);
        System.out.println(res);
    }
}
