using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Count_Occurrences_of_Larger_Numbers_in_Array
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine().Split().ToArray();
            var newArray = Array.ConvertAll(array, double.Parse);

            var check = double.Parse(Console.ReadLine());

            var count = 0;

            foreach (var num in newArray)
            {
                if (num > check)
                {
                    count++;
                }
            }
            Console.WriteLine(count);
        }
    }
}
