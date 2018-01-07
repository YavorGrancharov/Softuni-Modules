import java.util.Scanner;

public class Integer_to_Hex_and_Binary {
    public static void main(String[] args) {

        DecimalToHex hex = new DecimalToHex();

        hex.getVal();
        hex.convert();

        DecimalToBinary bin = new DecimalToBinary();

        bin.getVal();
        bin.convert();
    }
    public static class DecimalToHex {

        int num;

        void getVal() {

            Scanner console = new Scanner(System.in);

            num = Integer.parseInt(console.nextLine());
        }

        void convert() {

            String hex = Integer.toHexString(num);

            System.out.println(hex.toUpperCase());
        }
    }
    public static class DecimalToBinary {

        int num;

        void getVal() {

            Scanner console = new Scanner(System.in);

            num = Integer.parseInt(console.nextLine());
        }

        void convert() {

            String binary = Integer.toBinaryString(num);

            System.out.println(binary);
        }
    }
}
