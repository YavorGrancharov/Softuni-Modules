using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Largest_Element_in_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            var array = new int[n];

            var largest = array.Max();

            for (int i = 0; i < n; i++)
            {
                array[i] = int.Parse(Console.ReadLine());

                if (array[i] > largest)
                {
                    largest = array[i];
                }
            }
            Console.WriteLine(largest);
        }
    }
}
