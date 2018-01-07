import java.util.Scanner;

public class Firm {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int hourNeeded = Integer.parseInt(console.nextLine());
        int daysAvailable = Integer.parseInt(console.nextLine());
        int emplyeeOvertime = Integer.parseInt(console.nextLine());

        double qualification = (daysAvailable - (daysAvailable * 0.10)) * 8;
        double workOvertime = emplyeeOvertime * (daysAvailable * 2);
        double sumHours = Math.floor(qualification + workOvertime);

        if (sumHours > hourNeeded) {
            System.out.println("Yes!" + (int)(sumHours - hourNeeded) + " hours left.");
        } else {
            System.out.println("Not enough time!" + (int)(hourNeeded - sumHours) + " hours needed.");
        }
    }
}
