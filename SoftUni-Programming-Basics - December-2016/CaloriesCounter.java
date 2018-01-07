import java.util.Scanner;

public class CaloriesCounter {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);

        int n = Integer.parseInt(console.nextLine());

        int sum = 0;

        int calories = 0;

        String[] ingredients = {
                "cheese",
                "tomato sauce",
                "salami",
                "pepper"
        };

            for (int i = 1; i <= n; i++) {
                String ingredient = console.nextLine().toLowerCase();
                if (ingredient.length() >= 1 && ingredient.length() <= 50) {
                    if (ingredient.equals(ingredients[0])) {
                        calories += 500;
                    } else if (ingredient.equals(ingredients[1])) {
                        calories += 150;
                    } else if (ingredient.equals(ingredients[2])) {
                        calories += 600;
                    } else if (ingredient.equals(ingredients[3])) {
                        calories += 50;
                    }
                }
            }
            System.out.println("Total calories: " + calories);
    }
}
