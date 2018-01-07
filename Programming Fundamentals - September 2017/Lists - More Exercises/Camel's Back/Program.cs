using System;
using System.Collections.Generic;
using System.Linq;

namespace Camel_s_Back
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> town = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            int back = int.Parse(Console.ReadLine());

            int round = 0;
            while (town.Count > back)
            {
                town.Remove(town[0]);
                town.Remove(town[town.Count - 1]);
                round++;
            }
            
            if (round == 0)
            {
                Console.WriteLine("already stable: " + string.Join(" ", town));
            }
            else
            {
                Console.WriteLine($"{round} rounds");
                Console.WriteLine("remaining: " + string.Join(" ", town));
            }
        }
    }
}
