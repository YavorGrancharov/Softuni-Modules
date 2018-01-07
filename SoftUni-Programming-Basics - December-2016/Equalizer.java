import java.util.Scanner;

public class Equalizer {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String gender = console.nextLine();
        double height = Double.parseDouble(console.nextLine());
        double body = Double.parseDouble(console.nextLine());
        double deadlift = Double.parseDouble(console.nextLine());
        int reps = Integer.parseInt(console.nextLine());
        double squat = Double.parseDouble(console.nextLine());
        reps = Integer.parseInt(console.nextLine());
        double opress = Double.parseDouble(console.nextLine());
        reps = Integer.parseInt(console.nextLine());
        double dip = Double.parseDouble(console.nextLine());
        reps = Integer.parseInt(console.nextLine());
        double pullup = Double.parseDouble(console.nextLine());
        reps = Integer.parseInt(console.nextLine());

        double potentialDeadlift = 0.0;
        if (gender.equals("male")) {
            potentialDeadlift = Math.round((1.72 * body) / ((height * 1 / 3) / 100));
        } else if (gender.equals("female")) {
            potentialDeadlift = Math.round((1.52 * body) / ((height * 1 / 3) / 100));
        }

        double repsIntensity = 0.0;
        switch (reps) {
            case 1:
                repsIntensity = 1;
                break;
            case 2:
                repsIntensity = 0.95;
                break;
            case 3:
                repsIntensity = 0.93;
                break;
            case 4:
                repsIntensity = 0.90;
                break;
            case 5:
                repsIntensity = 0.87;
                break;
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

        double rmDeadlift = deadlift / repsIntensity;
        double relSquat = (squat / repsIntensity) / 0.8;
        double relOPress = (opress / repsIntensity) / 0.4;
        double relDip = ((dip + body) / repsIntensity) / 0.75;
        double relPullup = ((pullup + body) / repsIntensity) / 0.65;

        double relDeadlift = 0.0;
        for (double i = 0.0; i <= rmDeadlift; ++i) {
            if (relSquat <= rmDeadlift && relSquat >= relOPress && relSquat >= relDip && relSquat >= relPullup) {
                relDeadlift = rmDeadlift;
            } else if (relSquat > rmDeadlift && relSquat >= relOPress && relSquat >= relDip && relSquat >= relPullup) {
                relDeadlift = relSquat;
            }
            if (relOPress <= rmDeadlift && relOPress >= relSquat && relOPress >= relDip && relOPress >= relPullup) {
                relDeadlift = rmDeadlift;
            } else if (relOPress > rmDeadlift && relOPress >= relSquat && relOPress >= relDip && relOPress >= relPullup) {
                relDeadlift = relOPress;
            }
            if (relDip <= rmDeadlift && relDip >= relSquat && relDip >= relOPress && relDip >= relPullup) {
                relDeadlift = rmDeadlift;
            } else if (relDip > rmDeadlift && relDip >= relSquat && relDip >= relOPress && relDip >= relPullup) {
                relDeadlift = relDip;
            }
            if (relPullup <= rmDeadlift && relPullup >= relSquat && relPullup >= relOPress && relPullup >= relDip) {
                relDeadlift = rmDeadlift;
            } else if (relPullup > rmDeadlift && relPullup >= relSquat && relPullup >= relOPress && relPullup >= relDip) {
                relDeadlift = relPullup;
            }
        }

        System.out.printf("Deadlift - " + reps + " at " + "%.1f\n", relDeadlift * repsIntensity);

        if (relDeadlift * 0.8 > squat / repsIntensity) {
            double squat2 = relDeadlift * 0.8;
            System.out.printf("Squat - " + reps + " at " + "%.1f\n", squat2 * repsIntensity);
        } else {
            System.out.printf("Squat - " + reps + " at " + "%.1f\n", squat * repsIntensity);
        }
        if (relDeadlift * 0.4 > opress / repsIntensity) {
            double opress2 = relDeadlift * 0.4;
            System.out.printf("Overhead Press - " + reps + " at " + "%.1f\n", opress2 * repsIntensity);
        } else {
            System.out.printf("Overhead Press - " + reps + " at " + "%.1f\n", opress * repsIntensity);
        }
        if (relDeadlift * 0.75 > dip + body / repsIntensity) {
            double dip2 = (relDeadlift * 0.75);
            System.out.printf("Dip - " + reps + " at " + "%.1f\n", dip2 * repsIntensity - body);
        } else {
            System.out.printf("Dip - " + reps + " at " + "%.1f\n", dip * repsIntensity - body);
        }
    }
}

