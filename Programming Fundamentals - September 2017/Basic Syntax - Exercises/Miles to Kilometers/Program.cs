using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Miles_to_Kilometers
{
    class Program
    {
        static void Main(string[] args)
        {
            var mile = 1.60934;
            var kilometer = double.Parse(Console.ReadLine());
            var milesKilometer = kilometer * mile;

            Console.WriteLine($"{milesKilometer:F2}");
        }
    }
}
