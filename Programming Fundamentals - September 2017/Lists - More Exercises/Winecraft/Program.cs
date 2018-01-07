using System;
using System.Collections.Generic;
using System.Linq;

namespace Winecraft
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> grapes = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int n = int.Parse(Console.ReadLine());

            List<int> greaterGrape = new List<int>();

            for (int i = 1; i < grapes.Count - 1; i++)
            {
                for (int j = 0; j < grapes.Count; j++)
                {
                    if (grapes[i] > grapes[j])
                    {
                        greaterGrape.Add(grapes[i]);                       
                    }
                }
            }
            Console.WriteLine(string.Join(" ", greaterGrape));

            for (int i = 0; i < grapes.Count; i++)
            {
                if (grapes[i] <= n)
                {
                    grapes[i] = 0;
                }
            }
            Console.WriteLine(string.Join(" ", grapes));
        }
    }
}