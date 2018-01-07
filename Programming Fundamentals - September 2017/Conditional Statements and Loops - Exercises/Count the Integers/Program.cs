using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Count_the_Integers
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = Console.ReadLine();

            int num;

            int count = 0;

            while (int.TryParse(input, out num))
            {
                input = Console.ReadLine();
                count++;
            }

            Console.WriteLine(count);
        }
    }
}
