import java.util.Scanner;

public class PullUp {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String gender = console.nextLine();
        double body = Double.parseDouble(console.nextLine());
        double height = Double.parseDouble(console.nextLine());
        double deadlift = Double.parseDouble(console.nextLine());
        int reps = Integer.parseInt(console.nextLine());

        double potentialDeadlift = Math.round((1.72 * body) / ((height * 1 / 3) / 100));

        double repsIntensity = 0.0;
        if (reps == 1) {
            repsIntensity = 1;
        } else if (reps == 2) {
            repsIntensity = 0.95;
        } else if (reps == 3) {
            repsIntensity = 0.93;
        } else if (reps == 4) {
            repsIntensity = 0.90;
        } else if (reps == 5) {
            repsIntensity = 0.87;
        }

        double RM = 0.0;
        switch (reps) {
            case 1:
                RM = deadlift / 1;
                break;
            case 2:
                RM = deadlift / 0.95;
                break;
            case 3:
                RM = deadlift / 0.93;
                break;
            case 4:
                RM = deadlift / 0.90;
                break;
            case 5:
                RM = deadlift / 0.87;
                break;
        }

        if (gender.equals("male")) {
            double relPullup = (body * 0.238) - 44.286;
            double coefPullup = (potentialDeadlift / body) / relPullup;
            double firstPullup = Math.abs(Math.floor((RM / body) / coefPullup));
            double secondPullup = Math.abs(Math.ceil((RM / body) / coefPullup));

            if (firstPullup < secondPullup) {
                System.out.println((int)firstPullup + " - " + (int)secondPullup + " reps");
            } else if (firstPullup > secondPullup){
                System.out.println((int)secondPullup + " - " + (int)firstPullup + " reps");
            } else if (firstPullup == secondPullup){
                System.out.println((int)firstPullup + " reps");
            }

            double weightedPullup = 0.0;
            double maxRepsPullup = Double.parseDouble(console.nextLine());
            weightedPullup = Math.round((((((maxRepsPullup / body) / 0.296296) * 139.0804) + body) * repsIntensity) - 139.0804);
            System.out.println(reps + " at " + (int)weightedPullup + "kg");
        }
    }
}
