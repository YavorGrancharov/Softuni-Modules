using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace X
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());

            string ex = new string('x', n);
            string spaceIn = new string(' ', n - 2);
            string spaceLeft = new string(' ', 0);
            string spaceRight = new string(' ', 0);

            for (int i = 3; i <= n / 2; i++)
            {
                Console.WriteLine($"{ex}{spaceIn}{ex}");
            }
        }
    }
}
