using System;

namespace Number_Checker
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            int n;

            if (int.TryParse(input, out n))
            {
                Console.WriteLine("It is a number.");
            }
            else
            {
                Console.WriteLine("Invalid input!");
            }
        }
    }
}
