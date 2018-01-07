using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Equal_Sum_After_Extraction
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> first = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            List<int> second = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            int sumFirst = 0;
            int sumSecond = 0;

            for (int i = 0; i < first.Count; i++)
            {
                if (second.Contains(first[i]))
                {
                    second.Remove(first[i]); 
                }
            }
            //Console.WriteLine(string.Join(" ", second));

            for (int i = 0; i < first.Count; i++)
            {
                sumFirst += first[i];
            }
            //Console.WriteLine(sumFirst);

            for (int i = 0; i < second.Count; i++)
            {
                sumSecond += second[i];
            }
            //Console.WriteLine(sumSecond);

            if (sumFirst == sumSecond)
            {
                Console.WriteLine($"Yes. Sum: {sumFirst}");
            }
            else
            {
                int diff = Math.Abs(sumFirst - sumSecond);
                Console.WriteLine($"No. Diff: {diff}");
            }
        }
    }
}
