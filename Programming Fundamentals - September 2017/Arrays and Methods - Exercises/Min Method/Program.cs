using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Min_Method
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = int.Parse(Console.ReadLine());
            int b = int.Parse(Console.ReadLine());
            int c = int.Parse(Console.ReadLine());

            if (c > GetMin(a, b))
            {
                Console.WriteLine(GetMin(a, b));
            }
            else
            {
                Console.WriteLine(c);
            }
        }

        static int GetMin(int a, int b)
        {
            if (a > b)
            {
                return(b);
            }
            else
            {
                return(a);
            }
        }
    }
}
