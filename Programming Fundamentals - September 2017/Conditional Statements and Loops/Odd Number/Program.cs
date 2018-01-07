using System;

namespace Odd_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            for(int i = 1; i <= 10; i++)
            {
                var n = Math.Abs(int.Parse(Console.ReadLine()));

                if(n % 2 != 0)
                {
                    Console.WriteLine($"The number is: {n}");
                }
                else
                {
                    Console.WriteLine("Please write an odd number.");
                }
            }
        }
    }
}
