using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sum_of_Odd_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var sum = 0;

            for(var i = 1; i <= n; i++)
            {
                    Console.WriteLine("{0}", i * 2 - 1);
            }
            sum = n * n;
            Console.WriteLine($"Sum: {sum}");
        }
    }
}
