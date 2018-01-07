using System;
using System.Collections.Generic;
using System.Linq;

namespace Increasing_Crisis
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            List<int> empty = new List<int>();

            for (int i = 0; i < 1; i++)
            {
                List<int> sequences = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
                if (empty.Count == 0)
                {
                    empty.AddRange(sequences);
                }
                else
                {
                    for (int j = 0; j < n - 1; j++)
                    {
                        List<int> _2ndSequences = Console.ReadLine().Split(' ').Select(int.Parse).ToList();
                        for (int k = 0; k < sequences.Count; k++)
                        {
                            foreach (var x in _2ndSequences)
                            {
                                if (sequences[k] <= x)
                                {
                                    sequences.Insert(sequences.IndexOf(sequences[k + 1]), _2ndSequences.Count - x - 1);
                                }
                            }
                        }
                    }
                }
            }
            Console.WriteLine(string.Join(" ", empty));
        }
    }
}
