using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Remove_Elements_at_Odd_Positions
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> list = Console.ReadLine()
                .Split(new char[] { ' ' },
                StringSplitOptions.RemoveEmptyEntries)
                .ToList();

            List<string> empty = new List<string>();

            for (int i = 0; i < list.Count; i++)
            {
                if (i % 2 == 1) 
                {
                    empty.Add(list[i]);
                }
            }
            Console.WriteLine(string.Join("",empty));
        }
    }
}
