import java.util.Scanner;

public class TravelingAtLightSpeed {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        double lightYears = Double.parseDouble(console.nextLine());

        double lightYearKm = 9450000000000d;
        double lightSpeedSec = 300000;

        int secondsAll = (int)((lightYears * lightYearKm) / lightSpeedSec);
        int minutes = secondsAll / 60;
        secondsAll %= 60;
        int hours = (minutes / 60);
        minutes %= 60;
        int days = hours / 24;
        hours %= 24;
        int weeks = days / 7;
        days %= 7;

        System.out.println(weeks + " weeks");
        System.out.println(days + " days");
        System.out.println(hours + " hours");
        System.out.println(minutes + " minutes");
        System.out.println(secondsAll + " seconds");
    }
}
