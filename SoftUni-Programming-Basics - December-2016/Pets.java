import java.util.Scanner;

public class Pets {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int days = Integer.parseInt(console.nextLine());
        int foodKilo = Integer.parseInt(console.nextLine());
        double foodDayDog = Double.parseDouble(console.nextLine());
        double foodDayCat = Double.parseDouble(console.nextLine());
        double foodDayTurtle = Double.parseDouble(console.nextLine());

        double sumFood = foodDayCat * days + foodDayDog * days + (foodDayTurtle / 1000) * days;

        if (foodKilo > sumFood) {
            System.out.println((int)Math.floor(foodKilo - sumFood) + " kilos of food left.");
        } else {
            System.out.println((int)Math.ceil(sumFood - foodKilo) + " more kilos of food are needed.");
        }
    }
}
