import java.util.Scanner;

public class JavaLbmFormula {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String gender = console.nextLine();
        double height = Double.parseDouble(console.nextLine());
        double wrist = Double.parseDouble(console.nextLine());
        double ankle = Double.parseDouble(console.nextLine());
        double targetBodyfat = Double.parseDouble(console.nextLine());

        if (gender.equals("male")) {
            double relativeLbm = (height * 0.973) - 99.515;
            double relativeWrist = (height * 0.048) + 7.954;
            double relativeAnkle = (height * 0.059) + 12.181;
            double wristLbm = Math.round(Math.cbrt((((Math.pow(wrist, 2)) - (Math.pow(relativeWrist, 2))) / (Math.pow(wrist, 2))) * (Math.pow(relativeLbm, 3)) + (Math.pow(relativeLbm, 3))));
            double ankleLbm = Math.round(Math.cbrt((((Math.pow(ankle, 2)) - (Math.pow(relativeAnkle, 2))) / (Math.pow(ankle, 2))) * (Math.pow(relativeLbm, 3)) + (Math.pow(relativeLbm, 3))));
            double bodyWrist = Math.round(((wristLbm * targetBodyfat) / 100) + wristLbm);
            double bodyAnkle = Math.round(((ankleLbm * targetBodyfat) / 100) + ankleLbm);

            if (wristLbm < ankleLbm && ankle != 0 && wrist != 0) {
                System.out.println("Ideal LBM is in range of " + (int)wristLbm + " - " + (int)ankleLbm + "kg.");
                System.out.println("BW at a desired body fat is in range of " + (int)bodyWrist + " - " + (int)bodyAnkle + "kg");
            } else if (ankleLbm < wristLbm && ankle != 0 && wrist != 0) {
                System.out.println("Ideal LBM is in range of " + (int)ankleLbm + " - " + (int)wristLbm + "kg.");
                System.out.println("BW at a desired body fat is in range of " + (int)bodyAnkle + " - " + (int)bodyWrist + "kg");
            } else if (wristLbm == ankleLbm && wrist != 0 && ankle != 0) {
                System.out.println("Ideal LBM is " + (int)wristLbm + "kg");
                System.out.println("BW at a desired body fat is " + (int)bodyWrist + "kg");
            } else if (ankle == 0 && wrist != 0) {
                System.out.println("Ideal LBM is " + (int)wristLbm + "kg");
                System.out.println("BW at a desired body fat is " + (int)bodyWrist + "kg");
            } else if (wrist == 0 && ankle != 0) {
                System.out.println("Ideal LBM is " + (int)ankleLbm + "kg");
                System.out.println("BW at a desired body fat is " + (int)bodyAnkle + "kg");
            } else {
                double relativeFat = Math.round(((relativeLbm * targetBodyfat) / 100) + relativeLbm);
                System.out.println("Ideal LBM is " + (int)relativeLbm + "kg");
                System.out.println("BW at a desired body fat is " + (int)relativeFat + "kg");
            }
        }

        if (gender.equals("female")) {
            double relativeLbm = (height * 0.861) - 91.556;
            double relativeWrist = (height * 0.043) + 7.22;
            double relativeAnkle = (height * 0.083) + 5.667;
            double wristLbm = Math.round(Math.cbrt((((Math.pow(wrist, 2)) - (Math.pow(relativeWrist, 2))) / (Math.pow(wrist, 2))) * (Math.pow(relativeLbm, 3)) + (Math.pow(relativeLbm, 3))));
            double ankleLbm = Math. round(Math.cbrt((((Math.pow(ankle, 2)) - (Math.pow(relativeAnkle, 2))) / (Math.pow(ankle, 2))) * (Math.pow(relativeLbm, 3)) + (Math.pow(relativeLbm, 3))));
            double bodyWrist = Math.round(((wristLbm * targetBodyfat) / 100) + wristLbm);
            double bodyAnkle = Math.round(((ankleLbm * targetBodyfat) / 100) + ankleLbm);

            if (wristLbm < ankleLbm && ankle != 0 && wrist != 0) {
                System.out.println("Ideal LBM is in range of " + (int)wristLbm + " - " + (int)ankleLbm + "kg.");
                System.out.println("BW at a desired body fat is in range of " + (int)bodyWrist + " - " + (int)bodyAnkle + "kg");
            } else if (ankleLbm < wristLbm && ankle != 0 && wrist != 0) {
                System.out.println("Ideal LBM is in range of " + (int)ankleLbm + " - " + (int)wristLbm + "kg.");
                System.out.println("BW at a desired body fat is in range of " + (int)bodyAnkle + " - " + (int)bodyWrist + "kg");
            } else if (wristLbm == ankleLbm && wrist != 0 && ankle != 0) {
                System.out.println("Ideal LBM is " + (int)wristLbm + "kg");
                System.out.println("BW at a desired body fat is " + (int)bodyWrist + "kg");
            } else if (ankle == 0 && wrist != 0) {
                System.out.println("Ideal LBM is " + (int)wristLbm + "kg");
                System.out.println("BW at a desired body fat is " + (int)bodyWrist + "kg");
            } else if (wrist == 0 && ankle != 0) {
                System.out.println("Ideal LBM is " + (int)ankleLbm + "kg");
                System.out.println("BW at a desired body fat is " + (int)bodyAnkle + "kg");
            } else {
                double relativeFat = Math.round(((relativeLbm * targetBodyfat) / 100) + relativeLbm);
                System.out.println("Ideal LBM is " + (int)relativeLbm + "kg");
                System.out.println("BW at a desired body fat is " + (int)relativeFat + "kg");
            }
        }
    }
}
