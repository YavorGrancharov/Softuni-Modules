using System;
using System.Collections.Generic;
using System.Linq;

namespace Diamond_Problem
{
    class Program
    {
        static void Main(string[] args)
        {
            string input = Console.ReadLine();

            List<string> diamonds = input
                .Split('<', '>')
                .Where((item, index) => index % 2 != 0)
                .ToList();

            int count = 0;
            int sum = 0;
            string concat = string.Empty;
            for (int i = 0; i < diamonds.Count; i++)
            {
                concat = diamonds[i];
                for (int j = 0; j < concat.Length; j++)
                {
                    if (concat[j] >= '0' && concat[j] <= '9')
                    {
                        sum += concat[j] - '0';
                    } 
                }
                count++;
                if (count > 1)
                {
                    sum -= count * 2;
                }
                
                if (sum > 0)
                {
                    Console.WriteLine("Found {0} carat diamond", sum);
                }
                else
                {
                    Console.WriteLine("Better luck next time");
                }
            }
        }
    }
}