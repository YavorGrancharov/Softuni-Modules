using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Count_of_Given_Element_in_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine().Split().ToArray();
            var newArray = Array.ConvertAll(array, int.Parse);

            var match = int.Parse(Console.ReadLine());

            var count = 0;

            foreach (var num in newArray)
            {
                if (num == match)
                {
                    count++;
                }
            }
            Console.WriteLine(count);
        }
    }
}
