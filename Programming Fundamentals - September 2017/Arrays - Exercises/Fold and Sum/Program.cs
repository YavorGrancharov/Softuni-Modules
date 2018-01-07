using System;
using System.Collections.Generic;
using System.Linq;

namespace Fold_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] input = Console.ReadLine().Split().Select(int.Parse).ToArray();

            List<int> left = new List<int>();
            List<int> right = new List<int>();

            for (int i = 0; i < input.Length / 4; i++)
            {
                left.Add(input[i]);
            }
            left.Reverse();

            Array.Reverse(input);
            for (int i = 0; i < input.Length / 4; i++)
            {
                right.Add(input[i]);
            }

            List<int> output = new List<int>();
            for (int i = 0; i < left.Count; i++)
            {
                output.Add(left[i]);
            }
            for (int i = 0; i < right.Count; i++)
            {
                output.Add(right[i]);
            }

            List<int> middle = new List<int>();
            Array.Reverse(input);
            for (int i = input.Length / 4; i < input.Length - (input.Length / 4); i++)
            {
                middle.Add(input[i]);
            }

            int sum = 0;
            List<int> result = new List<int>();
            for (int i = 0; i < output.Count; i++)
            {
                sum = output[i] + middle[i];
                result.Add(sum);
            }
            Console.WriteLine(string.Join(" ",result));
        }
    }
}
