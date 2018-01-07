using System;

namespace Integer_to_Hex_and_Binary
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            string hex = Convert.ToString(n,16);
            Console.WriteLine(hex.ToUpper());
            string bin = Convert.ToString(n, 2);
            Console.WriteLine(bin);
        }
    }
}
