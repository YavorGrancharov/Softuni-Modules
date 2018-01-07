using System;
using System.Linq;

namespace Pairs_by_Difference
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToArray();

            int num = int.Parse(Console.ReadLine());

            int count = 0;
            int diff = 0;
            for (int i = 0; i < arr.Length - 1; i++)
            {
                for (int j = i + 1; j < arr.Length; j++)
                {
                    diff = Math.Abs(arr[i] - arr[j]);
                    if(diff == num)
                    {
                        count++;
                    }
                }                              
            }
            Console.WriteLine(count);
        }
    }
}
