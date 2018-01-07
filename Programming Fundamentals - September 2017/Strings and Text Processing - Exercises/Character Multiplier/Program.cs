using System;
using System.Linq;

namespace Character_Multiplier
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] input = Console.ReadLine().Split().ToArray();
            Console.WriteLine(multiplier(input));
        }
        static int multiplier(string[] input)
        {
            string left = input[0];
            string right = input[1];

            int min = Math.Min(left.Length, right.Length);
            int max = Math.Max(left.Length, right.Length);

            int result = 0;

            for (int i = 0; i < min; i++)
            {
                result += left[i] * right[i];
            }

            if (left.Length != right.Length)
            {
                string longer = left.Length > right.Length ? longer = left : longer = right;
                for (int i = min; i < max; i++)
                {
                    result += longer[i];
                }
            }
            return result;
        }
    }
}
