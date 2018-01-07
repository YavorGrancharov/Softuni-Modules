using System;
using System.Collections.Generic;
using System.Linq;

namespace Bomb_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> seq = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            List<int> seq2 = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            int start = 0;
            int index = 0;
            int end = 0;

            List<int> temp = new List<int>(); 
            for (int i = 0; i < seq.Count; i++)
            {
                int num = seq2[0];
                int power = seq2[1];

                if (seq[i] == num)
                {
                    index = i;                 
                    start = index - power;
                    end = index + power;
                    seq.RemoveRange(start, end);
                }
            }
            Console.WriteLine(string.Join(" ",seq));
        }
    }
}
