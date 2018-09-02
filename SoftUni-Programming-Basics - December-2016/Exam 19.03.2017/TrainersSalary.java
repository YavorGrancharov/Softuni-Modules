import java.util.Scanner;

public class ExamTask4 {
    public static void main(String args[]) {
        Scanner console = new Scanner(System.in);
        
        int lectures = Integer.parseInt(console.nextLine());
        double budget = Double.parseDouble(console.nextLine());
        double salary = budget / lectures;

        double jelevSalary = 0.0;
        double royalSalary = 0.0;
        double roliSalary = 0.0;
        double trofonSalary = 0.0;
        double sinoSalary = 0.0;
        double others = 0.0;
        
        for (int i = 0; i < lectures; i++) {
            
            String lecturer = scanner.nextLine();
            
            switch (lecturer)
                {
                    case "Jelev":
                        jelevSalary++;
                        break;
                    case "RoYaL":
                        royalSalary++;
                        break;
                    case "Roli":
                        roliSalary++;
                        break;
                    case "Trofon":
                        trofonSalary++;
                        break;
                    case "Sino":
                        sinoSalary++;
                        break;
                    default:
                        others++;
                        break;
                }
        }

        System.out.printf("Jelev salary: %.2f lv%n", jelevSalary * salary);
        System.out.printf("RoYaL salary: %.2f lv%n", royalSalary * salary);
        System.out.printf("Roli salary: %.2f lv%n", roliSalary * salary);
        System.out.printf("Trofon salary: %.2f lv%n", trofonSalary * salary);
        System.out.printf("Sino salary: %.2f lv%n", sinoSalary * salary);
        System.out.printf("Others salary: %.2f lv%n", others * salary);
    }
}
