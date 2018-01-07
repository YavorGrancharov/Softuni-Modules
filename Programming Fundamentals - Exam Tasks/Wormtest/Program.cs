using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Wormtest
{
    class Program
    {
        static void Main(string[] args)
        {
            int length = int.Parse(Console.ReadLine());
            double width = double.Parse(Console.ReadLine());

            int lengthInCm = length * 100;

            double result = 0.0;
            if (lengthInCm % width == 0)
            {
                result = lengthInCm * width;
                Console.WriteLine("{0:F2}", result);
            }
            else
            {
                result = (lengthInCm / width) * 100;
                Console.WriteLine("{0:F2}%", result);
            }           
        }
    }
}
