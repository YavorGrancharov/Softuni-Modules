import java.util.Scanner;

public class Hospital {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());

        int doctors = 7;
        int treatedPatients = 0;
        int untreatedPatients = 0;

        for (int i = 1; i <= n; i++) {
            int currentPatients = Integer.parseInt(console.nextLine());
            if ((i % 3 == 0) && (untreatedPatients > treatedPatients)) {
                doctors++;
            }
            if (currentPatients > doctors) {
                treatedPatients += doctors;
                untreatedPatients += currentPatients - doctors;
            } else {
                treatedPatients += currentPatients;
            }
        }
        System.out.println("Treated patients: " + treatedPatients + ".");
        System.out.println("Untreated patients: " + untreatedPatients + ".");
    }
}
