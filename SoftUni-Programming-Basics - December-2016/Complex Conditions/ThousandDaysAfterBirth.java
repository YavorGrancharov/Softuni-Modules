import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

/**
 * Created by Lalka on 12/13/2016.
 */
public class ThousandDaysAfterBirth {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String birth = console.nextLine();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        LocalDate date = LocalDate.parse(birth, formatter);
        date = date.plusDays(999);
        System.out.println(formatter.format(date));
    }
}
