using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Triangle_of_Numbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int i, j;
            int n = int.Parse(Console.ReadLine());

            for (i = 0; i <= n; i++)
            {
                for (j = 1; j <= i; j++)
                {
                    Console.Write(i + " ");
                }
                Console.WriteLine();
            }
        }
    }
}
