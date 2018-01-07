using System;
using System.Collections.Generic;
using System.Linq;

namespace Distinct_List
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine().Split(' ').Select(int.Parse).Distinct().ToList();
            Console.WriteLine(string.Join(" ", list));
        }
    }
}
