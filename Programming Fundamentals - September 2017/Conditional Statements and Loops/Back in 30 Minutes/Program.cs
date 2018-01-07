using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Back_in_30_Minutes
{
    class Program
    {
        static void Main(string[] args)
        {
            var hours = int.Parse(Console.ReadLine());
            var minutes = int.Parse(Console.ReadLine());

            minutes = minutes + 30;

            if (minutes > 59)
            {
                hours = hours + 1;
                minutes = minutes - 60;
            }

            if (hours > 23)
            {
                hours = 0;
            }

            if (minutes < 10)
            {
                Console.WriteLine(hours + ":" + '0' + minutes);
            }
            else
            {
                Console.WriteLine(hours + ":" + minutes);
            }
        }
    }
}
