using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Array_Elements_Equal_to_Their_Index
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            string index = string.Empty;

            for (int i = 0; i < array.Length; i++)
            {
                if (array[i] == Array.IndexOf(array, i))
                {
                    index += array[i] + " ";
                }
            }
            Console.WriteLine(index);
        }
    }
}
