import java.util.Scanner;

/**
 * Created by Lalka on 12/23/2016.
 */
public class NumberZeroToHundredToText {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        int num = Integer.parseInt(console.nextLine());
        String output = "";

        if (num == 0) {
            System.out.print("zero");
        } else if (num == 100){
            System.out.print("one hundred");
        }

        if (num < 0 || num > 100) {
            System.out.print("invalid number");
        } else {

            if (num > 19 && num < 100) {
                int tens = num / 10;
                int units = num % 10;
                switch (tens) {
                    case 2:
                        output += "twenty ";
                        break;
                    case 3:
                        output += "thirty ";
                        break;
                    case 4:
                        output += "fourty ";
                        break;
                    case 5:
                        output += "fifty ";
                        break;
                    case 6:
                        output += "sixty ";
                        break;
                    case 7:
                        output += "seventy ";
                        break;
                    case 8:
                        output += "eighty ";
                        break;
                    case 9:
                        output += "ninety ";
                        break;
                }

                switch (units) {
                    case 1:
                        output += "one";
                        break;
                    case 2:
                        output += "two";
                        break;
                    case 3:
                        output += "three";
                        break;
                    case 4:
                        output += "four";
                        break;
                    case 5:
                        output += "five";
                        break;
                    case 6:
                        output += "six";
                        break;
                    case 7:
                        output += "seven";
                        break;
                    case 8:
                        output += "eight";
                        break;
                    case 9:
                        output += "nine";
                        break;
                }
                System.out.println(output.trim());
            }
        }

        if (num < 20) {
            switch (num) {
                case 1:
                    output += "one";
                    break;
                case 2:
                    output += "two";
                    break;
                case 3:
                    output += "three";
                    break;
                case 4:
                    output += "four";
                    break;
                case 5:
                    output += "five";
                    break;
                case 6:
                    output += "six";
                    break;
                case 7:
                    output += "seven";
                    break;
                case 8:
                    output += "eight";
                    break;
                case 9:
                    output += "nine";
                    break;
                case 10:
                    output += "ten";
                    break;
                case 11:
                    output += "eleven";
                    break;
                case 12:
                    output += "twelve";
                    break;
                case 13:
                    output += "thirteen";
                    break;
                case 14:
                    output += "fourteen";
                    break;
                case 15:
                    output += "fifteen";
                    break;
                case 16:
                    output += "sixteen";
                    break;
                case 17:
                    output += "seventeen";
                    break;
                case 18:
                    output += "eighteen";
                    break;
                case 19:
                    output += "nineteen";
                    break;
            }
            System.out.println(output);
        }
    }
}
