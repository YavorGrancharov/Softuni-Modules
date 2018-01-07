using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Passed
{
    class Program
    {
        static void Main(string[] args)
        {
            var num = Double.Parse(Console.ReadLine());

            if (num >= 3.00)
            {
                Console.WriteLine("Passed!");
            }
            else
            {
                Console.WriteLine();
            }
        }
    }
}
