import java.util.Scanner;

public class ExamOnTime {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int hourExam = Integer.parseInt(console.nextLine());
        int minuteExam = Integer.parseInt(console.nextLine());
        int hourArrive = Integer.parseInt(console.nextLine());
        int minuteArrive = Integer.parseInt(console.nextLine());

        int timeExam = (hourExam * 60) + minuteExam;
        int timeArrive = (hourArrive * 60) + minuteArrive;
        int late = timeArrive - timeExam;
        int early = timeExam - timeArrive;

        if (late <= 59 && late > 0) {
            System.out.println("Late");
            System.out.println(late + " minutes after the start");
        } else if (late >= 60) {
            int hour = late / 60;
            int minutes = late % 60;
            System.out.println("Late");
            System.out.printf("%d:%02d" + " hours after the start", hour, minutes);
        } else if (early == 0) {
            System.out.println("On time");
        } else if (early <= 30 && early > 0) {
            System.out.println("On time");
            System.out.println(early + " minutes before the start");
        } else if (early > 30 && early < 60) {
            System.out.println("Early");
            System.out.println(early + " minutes before the start");
        } else if (early >= 60) {
            int hour = early / 60;
            int minutes = early % 60;
            System.out.println("Early");
            System.out.printf("%d:%02d" + " hours before the start", hour, minutes);
        }
    }
}
