using System;
using System.Collections.Generic;
using System.Linq;

namespace Letter_Repetition
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] input = Console.ReadLine().ToCharArray();
            //var chars = string.Join(string.Empty, input).ToCharArray();
            Dictionary<char, int> count = new Dictionary<char, int>();

            foreach (var x in input)
            {
                if (!count.ContainsKey(x))
                {
                    count[x] = 0;
                }
                count[x]++;
            }
            foreach (var c in count)
            {
                Console.WriteLine($"{c.Key} -> {c.Value}");
            }
        }
    }
}
