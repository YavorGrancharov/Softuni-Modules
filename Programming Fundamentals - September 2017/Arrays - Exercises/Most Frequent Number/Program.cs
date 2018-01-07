using System;
using System.Linq;

namespace Most_Frequent_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToArray();
           
            int freq = 0;
            int count = 0;
            int current = 0;

            for (int i = 0; i < arr.Length; i++)
            {
                count = 0;
                for (int j = 0; j < arr.Length; j++)
                {
                    if (arr[i] == arr[j])
                    {
                        count++;
                    }
                }
                if (count > current)
                {
                    current = count;
                    freq = arr[i];
                }
            }
            Console.WriteLine(freq);
        }
    }
}
