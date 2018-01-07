using System;
using System.Collections.Generic;
using System.Linq;

namespace Decode_Radio_Frequencies
{
    class Program
    {
        static void Main(string[] args)
        {
            decimal[] input = Console.ReadLine().Split(' ').Select(decimal.Parse).ToArray();

            List<string> output = new List<string>();

            decimal left = 0;
            decimal right = 0;
            for (int i = 0; i < input.Length; i++)
            {
                left = Math.Truncate(input[i]);
                right = input[i] - left;
                if (left > 0)
                {
                    output.Insert(i, left.ToString());
                }
                if (right > 0)
                {
                    output.Insert(i + 1, right.ToString().TrimStart('0').TrimStart('.'));
                }
            }

            List<int> asInt = output.Select(s => Convert.ToInt32(s)).ToList();

            char converted = '\0';
            string concat = string.Empty;
            for (int i = 0; i < asInt.Count; i++)
            {
                converted = Convert.ToChar(asInt[i]);
                concat += converted;
            }
            Console.WriteLine(concat);
        }
    }
}