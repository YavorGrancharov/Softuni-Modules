using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Multiplication_Table_2._0
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            var y = int.Parse(Console.ReadLine());
            
            for (int i = 1; i <= 10; i++)
            {
                if (y == 1)
                {
                    Console.WriteLine($"{n} X {i} = " + n * i);
                }

                else if(y > 1 && y <= 10)
                {
                    Console.WriteLine($"{n} X {y} = " + n * y);
                    y++;
                }
            }

            if(y > 11)
            {
                Console.WriteLine($"{n} X {y} = " + n * y);
            }            
        }
    }
}
