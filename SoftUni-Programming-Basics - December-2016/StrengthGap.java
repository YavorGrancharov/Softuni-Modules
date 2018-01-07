import java.util.Scanner;

public class StrengthGap {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        double userInput = Double.parseDouble(console.nextLine());
        double userBody = Double.parseDouble(console.nextLine());
        double squat = Double.parseDouble(console.nextLine());
        double press = Double.parseDouble(console.nextLine());
        double lunge = Double.parseDouble(console.nextLine());
        double fsquat = Double.parseDouble(console.nextLine());
        double pullup = Double.parseDouble(console.nextLine());
        double dip = Double.parseDouble(console.nextLine());
        double output = 0.0;

        double output1 = (squat / 0.8);
        double output2 = (press / 0.4);
        double output3 = (lunge / 0.7);
        double output4 = (fsquat / 0.68);
        double output5 = ((pullup + userBody) / 0.65);
        double output6 = ((dip + userBody) / 0.75);

        if (output1 > userInput && output1 > output2 && output1 > output3 && output1 > output4 && output1 > output5 && output1 > output6) {
            output = output1;
        } else if (output2 > userInput && output2 > output1 && output2 > output3 && output2 > output4 && output2 > output5 && output2 > output6) {
            output = output2;
        } else if (output3 > userInput && output3 > output1 && output3 > output2 && output3 > output4 && output3 > output5 && output3 > output6) {
            output = output3;
        } else if (output4 > userInput && output4 > output1 && output4 > output2 && output4 > output3 && output4 > output5 && output4 > output6) {
            output = output4;
        } else if (output5 > userInput && output5 > output1 && output5 > output2 && output5 > output3 && output5 > output4 && output5 > output6) {
            output = output5;
        } else if (output6 > userInput && output6 > output1 && output6 > output2 && output6 > output3 && output6 > output4 && output6 > output5) {
            output = output6;
        } else {
            output = userInput;
        }
        double sum = userInput + squat + press + lunge + fsquat + (pullup + userBody) + (dip + userBody);
        System.out.println(System.out.printf("%.0f", output));

        double squat2 = output * 0.8;
        double press2 = output * 0.4;
        double lunge2 = output * 0.7;
        double fsquat2 = output * 0.68;
        double pullup2 = ((output * 0.65) - userBody);
        double dip2 = ((output * 0.75) - userBody);

        System.out.println(System.out.printf("%.0f", squat2));
        System.out.println(System.out.printf("%.0f", press2));
        System.out.println(System.out.printf("%.0f", lunge2));
        System.out.println(System.out.printf("%.0f", fsquat2));
        System.out.println(System.out.printf("%.0f", pullup2));
        System.out.println(System.out.printf("%.0f", dip2));

        double sum2 = output + squat2 + press2 + lunge2 + fsquat2 + (pullup2 + userBody) + (dip2 + userBody);
        double efficiency = sum / sum2;
        System.out.println("Ideal balance is: " + (efficiency * 100) + "%");
    }
}