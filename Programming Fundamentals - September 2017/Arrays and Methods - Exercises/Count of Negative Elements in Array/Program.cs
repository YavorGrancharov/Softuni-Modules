using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Count_of_Negative_Elements_in_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            var array = new int[n];

            int i, count = 0;

            for (i = 0; i < n; i++)
            {
                array[i] = int.Parse(Console.ReadLine());

                if (array[i] < 0)
                {
                    count++;
                }
            }
            Console.WriteLine(count);
        }
    }
}
