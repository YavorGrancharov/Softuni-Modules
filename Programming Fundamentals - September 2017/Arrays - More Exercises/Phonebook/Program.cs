using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Phonebook
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] numbers = Console.ReadLine().Split(' ');

            string[] names = Console.ReadLine().Split(' ');

            string input = Console.ReadLine();

            while (input != "done")
            {
                PrintResult(numbers, names, input);
                input = Console.ReadLine();
            }
        }

        static void PrintResult(string[] numbers, string[] names, string input)
        {
            for (int i = 0; i < names.Length; i++)
            {
                if (input == names[i])
                {
                    Console.WriteLine($"{names[i]} -> {numbers[i]}");
                }
            }
        }
    }
}
