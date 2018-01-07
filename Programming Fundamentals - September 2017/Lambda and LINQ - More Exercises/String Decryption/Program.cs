using System;
using System.Collections.Generic;
using System.Linq;

namespace String_Decryption
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] skipped = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse).ToArray();
            int[] input = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse).ToArray();

            char converted = '\0';
            string concat = string.Empty;

            foreach (var entry in input
                .Where(p => p >= 65 && p <= 90)
                .Skip(skipped[0])
                .Take(skipped[1])
                .ToArray())
            {
                converted = Convert.ToChar(entry);
                concat += converted;
            }
            Console.WriteLine("{0}", concat);
        }
    }
}
