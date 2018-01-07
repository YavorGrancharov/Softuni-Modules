using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Count_of_Capital_Letters_in_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] array = Console.ReadLine()
                .Split()
                .ToArray();

            int[] stringCount = new int[array.Length];
            
            var count = 0;

            for (int i = 0; i < stringCount.Length; i++)
            {
                if (array[i].Length < 2)
                {
                    count++;
                }
            }
            Console.WriteLine(count);
        }
    }
}
