import java.util.Scanner;

public class LettersCombinations {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String firstLetter = console.nextLine();
        String secondLetter = console.nextLine();
        String forbiddenLetter = console.nextLine();
        char first = firstLetter.charAt(0);
        char second = secondLetter.charAt(0);
        char forbidden = forbiddenLetter.charAt(0);
        int count = 0;

        for (char i = first; i <= second; i++) {
            for (char k = first; k <= second; k++) {
                for (char l = first; l <= second; l++) {
                    if(i != forbidden && k != forbidden && l != forbidden) {
                        System.out.printf("%s%s%s", i, k, l + " ");
                        count++;
                    }
                }
            }
        }
        System.out.print(count);
    }
}
