import java.util.Scanner;

public class Distance {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int firstSpeed = Integer.parseInt(console.nextLine());
        int firstTime = Integer.parseInt(console.nextLine());
        int secondTime = Integer.parseInt(console.nextLine());
        int thirdTime = Integer.parseInt(console.nextLine());

        double first = firstTime / 60.0;
        double second = secondTime / 60.0;
        double third = thirdTime / 60.0;

        double secondSpeed = firstSpeed + (firstSpeed * 0.10);
        double thirdSpeed = secondSpeed - (secondSpeed * 0.05);

        double firstDistance = firstSpeed * first;
        double secondDistance = secondSpeed * second;
        double thirdDistance = thirdSpeed * third;

        double distance = firstDistance + secondDistance + thirdDistance;

        System.out.printf("%.2f", distance);
    }
}
