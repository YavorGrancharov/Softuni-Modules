using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Flip_List_Sides
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> list = Console.ReadLine()
                .Split(' ')
                .Select(int.Parse)
                .ToList();

            list.Reverse(list.IndexOf(list[1]), list.IndexOf(list[list.Count - 2]));

            Console.WriteLine(string.Join(" ", list));
        }
    }
}
