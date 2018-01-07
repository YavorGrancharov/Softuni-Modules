using System;
using System.Collections.Generic;
using System.Linq;

namespace Array_Data
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> input = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            string comm = Console.ReadLine();

            double avg = input.Average();
            foreach (var x in input.Where(n => n < avg).ToList())
            {
                input.Remove(x);
            }
            input.Sort();

            int max = input.Max();
            int min = input.Min();

            switch (comm)
            {
                case "Max":
                    Console.WriteLine("{0}", max);
                    break;
                case "Min":
                    Console.WriteLine("{0}", min);
                    break;
                case "All":
                    Console.WriteLine("{0}", string.Join(" ", input));
                    break;
            }
        }
    }
}
