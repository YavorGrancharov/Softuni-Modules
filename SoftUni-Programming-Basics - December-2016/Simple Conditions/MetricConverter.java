import java.text.DecimalFormat;
import java.util.Scanner;

/**
 * Created by Lalka on 12/15/2016.
 */
public class MetricConverter {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double num = Double.parseDouble(console.nextLine());
        String input = console.nextLine();
        String output = console.nextLine();
        double resultInput = num;

        if (input.equals("m")) {
            resultInput = (num / 1);
        }
        else if (input.equals("mm")) {
            resultInput = (num / 1000);
        }
        else if (input.equals("cm")) {
            resultInput = (num / 100);
        }
        else if (input.equals("mi")) {
            resultInput = (num / 0.000621371192);
        }
        else if (input.equals("in")) {
            resultInput = (num / 39.3700787);
        }
        else if (input.equals("km")) {
            resultInput = (num / 0.001);
        }
        else if (input.equals("ft")) {
            resultInput = (num / 3.2808399);
        }
        else if (input.equals("yd")) {
            resultInput = (num / 1.0936133);
        }

        //double resultOutput = 0.0;

        if (output.equals("m")) {
            resultInput = (resultInput * 1);
        }
        else if (output.equals("mm")) {
            resultInput = (resultInput * 1000);
        }
        else if (output.equals("cm")) {
            resultInput = (resultInput * 100);
        }
        else if (output.equals("mi")) {
            resultInput = (resultInput * 0.000621371192);
        }
        else if (output.equals("in")) {
            resultInput = (resultInput * 39.3700787);
        }
        else if (output.equals("km")) {
            resultInput = (resultInput * 0.001);
        }
        else if (output.equals("ft")) {
            resultInput = (resultInput * 3.2808399);
        }
        else if (output.equals("yd")) {
            resultInput = (resultInput * 1.0936133);
        }

        DecimalFormat df = new DecimalFormat("########.#######");
        System.out.printf(df.format(resultInput));
        //System.out.println(resultInput + " " + output);
    }
}
