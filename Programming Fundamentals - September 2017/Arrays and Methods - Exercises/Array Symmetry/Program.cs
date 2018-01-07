using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Array_Symmetry
{
    class Program
    {
        static void Main(string[] args)
        {
            var array = Console.ReadLine()
                .Split()
                .ToArray();

            var symmetric = string.Empty;

            for (int i = 0; i < (array.Length - 1) / 2; i++)
            {
                if (array[i] == array[array.Length - 1 - i])
                {
                    symmetric = "Yes";
                }
                else
                {
                    symmetric = "No";
                }
            }
            Console.WriteLine(symmetric);
        }
    }
}
