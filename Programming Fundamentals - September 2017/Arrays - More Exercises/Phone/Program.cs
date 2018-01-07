using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Phone
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] numbers = Console.ReadLine().Split(' ');

            string[] names = Console.ReadLine().Split(' ');

            string[] input = Console.ReadLine().Split(' ');

            string number = "";

            while (input[0] != "done")
            {
                if (input[0] == "call")
                {
                    PrintResult(numbers, names, input);
                    DigitSum(number);
                }
                input = Console.ReadLine().Split(' ');
            }
        }

        static void PrintResult(string[] numbers, string[] names, string[] input)
        {
            for (int i = 0; i < names.Length; i++)
            {
                if (input[0] == names[i])
                {
                    Console.WriteLine($"calling {numbers[i]}...");
                }
                else if (input[0] == numbers[i])
                {
                    Console.WriteLine($"calling {names[i]}...");
                }
            }
        }

        static void DigitSum(string number)
        {
            int sum = 0;
            var digits = number.ToCharArray();

            foreach (var n in digits)
            {
                if (n >= '0' && n <= '9')
                {
                    sum += n - '0';
                }
            }

            if (sum % 2 == 0)
            {
                int min = sum / 60;
                int sec = sum % 60;

                Console.WriteLine($"call ended. duration: {min:D2}:{sec:D2}");
            }
            else if (sum % 2 != 0)
            {
                Console.WriteLine("no answer");
            }
        }
    }
}
