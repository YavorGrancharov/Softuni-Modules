import java.util.Scanner;

public class DeadliftIndex {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String gender = console.nextLine();
        double height = Double.parseDouble(console.nextLine());
        double body = Double.parseDouble(console.nextLine());
        double deadLift = Double.parseDouble(console.nextLine());
        int reps = Integer.parseInt(console.nextLine());
        double round = Double.parseDouble(console.nextLine());

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
                RM = deadLift / 1;
                break;
            case 2:
                RM = deadLift / 0.95;
                break;
            case 3:
                RM = deadLift / 0.93;
                break;
            case 4:
                RM = deadLift / 0.90;
                break;
            case 5:
                RM = deadLift / 0.87;
                break;
        }

        double workPerBody = 0.0;
        if (gender.equals("male")) {
            workPerBody = ((((height * 1 / 3) / 100) * RM) / body);
            System.out.printf("Index - " + "%.2f", workPerBody);
        } else if (gender.equals("female")) {
            workPerBody = (((((height * 1 / 3) / 100) * RM) / body) / 0.88);
            System.out.printf("Index - " + "%.2f", workPerBody);
        }

        if (workPerBody < 0.47) {
            System.out.println(", extremely weak");
        } else if (workPerBody >= 0.47 && workPerBody < 0.72) {
            System.out.println(", very weak");
        } else if (workPerBody >= 0.72 && workPerBody < 0.97) {
            System.out.println(", weak");
        } else if (workPerBody >= 0.97 && workPerBody < 1.22) {
            System.out.println(", fit");
        } else if (workPerBody >= 1.22 && workPerBody < 1.47) {
            System.out.println(", strong");
        } else if (workPerBody >= 1.47 && workPerBody < 1.72) {
            System.out.println(", very strong");
        } else if (workPerBody >= 1.72) {
            System.out.println(", extremely strong");
        }

        double levelsM = 0.0;
        if (gender.equals("male")) {
            if (workPerBody < 0.47) {
                levelsM = (((0.47 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve very weak, perform " + reps + " at " + Math.round(levelsM / round) * round + " kg");
            } else if (workPerBody >= 0.47 && workPerBody < 0.72) {
                levelsM = (((0.72 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve weak, perform " + reps + " at " + Math.round(levelsM / round) * round + " kg");
            } else if (workPerBody >= 0.72 && workPerBody < 0.97) {
                levelsM = (((0.97 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve fit, perform " + reps + " at " + Math.round(levelsM / round) * round + " kg");
            } else if (workPerBody >= 0.97 && workPerBody < 1.22) {
                levelsM = (((1.22 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve strong, perform " + reps + " at " + Math.round(levelsM / round) * round + " kg");
            } else if (workPerBody >= 1.22 && workPerBody < 1.47) {
                levelsM = (((1.47 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve very strong, perform " + reps + " at " + Math.round(levelsM / round) * round + " kg");
            } else if (workPerBody >= 1.47 && workPerBody < 1.72) {
                levelsM = (((1.72 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve extremely strong, perform " + reps + " at " + Math.round(levelsM / round) * round + " kg");
            } else if (workPerBody >= 1.72) {
                System.out.println("Max level achieved");
            }
        }

        double levelsF = 0.0;
        if (gender.equals("female")) {
            if (workPerBody < 0.47) {
                levelsF = (((0.4136 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve very weak, perform " + reps + " at " + Math.round(levelsF / round) * round + " kg");
            } else if (workPerBody >= 0.47 && workPerBody < 0.72) {
                levelsF = (((0.6336 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve weak, perform " + reps + " at " + Math.round(levelsF / round) * round + " kg");
            } else if (workPerBody >= 0.72 && workPerBody < 0.97) {
                levelsF = (((0.8536 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve fit, perform " + reps + " at " + Math.round(levelsF / round) * round + " kg");
            } else if (workPerBody >= 0.97 && workPerBody < 1.22) {
                levelsF = (((1.0736 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve strong, perform " + reps + " at " + Math.round(levelsF / round) * round + " kg");
            } else if (workPerBody >= 1.22 && workPerBody < 1.47) {
                levelsF = (((1.2936 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve very strong, perform " + reps + " at " + Math.round(levelsF / round) * round + " kg");
            } else if (workPerBody >= 1.47 && workPerBody < 1.72) {
                levelsF = (((1.5136 * body) / ((height * 1 / 3) / 100)) * repsIntensity);
                System.out.println("To achieve extremely strong, perform " + reps + " at " + Math.round(levelsF / round) * round + " kg");
            } else if (workPerBody >= 1.72) {
                System.out.println("Max level achieved");
            }
        }
        System.out.printf("1RM is - " +  Math.round(RM / round) * round);
    }
}
