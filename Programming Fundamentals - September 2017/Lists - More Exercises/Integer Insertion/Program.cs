using System;
using System.Collections.Generic;
using System.Linq;

namespace Integer_Insertion
{
    class Program
    {
        static void Main(string[] args)
        {
            IList<int> list = Console.ReadLine().Split(' ').Select(int.Parse).ToList();

            string input = Console.ReadLine();

            while (input != "end")
            {
                int index = input[0] - 48;
                int item = int.Parse(input);

                list.Insert(index, item);

                input = Console.ReadLine();
            }

            Console.WriteLine(string.Join(" ", list));
        }
    }
}