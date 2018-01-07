using System;
using System.Collections.Generic;
using System.Linq;

namespace Rotate_and_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
            int k = int.Parse(Console.ReadLine());

            int[] sum = new int[list.Count];
            for (int i = 0; i < k; i++)
            {
                list.Insert(0, list[list.Count - 1]);
                list.RemoveAt(list.Count - 1);

                for (int m = 0; m < list.Count; m++)
                {
                    sum[m] += list[m];
                }
            }
            Console.WriteLine(string.Join(" ", sum));
        }
    }
}
